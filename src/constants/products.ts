export type Product = {
  id: string;
  slug: string;
  name: string;
  series: string;
  price: number;
  description: string;
  images: string[];
  thumbnail?: string;
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
    description: "不朽の強さを宿し、世代を超えて受け継がれる「鉄の木」の誇り。 アイアンウッド「ウリン」の圧倒的な重厚感。 自然の呼吸をそのまま形にしたライブエッジが、空間に唯一無二の品格を与えます。",
    images: [
      "/product-urin-highangle-master.png",
      "/product-urin-front.png",
      "/product-urin-topdown.png",
      "/product-urin-side.png",
      "/product-urin-final-master-highangle.png",
    ],
    thumbnail: "/urin04.jpeg",
    quickSpecs: {
      size: ["幅 90cm", "奥行 45cm", "高さ 35cm"],
      material: "ウリン",
      origin: "日本 鎌倉"
    },
    specs: [
      { 
        label: "サイズ", 
        value: "幅90cm × 奥行き45cm × 高さ35cm",
        subValue: {
          text: "※オーダーメイド承ります。詳細はこちら。",
          link: "/custom-order"
        }
      },
      { label: "木材", value: "ウリン（アイアンウッド / 無垢材）" },
      { label: "生産地", value: "日本 鎌倉（KamaKraft）" },
      { label: "重量 / 耐荷重", value: "9.8kg / 75kg" },
      { label: "屋外使用", value: "OK（最高レベルの耐候性）" },
      { label: "発送方法", value: "ヤマト運輸 / 佐川急便 (大型家具便)" },
      { label: "発送までの目安", value: "ご注文確定後、約3〜4週間" }
    ],
    story: {
      title: "受け継がれる、不朽の美。",
      titleItalic: "一生を共にする、最高峰の一台。",
      paragraphs: [
        "鉄の木、ウリン。その圧倒的な密度と強度は、自然界が生み出した奇跡です。圧倒的な存在感が生み出す揺るぎない安定感と、腐朽を寄せ付けない成分。鎌倉の職人は、この強固な素材に敬意を払い、一つひとつ手作業で削り出します。",
        "リビングの主役として、あるいは潮風薫るテラスの相棒として。ウリンは場所を選ばず、その気高い佇まいを維持します。屋内では艶やかな琥珀色の輝きを、屋外では風格漂うシルバーグレーへの変遷を。環境に寄り添いながら、空間の品格を高めます。",
        "手入れという名の、対話。数十年、あるいは一世紀という時間を共にするための準備は、その驚異的な耐候性によってすでに整っています。日常的なメンテナンスは不要。天板をしっかりと支える堅牢なスクエアフレームは、重量級のウリン材を確実に保持し、何世代にもわたって使い続けられる安定性を提供します。ただ、時折その肌に触れ、色の深化を愛でる。それだけで十分です。"
      ]
    },
    artisan: {
      name: "KamaKraft",
      location: "日本 鎌倉",
      bio: "鎌倉を拠点に、ウリン材に特化した一点物の家具を製作する工房。"
    },
    objectPosition: "center 40%"
  },
  {
    id: "urin-v-leg-table-1",
    slug: "urin-v-leg",
    name: "The V-Leg Compact",
    series: "The Artisan Series",
    price: 60000,
    description: "限られた場所にこそ、本物のウリンを。ベッドサイドやエントランス、都市のバルコニーにも。コンパクトだからこそ叶う、場所を選ばない『最高峰の贅沢』を提案します。特徴的なV字脚が、重厚なウリン材にモダンなリズムを与えます。",
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
      { 
        label: "サイズ", 
        value: "幅60cm × 奥行40cm × 高さ35cm",
        subValue: {
          text: "※オーダーメイド承ります。詳細はこちら。",
          link: "/custom-order"
        }
      },
      { label: "木材", value: "ウリン（アイアンウッド / 無垢材）" },
      { label: "生産地", value: "日本 鎌倉（KamaKraft）" },
      { label: "重量 / 耐荷重", value: "約6.5kg / 50kg" },
      { label: "屋外使用", value: "OK（最高レベルの耐候性）" },
      { label: "発送方法", value: "ヤマト運輸 / 佐川急便 (大型家具便)" },
      { label: "発送までの目安", value: "ご注文確定後、約3〜4週間" }
    ],
    story: {
      title: "どこにでも置ける、本物を。",
      titleItalic: "空間を広げる、小さな重厚。",
      paragraphs: [
        "コンパクトなサイズに、アイアンウッド「ウリン」の圧倒的な品格を凝縮しました。大きな家具を置くことが難しい場所でも、この一脚があれば、そこはたちまち職人の手仕事が息づく特別な空間へと変わります。",
        "ベッドサイド、玄関、あるいはお気に入りのベランダの隅。場所を選ばない自由さが、暮らしの質を高めます。サイドテーブルや花台として、日常の何気ないコーナーを、一世紀先まで愛せる本格的な質感を備えた「特等席」へと昇華させます。",
        "モダンなV字脚が、重厚なウリン材を軽快に支え、空間に心地よいリズムを刻みます。屋外でも一生使い続けられるほどの驚異的な耐久性は、スタンダードモデル譲り。手入れ不要の強さと、時と共に深まる風格を、あなたの最も身近な場所で。"
      ]
    },
    artisan: {
      name: "KamaKraft",
      location: "日本 鎌倉",
      bio: "鎌倉を拠点に、ウリン材に特化した一点物の家具を製作する工房。"
    },
    objectPosition: "center 60%"
  },
  {
    id: "urin-counter-table-1",
    slug: "urin-counter",
    name: "The High-Leg Counter \"URIN\"",
    series: "The Artisan Series",
    price: 120000,
    description: "視点を高め、空間を研ぎ澄ます。バーカウンターや洗練されたワークスペースに、アイアンウッド『ウリン』の圧倒的な力強さを。天に伸びるしなやかな脚部が、重厚な天板を確かな品格で支えます。立ち上がり、視座を変える。日常の何気ない瞬間を、特別な時間へと昇華させる一台です。",
    images: ["/urin09.jpeg"],
    thumbnail: "/urin09.jpeg",
    quickSpecs: {
      size: ["幅 150cm", "奥行 45cm", "高さ 100cm"],
      material: "ウリン",
      origin: "日本 鎌倉"
    },
    specs: [
      { 
        label: "サイズ", 
        value: "幅150cm × 奥行き45cm × 高さ100cm",
        subValue: {
          text: "※オーダーメイド承ります。詳細はこちら。",
          link: "/custom-order"
        }
      },
      { label: "木材", value: "ウリン（アイアンウッド / 無垢材）" },
      { label: "生産地", value: "日本 鎌倉（KamaKraft）" },
      { label: "重量 / 耐荷重", value: "約18.5kg / 80kg" },
      { label: "屋外使用", value: "OK（最高レベルの耐候性）" },
      { label: "発送方法", value: "ヤマト運輸 / 佐川急便 (大型家具便)" },
      { label: "発送までの目安", value: "ご注文確定後、約4〜5週間" }
    ],
    story: {
      title: "天空を操り、空間に自由を。",
      titleItalic: "視点を変え、美学を深める。",
      paragraphs: [
        "天空へと伸びる1メートルの威厳。アイアンウッド「ウリン」の圧倒的な素材感を損なうことなく、極限まで高く、しなやかに。職人の手によって緻密に構築された高脚の構造は、物理的な安定感と、視覚的な開放感を見事に共存させています。その佇まいは、ただの家具を超え、空間に垂直のリズムを刻む「機能する彫刻」のような輝きを放ちます。",
        "視座を高めることで、いつもの風景が劇的に変わる。朝日を浴びながらのモーニングコーヒー、あるいは夕景を眺めながらの深い思考。バーカウンターやハイデスクとして設計されたこの一台は、暮らしの中に「立ち上がる、心地よさ」をもたらします。腰を下ろさず、そのままの姿勢でウリンの温もりに触れる。そんな贅沢な時間が、あなたの日常を鋭く、美しく研ぎ澄ましていきます。",
        "一生を共にし、さらにその先へ。最高レベルの耐候性を誇るウリン材は、時の経過とともに深みのある風格へと成熟していきます。水や腐食を寄せ付けない卓越した強靭さは、屋内外を問わず、あなたの最も身近な場所で不変の価値を維持し続けます。鎌倉の工房から、一世紀先まで愛せる本物の質感を。その洗練された垂直の美が、あなたの空間を優雅に昇華させます。"
      ]
    },
    artisan: {
      name: "KamaKraft",
      location: "日本 鎌倉",
      bio: "鎌倉を拠点に、ウリン材に特化した一点物の家具を製作する工房。"
    },
    objectPosition: "center 35%"
  }
];
