import { useEffect, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../hooks/useTheme";
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";
import Helmet from "./Helmet";
import type { PageConfig } from "../types/page";
import taipeiVideo from "../assets/182237-868066892_tiny.mp4";
import "../pages/Home.css";

gsap.registerPlugin(ScrollTrigger);

interface PageLayoutProps {
  config: PageConfig;
}

export default function PageLayout({ config }: PageLayoutProps) {
  const { themeColor } = useTheme();
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

  const videoSource = config.videoSrc || taipeiVideo;

  return (
    <>
      <Helmet
        title={config.seo.title}
        description={config.seo.description}
        keywords={config.seo.keywords}
        author={config.seo.author}
      />
      <div className="sticky-c">
        <Navbar />
        <div ref={mainRef} className="video-wrapper-bg">
          <div
            className="video-border-wrapper"
            style={{ borderColor: themeColor }}
          >
            <video
              ref={videoRef}
              autoPlay
              src={videoSource}
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
            </svg>
            Scroll to navigate
          </span>
          <span className="hero-title backdrop">{config.heroTitle}</span>
          <h1 className="hero-title main" ref={textRef}>
            {config.heroTitle}
          </h1>
        </div>

        <div ref={spacerRef} style={{ height: "200vh" }}></div>

        <IntroSection content={config.introSection} />

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
    </>
  );
}
