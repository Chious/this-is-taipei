import type { PageConfig } from "../types/page";

export const pageConfigs: Record<string, PageConfig> = {
  "/": {
    themeColor: "salmon",
    heroTitle: "This is Taipei",
    seo: {
      title: "This is Taipei | 探索台北",
      description:
        "Explore Taipei - Discover the vibrant culture, amazing food, and stunning landmarks of Taiwan's capital city. 探索台北的文化、美食與地標。",
      keywords:
        "Taipei, Taiwan, Travel, Tourism, Night Market, Taipei 101, Culture, 台北, 台灣, 旅遊",
      author: "This is Taipei",
    },
    introSection: {
      title: "探索台北 Explore Taipei",
      contentBlocks: [
        {
          image:
            "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
          imageAlt: "台北 101",
          title: "台北 101",
          paragraphs: [
            "曾經的世界第一高樓，台北 101 不僅是城市的地標，更是台灣經濟奇蹟的象徵。從觀景台俯瞰，整個台北盆地的美景盡收眼底。",
            "Once the world's tallest building, Taipei 101 is not only a city landmark but also a symbol of Taiwan's economic miracle.",
          ],
        },
        {
          image:
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
          imageAlt: "士林夜市",
          title: "夜市文化",
          paragraphs: [
            "台北的夜市是體驗在地文化的最佳去處。從士林夜市到饒河街夜市，各式各樣的小吃美食，讓您的味蕾展開一場精彩的冒險。",
            "Night markets are the best place to experience local culture. From Shilin to Raohe, explore a culinary adventure.",
          ],
          reverse: true,
        },
        {
          image:
            "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
          imageAlt: "龍山寺",
          title: "歷史古蹟",
          paragraphs: [
            "龍山寺、中正紀念堂、故宮博物院...台北保存著豐富的歷史文化遺產，每一處都訴說著這座城市的故事。",
            "From Longshan Temple to the National Palace Museum, Taipei preserves a rich cultural heritage.",
          ],
        },
        {
          image:
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
          imageAlt: "信義區",
          title: "現代都會",
          paragraphs: [
            "信義區是台北的時尚中心，匯聚了國際精品、創意設計與現代建築。這裡完美融合了傳統與現代，東方與西方。",
            "Xinyi District is Taipei's fashion center, perfectly blending tradition with modernity, East with West.",
          ],
          reverse: true,
        },
      ],
    },
  },
  "/101": {
    themeColor: "dodgerblue",
    heroTitle: "Taipei 101",
    seo: {
      title: "Taipei 101 | This is Taipei",
      description:
        "Taipei 101 - Taiwan's most famous landmark and once the world's tallest building. Experience breathtaking views from the 89th floor observatory. 台北101，台灣最著名的地標建築。",
      keywords:
        "Taipei 101, Taiwan, Landmark, Skyscraper, Observatory, 台北101, 觀景台",
      author: "This is Taipei",
    },
    introSection: {
      title: "台北 101 Taipei 101",
      contentBlocks: [
        {
          image:
            "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
          imageAlt: "台北 101",
          title: "建築奇蹟",
          paragraphs: [
            "台北 101 是台灣最著名的地標建築，曾經是世界第一高樓。",
            "Taipei 101 is Taiwan's most famous landmark, once the world's tallest building.",
          ],
        },
        {
          image:
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
          imageAlt: "觀景台",
          title: "觀景台",
          paragraphs: [
            "從 89 樓觀景台可以俯瞰整個台北市的美景。",
            "The 89th floor observatory offers stunning views of Taipei.",
          ],
          reverse: true,
        },
      ],
    },
  },
  "/night-market": {
    themeColor: "orange",
    heroTitle: "Night Markets",
    seo: {
      title: "Night Markets | This is Taipei",
      description:
        "Taipei Night Markets - Experience authentic Taiwanese street food culture at Shilin, Raohe and other famous night markets. 體驗台北夜市文化與美食。",
      keywords:
        "Night Market, Shilin, Raohe, Street Food, Taiwan Food, 夜市, 士林, 饒河, 台灣美食",
      author: "This is Taipei",
    },
    introSection: {
      title: "夜市文化 Night Market Culture",
      contentBlocks: [
        {
          image:
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
          imageAlt: "士林夜市",
          title: "士林夜市",
          paragraphs: [
            "士林夜市是台北最著名的夜市之一，有各種美食和小吃。",
            "Shilin Night Market is one of Taipei's most famous night markets with various foods.",
          ],
        },
        {
          image:
            "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
          imageAlt: "饒河街夜市",
          title: "饒河街夜市",
          paragraphs: [
            "饒河街夜市以美食聞名，是體驗台灣小吃的絕佳地點。",
            "Raohe Street Night Market is famous for its food and great for experiencing Taiwanese snacks.",
          ],
          reverse: true,
        },
      ],
    },
  },
  "/longshan-temple": {
    themeColor: "gold",
    heroTitle: "Long Shan Temple",
    seo: {
      title: "Longshan Temple | This is Taipei",
      description:
        "Longshan Temple - One of Taipei's most famous temples, built in 1738. Explore this important cultural heritage site showcasing traditional architecture. 龍山寺，台北最著名的寺廟之一。",
      keywords:
        "Longshan Temple, Temple, Heritage, Culture, Traditional Architecture, 龍山寺, 寺廟, 文化遺產",
      author: "This is Taipei",
    },
    introSection: {
      title: "龍山寺 Long Shan Temple",
      contentBlocks: [
        {
          image:
            "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
          imageAlt: "龍山寺",
          title: "歷史悠久的寺廟",
          paragraphs: [
            "龍山寺是台北最著名的寺廟之一，建於 1738 年，是台灣重要的文化遺產。",
            "Longshan Temple is one of Taipei's most famous temples, built in 1738, and is an important cultural heritage site in Taiwan.",
          ],
        },
        {
          image:
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&q=80",
          imageAlt: "寺廟建築",
          title: "傳統建築藝術",
          paragraphs: [
            "寺廟展現了精湛的傳統建築工藝，包括精美的雕刻和彩繪。",
            "The temple showcases exquisite traditional architecture, including intricate carvings and paintings.",
          ],
          reverse: true,
        },
      ],
    },
  },
};

// Helper function to get page config by route
export const getPageConfig = (pathname: string): PageConfig => {
  return pageConfigs[pathname] || pageConfigs["/"];
};

// Backward compatibility exports
export const homePageConfig = pageConfigs["/"];
export const taipei101PageConfig = pageConfigs["/101"];
export const nightMarketPageConfig = pageConfigs["/night-market"];
export const longShanTemplePageConfig = pageConfigs["/longshan-temple"];
