//テストデータ
export const todayCards = [
  {
    id: "KO",
    title: '限定コラボガチャキャラクターデザイン',
    maker: 'Adobe Express',
    price: '¥800',
    bg: 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)'
  },
  {
    id: "A",
    title: '朝倉ころミニフィギュアコース',
    maker: 'Firefly',
    price: '¥600',
    bg: 'linear-gradient(135deg, #87ceeb 0%, #4682b4 100%)'
  }
];

export const weeklyData = {
  weeks: [
    {
      month: 12,
      week: 1,
      items: [
        {
          id: "A",
          title: "商品A",
          maker: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)"
        },
        {
          id: "B",
          title: "商品B",
          maker: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #87ceeb 0%, #4682b4 100%)"
        }
      ]
    },
    {
      month: 12,
      week: 2,
      items: [
        {
          id: "C",
          title: "商品C",
          maker: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #fff4e6 0%, #ffd700 100%)"
        },
        {
          id: "D",
          title: "商品D",
          maker: "A",
          price: "¥300",
          bg: "linear-gradient(135deg, #e8f5e9 0%, #66bb6a 100%)"
        }
      ]
    }
  ]
};

export const rankingData = [
  {
    id: "D",
    title: "ねこだらけマスコットコレクション",
    maker: "Kitty Lab",
    price: "¥400",
    bg: "linear-gradient(135deg, #ffe4e1 0%, #ff9aa2 100%)"
  },
  {
    id: "E",
    title: "レトロ純喫茶ミニチュア",
    maker: "Retro Works",
    price: "¥500",
    bg: "linear-gradient(135deg, #f5deb3 0%, #d2b48c 100%)"
  },
  {
    id: "F",
    title: "宇宙探検フィギュアシリーズ",
    maker: "Space Toy",
    price: "¥600",
    bg: "linear-gradient(135deg, #dcdcff 0%, #6a5acd 100%)"
  }
];

export const favoriteItems = [
  {
    id: "D",
    title: "ねこだらけマスコットコレクション",
    maker: "Kitty Lab",
    price: "¥400",
    bg: "linear-gradient(135deg, #ffe4e1 0%, #ff9aa2 100%)"
  },
  {
    id: "E",
    title: "レトロ純喫茶ミニチュア",
    maker: "Retro Works",
    price: "¥500",
    bg: "linear-gradient(135deg, #f5deb3 0%, #d2b48c 100%)"
  },
  {
    id: "F",
    title: "宇宙探検フィギュアシリーズ",
    maker: "Space Toy",
    price: "¥600",
    bg: "linear-gradient(135deg, #dcdcff 0%, #6a5acd 100%)"
  }
];

export const detailItem = {
  id: "gacha-002",
  title: "アニマルフレンズ ミニマスコット",
  maker: "バンダイ",
  releaseDate: "2024年11月",
  price: 400,
  count: 12,
  type: "マスコット"
};


export const itemImage = {
  productId: "gacha-002",
  background: "linear-gradient(135deg, #171dd1ff 0%, #ff69b4 100%)"
  // 将来は imageUrl: "/assets/images/xxx.png"
};
