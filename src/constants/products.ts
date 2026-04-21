export type Product = {
  id: string;
  slug: string;
  name: string;
  series: string;
  price: number;
  description: string;
  images: string[];
  specs: {
    label: string;
    value: string;
  }[];
  artisan: {
    name: string;
    location: string;
    bio: string;
  };
};

export const products: Product[] = [
  {
    id: "urin-standard-table-1",
    slug: "urin-standard",
    name: "The Standard Table \"URIN\"",
    series: "The Standard Series",
    price: 70000,
    description: "不朽の強さを宿し、世代を超えて受け継がれる「鉄の木」の誇り。アイアンウッド「ウリン」の圧倒的な重量感。自然の呼吸をそのまま形にしたライブエッジが、空間に唯一無二の品格を与えます。",
    images: [
      "/product-urin-highangle-master.png",
      "/product-urin-front.png",
      "/product-urin-topdown.png",
      "/product-urin-side.png",
    ],
    specs: [
      { label: "サイズ", value: "幅90cm × 奥行45cm × 高さ35cm" },
      { label: "素材", value: "ウリン（アイアンウッド）" },
      { label: "重量", value: "約9.8kg" }
    ],
    artisan: {
      name: "KamaKraft",
      location: "日本 鎌倉",
      bio: "鎌倉を拠点に、ウリン材に特化した一点物の家具を製作する工房。"
    }
  },
  {
    id: "urin-v-leg-table-1",
    slug: "urin-v-leg",
    name: "The V-Leg Compact \"WING\"",
    series: "The Artisan Series",
    price: 49500,
    description: "静寂に翼を。コンパクトな空間に、ウリンの品格を。特徴的なV字脚が、重厚なウリン材に軽やかなリズムを与えます。サイドテーブルや花台として、モダンな空間を引き立てます。",
    images: [
      "/product-v-leg.jpg",
    ],
    specs: [
      { label: "サイズ", value: "幅60cm × 奥行40cm × 高さ35cm" },
      { label: "素材", value: "ウリン（アイアンウッド）" },
      { label: "脚部", value: "V字型デザイン脚" }
    ],
    artisan: {
      name: "KamaKraft",
      location: "日本 鎌倉",
      bio: "鎌倉を拠点に、ウリン材に特化した一点物の家具を製作する工房。"
    }
  }
];
