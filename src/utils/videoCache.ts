// 視頻緩存管理
const videoCache = new Map<string, HTMLVideoElement>();

/**
 * 獲取或創建緩存的視頻元素
 */
export function getCachedVideo(src: string): HTMLVideoElement {
  if (videoCache.has(src)) {
    const cachedVideo = videoCache.get(src)!;
    // 重置視頻到開始位置
    cachedVideo.currentTime = 0;
    return cachedVideo;
  }

  // 創建新的視頻元素
  const video = document.createElement("video");
  video.src = src;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "auto";

  // 預加載視頻
  video.load();

  // 存儲到緩存
  videoCache.set(src, video);

  return video;
}

/**
 * 清除視頻緩存
 */
export function clearVideoCache(): void {
  videoCache.forEach((video) => {
    video.pause();
    video.src = "";
    video.load();
  });
  videoCache.clear();
}

/**
 * 預加載所有頁面的視頻
 */
export function preloadVideos(videoSources: string[]): Promise<void[]> {
  const promises = videoSources.map((src) => {
    return new Promise<void>((resolve) => {
      const video = getCachedVideo(src);

      if (video.readyState >= 3) {
        // 已經加載完成
        resolve();
        return;
      }

      const handleCanPlay = () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("loadeddata", handleCanPlay);
        video.removeEventListener("error", handleError);
        resolve();
      };

      const handleError = () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("loadeddata", handleCanPlay);
        video.removeEventListener("error", handleError);
        resolve(); // 即使錯誤也繼續
      };

      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("loadeddata", handleCanPlay);
      video.addEventListener("error", handleError);

      // 超時保護
      setTimeout(() => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("loadeddata", handleCanPlay);
        video.removeEventListener("error", handleError);
        resolve();
      }, 10000);
    });
  });

  return Promise.all(promises);
}
