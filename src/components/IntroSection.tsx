import type { IntroSectionContent } from "../types/page";
import "../pages/Home.css";
import "./IntroSection.css";
import { TextFade } from "./TextFade";

interface IntroSectionProps {
  content: IntroSectionContent;
}

export default function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="intro-section">
      <h2 className="section-title">
        <TextFade direction="up">{content.title}</TextFade>
      </h2>

      {content.contentBlocks.map((block, index) => (
        <TextFade
          direction="up"
          key={index}
          className={`content-block ${block.reverse ? "reverse" : ""}`}
        >
          <div className="image-container">
            <img src={block.image} alt={block.imageAlt} loading="lazy" />
          </div>
          <div className="text-container">
            <h3>{block.title}</h3>
            {block.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
        </TextFade>
      ))}
    </section>
  );
}
