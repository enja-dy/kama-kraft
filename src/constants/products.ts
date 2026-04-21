export type Product = {
  id: string;
  slug: string;
  name: string;
  series: string;
  price: number;
  description: string;
  images: string[];
  quickSpecs: {
    size: string[];
    material: string;
    origin: string;
  };
  specs: {
    label: string;
    value: string;
    subValue?: {
      text: string;
      link?: string;
    };
  }[];
  story: {
    title: string;
    titleItalic?: string;
    paragraphs: string[];
  };
  artisan: {
    name: string;
    location: string;
    bio: string;
  };
  objectPosition?: string;
};

export const products: Product[] = [
  {
    id: "urin-standard-table-1",
    slug: "urin-standard",
    name: "The Standard Table \"URIN\"",
    series: "The Standard Series",
    price: 70000,
    description: "不朽の強さを宿し、世代を超えて受け継がれる「鉄の木」の誇り。 アイアンウッド「ウリン」の圧倒的な重量感。 自然の呼吸をそのまま形にしたライブエッジが、空間に唯一無二の品格を与えます。",
    images: [
      "/product-urin-highangle-master.png",
      "/product-urin-front.png",
      "/product-urin-topdown.png",
      "/product-urin-side.png",
      "/product-urin-final-master-highangle.png",
    ],
    quickSpecs: {
      size: ["幅 90cm", "奥行 45cm", "高さ 35cm"],
      material: "ウリン",
      origin: "日本 鎌倉"
    },
    specs: [
      { label: "商品名", value: "The Standard Table \"URIN\"" },
      { label: "木材", value: "ウリン（アイアンウッド / 無垢材）" },
      { label: "生産地", value: "日本 鎌倉（KamaKraft）" },
      { 
        label: "サイズ", 
        value: "幅90cm × 奥行き45cm × 高さ35cm",
        subValue: {
          text: "※オーダーメイド承ります。詳細はこちら。",
          link: "/custom-order"
        }
      },
      { label: "重量 / 耐荷重", value: "9.8kg / 75kg" },
      { label: "屋外使用", value: "OK（最高レベルの耐候性）" },
      { label: "発送方法", value: "ヤマト運輸 / 佐川急便 (大型家具便)" },
      { label: "発送までの目安", value: "ご注文確定後、約3〜4週間" }
    ],
    story: {
      title: "不朽を纏い、時を刻む。",
      titleItalic: "一生を共にする一脚。",
      paragraphs: [
        "鉄の木、ウリン。その圧倒的な密度と強度は、自然界が生み出した奇跡です。水に沈むほどの重量と、腐朽を寄せ付けない成分。鎌倉の職人は、この強固な素材に敬意を払い、一つひとつ手作業で削り出します。",
        "リビングの主役として、あるいは潮風薫るテラスの相棒として。ウリンは場所を選ばず、その気高い佇まいを維持します。屋内では艶やかな琥珀色の輝きを、屋外では風格漂うシルバーグレーへの変遷を。環境に寄り添いながら、空間の品格を高めます。",
        "手入れという名の、対話。数十年、あるいは一世紀という時間を共にするための準備は、その驚異的な耐候性によってすでに整っています。日常的なメンテナンスは不要。ただ、時折その肌に触れ、色の深化を愛でる。それだけで十分です。"
      ]
    },
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
      "/urin07.jpeg",
      "/ulin-v-leg-wing.png",
    ],
    quickSpecs: {
      size: ["幅 60cm", "奥行 40cm", "高さ 35cm"],
      material: "ウリン",
      origin: "日本 鎌倉"
    },
    specs: [
      { label: "サイズ", value: "幅60cm × 奥行40cm × 高さ35cm" },
      { label: "素材", value: "ウリン（アイアンウッド）" },
      { label: "脚部", value: "V字型デザイン脚" }
    ],
    story: {
      title: "静寂に翼を、空間にリズムを。",
      paragraphs: [
        "コンパクトな空間に、ウリンの品格を。特徴的なV字脚が、重厚なウリン材に軽やかなリズムを与えます。",
        "サイドテーブルや花台として、モダンな空間を引き立てます。"
      ]
    },
    artisan: {
      name: "KamaKraft",
      location: "日本 鎌倉",
      bio: "鎌倉を拠点に、ウリン材に特化した一点物の家具を製作する工房。"
    },
    objectPosition: "center 60%"
  }
];
