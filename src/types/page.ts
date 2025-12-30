export interface ContentBlock {
  image: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
  reverse?: boolean;
}

export interface IntroSectionContent {
  title: string;
  contentBlocks: ContentBlock[];
}

export interface PageConfig {
  themeColor: string;
  heroTitle: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    author: string;
  };
  introSection: IntroSectionContent;
  videoSrc?: string;
}
