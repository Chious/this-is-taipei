import taipeiVideo from "../assets/182237-868066892_tiny.mp4";
import hamburderIcon from "../assets/hamburger.svg";
import "./Home.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const mainRef = useRef(null);
  const spacerRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // The Animation Logic
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spacerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(textRef.current, {
        scale: 10,
        opacity: 0,
        pointerEvents: "none",
        ease: "none",
      });

      tl.to(".hero-title.backdrop", {
        top: "0",
        left: "50%",
        transform: "translate(-50%, 0)",
        ease: "none",
      });
      tl.to(".scroll-to-navigate", {
        opacity: 0,
        ease: "none",
      });

      tl.to(
        ".video-border-wrapper",
        {
          borderWidth: 0,
          ease: "none",
        },
        0
      );
    }, mainRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="sticky-c">
      <nav>
        <h2>Made by xxx</h2>
        <h2>Taipei.</h2>
        <img src={hamburderIcon} width={20} height={20} fetchPriority="high" />
      </nav>
      <div ref={mainRef} className="video-wrapper-bg">
        <div className="video-border-wrapper">
          <video
            ref={videoRef}
            autoPlay
            src={taipeiVideo}
            muted
            loop
            playsInline
          ></video>
        </div>
        <span className="scroll-to-navigate">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4L20 12L12 20M19 12H5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          Scroll to navigate
        </span>
        <span className="hero-title backdrop">This is Taipei</span>
        <h1 className="hero-title main" ref={textRef}>
          This is Taipei
        </h1>
      </div>

      <div ref={spacerRef} style={{ height: "200vh" }}></div>

      <section className="intro-section">
        <h2 className="section-title">探索台北 Explore Taipei</h2>

        <div className="content-block">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80"
              alt="台北 101"
              loading="lazy"
            />
          </div>
          <div className="text-container">
            <h3>台北 101</h3>
            <p>
              曾經的世界第一高樓，台北 101
              不僅是城市的地標，更是台灣經濟奇蹟的象徵。從觀景台俯瞰，整個台北盆地的美景盡收眼底。
            </p>
            <p>
              Once the world's tallest building, Taipei 101 is not only a city
              landmark but also a symbol of Taiwan's economic miracle.
            </p>
          </div>
        </div>

        <div className="content-block reverse">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80"
              alt="士林夜市"
              loading="lazy"
            />
          </div>
          <div className="text-container">
            <h3>夜市文化</h3>
            <p>
              台北的夜市是體驗在地文化的最佳去處。從士林夜市到饒河街夜市，各式各樣的小吃美食，讓您的味蕾展開一場精彩的冒險。
            </p>
            <p>
              Night markets are the best place to experience local culture. From
              Shilin to Raohe, explore a culinary adventure.
            </p>
          </div>
        </div>

        <div className="content-block">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80"
              alt="龍山寺"
              loading="lazy"
            />
          </div>
          <div className="text-container">
            <h3>歷史古蹟</h3>
            <p>
              龍山寺、中正紀念堂、故宮博物院...台北保存著豐富的歷史文化遺產，每一處都訴說著這座城市的故事。
            </p>
            <p>
              From Longshan Temple to the National Palace Museum, Taipei
              preserves a rich cultural heritage.
            </p>
          </div>
        </div>

        <div className="content-block reverse">
          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80"
              alt="信義區"
              loading="lazy"
            />
          </div>
          <div className="text-container">
            <h3>現代都會</h3>
            <p>
              信義區是台北的時尚中心，匯聚了國際精品、創意設計與現代建築。這裡完美融合了傳統與現代，東方與西方。
            </p>
            <p>
              Xinyi District is Taipei's fashion center, perfectly blending
              tradition with modernity, East with West.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Video by
          <a href="https://pixabay.com/users/magictv-18171246/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=182237">
            Timo Volz
          </a>
          from
          <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=182237">
            Pixabay
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
