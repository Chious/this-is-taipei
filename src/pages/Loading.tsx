import { useEffect, useState } from "react";
import "./Loading.css";
import { useTheme } from "../hooks/useTheme";

interface LoadingProps {
  onProgressUpdate?: (progress: number) => void;
}

export default function Loading({ onProgressUpdate }: LoadingProps) {
  const { themeColor } = useTheme();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // 2 second animate, progress would smoothly move to 100%
  useEffect(() => {
    if (!isFirstLoad) return;

    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startProgress = 0;
    const targetProgress = 100;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min(
        startProgress + (targetProgress - startProgress) * (elapsed / duration),
        targetProgress
      );

      setProgress(currentProgress);
      onProgressUpdate?.(currentProgress);

      if (currentProgress < targetProgress) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsFadingOut(true);
          setIsFirstLoad(false);
        }, 300);
      }
    };

    requestAnimationFrame(animate);
  }, [isFirstLoad, onProgressUpdate]);

  return (
    <div
      className={`loading-container ${isFadingOut ? "fade-out" : ""}`}
      style={{ backgroundColor: themeColor }}
    >
      <div className="loading-spinner">
        <div className="loading-spinner-inner">{Math.round(progress)}%</div>
      </div>
      <div className="loading-progress">
        <div
          className="loading-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
