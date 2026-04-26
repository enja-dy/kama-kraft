"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronLeft, 
  ShieldCheck, 
  Waves, 
  BugOff, 
  Microscope, 
  Scale, 
  History,
  Droplets,
  Sun,
  Clock,
  Sparkles,
  Hourglass,
  FileText,
  CloudRain,
  Wand2,
  UserCheck,
  Shield,
  TrendingUp,
  Leaf
} from "lucide-react";

import { use } from "react";

// Types for Article Content
interface Section {
  type?: "default" | "cards" | "table";
  title: string;
  subtitle?: string;
  content?: string | React.ReactNode;
  image?: string;
  imageAlt?: string;
  icon?: any;
  items?: { icon: any; text: string }[];
  accent?: string;
  cards?: { icon: any; title: string, text: string }[];
  tableData?: { label: string; ulin: string; ipe: string; soft: string; tools?: string; level?: string }[];
}

interface ArticleData {
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  heroImage: string;
  publishDate: string;
  category: string;
  introTitle?: string;
  introContent?: string;
  sections: Section[];
}

// プレミアム・タイポグラフィ・システム
// ルール: 
// 1. タイトルは 意味の切れ目でのみ \n を許容し、text-wrap: balance で美しく分散
// 2. 本文は 原則 \n を使用せず、text-wrap: pretty でブラウザに最適な改行を任せる
// 3. コンテナ幅を制限することで、デスクトップでも読みやすい1行の長さを維持
const ResponsiveText = ({ text, className, isTitle = false }: { text: string; className?: string; isTitle?: boolean }) => {
  return (
    <span className={`${className} ${isTitle ? 'text-wrap-balance' : 'text-wrap-pretty'}`}>
      {text.split('\n').map((line, i) => (
        <span key={i}>
          {line}
          {i < text.split('\n').length - 1 && <br className={isTitle ? "hidden md:block" : "mb-4 block content-['']"} />}
        </span>
      ))}
    </span>
  );
};

// Modified Title with Accent support
const AccentTitle = ({ title, accent, className }: { title: string; accent?: string; className?: string }) => {
  const lines = title.split('\n');
  return (
    <h3 className={`${className} text-wrap-balance`}>
      {lines.map((line, li) => {
        if (accent && line.includes(accent)) {
          const parts = line.split(accent);
          return (
            <span key={li}>
              {parts[0]}
              <span className="font-medium text-white italic underline decoration-white/20 underline-offset-8">
                {accent}
              </span>
              {parts[1]}
              {li < lines.length - 1 && <br className="hidden md:block" />}
            </span>
          );
        }
        return (
          <span key={li}>
            {line}
            {li < lines.length - 1 && <br className="hidden md:block" />}
          </span>
        );
      })}
    </h3>
  );
};

const ARTICLES: Record<string, ArticleData> = {
  "why-ulin-durability-100-years": {
    slug: "why-ulin-durability-100-years",
    title: "「鉄の木」ウリンの\n驚愕の耐久性とは？",
    titleEn: "The Legend of Ironwood",
    subtitle: "100年腐らない理由を科学の視点で徹底検証",
    heroImage: "/journal/01-durability/hero.png",
    publishDate: "2026.04.22",
    category: "ウリン豆知識",
    introTitle: "数十年、数百年という時間の試練に耐え、なお美しく在り続ける「鉄の木」。",
    introContent: `世界には数多の木材が存在しますが、ボルネオ島原産の「ウリン（別名アイアンウッド）」ほど、その類まれなる耐久性で職人や建築家を魅了し続けてきた木材はありません。東南アジアの熱帯雨林という、高温多湿で常に腐朽菌や害虫の脅威に晒される過酷な環境で育まれたこの木は、自らを守るために驚異的な進化を遂げました。

かつて、ボルネオの先住民たちはウリンを「死なない木」と呼び、世代を超えて受け継がれる家屋の土台や、過酷な水上生活を支えるカヌーの材料として重宝してきました。現代においても、海水に浸かっても、激しいスコールに晒されても、シロアリが猛威を振るっても、ウリンはその美しさと強さを失うことはありません。

ウリンはなぜ、これほどまでに頑強なのか。単なる経験則ではなく、現代科学が解き明かしたその驚異的な生命力の裏側に隠された科学的根拠を、本稿では徹底的に解き明かします。読み終える頃には、あなたが手にするウリンの家具が、単なる道具ではなく「100年を共にするパートナー」である理由を深く理解していただけるはずです。`,
    sections: [
      {
        title: "水に沈む圧倒的な「密度」が築く、\n鉄壁の物理防御",
        content: `一般的な木材の多くは水に浮きます。それは木材内部に空気を蓄えるための「隙間（空隙）」が多量に存在するからです。しかし、ウリンは違います。その比重は1.0〜1.2を超え、水に投げ入れれば岩のように静かに底へ沈んでいきます。この「比重1.0の壁」を越える木材は世界でもごく僅かしか存在しません。

この極めて高い密度は、木材組織の中に空隙がほとんど存在しないことを意味します。電子顕微鏡でウリンの細胞を観察すると、そこには驚くほど緻密に詰まった細胞壁が確認できます。この物理的な密閉性が、腐朽菌の温床となる「水分の侵入」を徹底的に拒絶するのです。

木材が腐る最大の原因は、内部に入り込んだ水分が腐朽菌を活性化させることにあります。ウリンはこの侵入経路を物理的に遮断しているため、芯材まで腐食が進行することは理論上、極めて困難です。この「密度」こそが、ウリンを「鉄の木」たらしめる第一の理由です。`,
        image: "/journal/01-durability/content-1.png",
        imageAlt: "Ulin Beam Submerged in a Natural Stream",
        icon: Scale,
        items: [
          { icon: ShieldCheck, text: "表面硬度は超高硬度。重い家具や土足での使用にもびくともしません。" },
          { icon: Microscope, text: "細胞一つ一つの隙間が樹脂で埋め尽くされた「密閉構造」。" }
        ]
      },
      {
        title: "自律する盾、\nポリフェノールによる「化学的鎧」",
        accent: "ポリフェノール",
        content: `物理的な硬さに加え、ウリンには「化学的な鎧」が備わっています。それが、木材全体に多量に含まれる超高濃度のポリフェノール（タンニン）です。ウリンをカットした際に広がる独特の香りと、瑞々しい赤褐色はこの成分によるものです。

ポリフェノールは強力な抗菌作用・抗酸化作用を持っており、これが天然の防腐剤、防虫剤として機能します。施工直後に赤い樹液（アク）が出ることがありますが、これはウリンが周囲の菌や虫を寄せ付けないための「自己防御」の証そのものです。この天然の薬剤は木材の芯まで均一に浸透しており、数十年が経過してもその効果が失われることはありません。

人工的な防腐処理を施した木材は、数年で薬剤が雨に流され、効果を失ってしまいます。しかし、ウリンは自らの生命活動の結果としてこの盾を作り出しているため、環境に優しく、かつ永久的な耐久性を維持できるのです。`,
        icon: Droplets
      },
      {
        type: "cards",
        title: "極限環境での実力が証明する「信頼」",
        subtitle: "Extreme Environment Verification",
        cards: [
          { 
            icon: Waves, 
            title: "塩害・水害に対する\n圧倒的な信頼", 
            text: "潮風に晒される沿岸部のウッドデッキや、常に海水に浸かる桟橋。他の木材なら数年で朽ち果てる塩害地域でも、ウリンは30年以上その形状を保ち続けます。ディズニーリゾートの埠頭など、日本を代表する公共施設で採用されているのがその証拠です。" 
          },
          { 
            icon: BugOff, 
            title: "シロアリさえも拒絶する\n天然の拒絶", 
            text: "木材住宅の最大の敵であるシロアリ。しかし、ポリフェノールを豊富に含み、鉄のように硬いウリンの心材を食害することは非常に困難です。シロアリはその硬さと成分を嫌い、他の柔らかい木材へと移動します。天然のバリアが家を守るのです。" 
          }
        ]
      },
      {
        title: "「一生モノ」の経済学：\nライフサイクルコストの真実",
        content: `多くの人が「ウリンは高価だ」と感じます。確かに、初期の購入価格だけを見れば、ソフトウッドや一般的なハードウッドよりも数割高いのが現実です。しかし、ここで考えたいのが「ライフサイクルコスト（生涯費用）」という概念です。

一般的な木材であれば、10年ごとに腐食による張り替えや、毎年の防腐塗装、薬剤散布が必要になります。これに対し、ウリンはメンテナンスがほぼ不要で、30年、50年、条件が良ければ100年使い続けることができます。

例えば、30年という期間で比較した場合、安い木材を3回作り替える費用と、ウリンを1回設置する費用では、どちらが賢い選択でしょうか。手間と廃棄物の削減、そして何より「ずっと同じ美しさを保てる安心感」を含めれば、ウリンは最もコストパフォーマンスに優れた素材と言えるのです。KamaKraftがウリンにこだわるのは、お客様に「最後の一買い」を提供したいと考えているからです。`,
        icon: Clock
      },
      {
        type: "table",
        title: "木材性能・コスト比較表",
        subtitle: "30年間使用した場合のシミュレーション",
        tableHeaders: ["性能指標", "ウリン (鉄の木)", "イペ", "ソフトウッド"],
        tableData: [
          { label: "耐用年数", ulin: "30〜100年", ipe: "20〜30年", soft: "3〜5年" },
          { label: "比重（密度）", ulin: "1.04〜1.20", ipe: "0.90〜1.10", soft: "0.40〜0.60" },
          { label: "防腐塗装", ulin: "原則不要", ipe: "年1回の塗装推奨", soft: "必須（毎年）" },
          { label: "30年後の総コスト", ulin: "★☆☆（最安）", ipe: "★★☆（中）", soft: "★★★（高）" },
          { label: "メンテナンス難易度", ulin: "極めて容易", ipe: "普通", soft: "非常に高い" }
        ]
      },
      {
        title: "未来へ繋ぐサステナビリティ：\nウリンと地球の共生",
        content: `現代において、素材選びは地球環境への配慮と切り離せません。「100年使える」ということは、それだけ「木を切り倒す回数が減る」ことを意味します。

ウリンは成長が非常に遅い木であり、大径木になるまで数百年の歳月を要します。だからこそ、私たちはその貴重な生命を無駄にすることなく、一生、そして次の世代まで使い続けられる家具として形を変え、お客様のもとへ届けます。使い捨ての消費文化から一歩身を引き、良質なものを長く愛用する。それこそが、現代における真の贅沢であり、地球に対する誠実な向き合い方だと私たちは信じています。

ウリンという素材が持つ「永遠に近い時間」を、あなたの日常に取り入れてみてください。それは単なる家具の購入ではなく、家族の歴史を刻むための「時間の器」を手に入れることに他ならないのです。`,
        icon: Sparkles
      }
    ]
  },
  "ulin-aging-silver-gray-guide": {
    slug: "ulin-aging-silver-gray-guide",
    title: "赤褐色から銀色へ。\nウリンの経年変化が描く、時を刻む美学",
    titleEn: "The Aesthetics of Aging",
    subtitle: "シルバーグレーの気高さと、その美しさを維持するための完全ガイド",
    heroImage: "/journal/02-aging/hero.png",
    publishDate: "2026.04.18",
    category: "ウリン豆知識",
    introTitle: "時間の試練を、美しさへと昇華させる勇気。",
    introContent: `多くの木材にとって、雨風に晒されることは「劣化」を意味します。色が褪せ、表面が毛羽立ち、徐々に朽ち果てていく姿は、自然の摂理とはいえどこか寂しさを感じさせるものです。しかし、ボルネオの厳しい自然環境で数百年の歳月を生き抜いてきたウリンにとって、時間の経過は劣化ではなく「深化（エイジング）」の過程に他なりません。

施工直後の瑞々しく力強い赤褐色は、数年の時を経て、絹のような光沢を放つ高貴な「シルバーグレー」へと劇的な変化を遂げます。この変化は、木材が周囲の環境と調和し、一つの「風景」として完成していくための神聖な儀礼です。

本稿では、ウリンがなぜ美しく老いることができるのか。その科学的メカニズムから、シルバーグレーの気品を愉しむための作法、そして数十年後に再び「本来の赤」を取り戻すための再生術まで、時と共に歩むための知恵を詳しく解説します。`,
    sections: [
      {
        title: "銀色に輝く「パティナ」の科学的メカニズム",
        content: `なぜウリンはグレーに変わるのか？ その背景には、木材表面で起こる繊細な化学反応があります。主な要因は、木の細胞を繋ぎ止めている「リグニン」という成分が、太陽の紫外線によって分解されることにあります。

分解されたリグニンは雨水によって洗い流され、表面には純粋なセルロースの繊維が残ります。これが光を乱反射することで、あの神秘的なシルバーグレーが生まれるのです。特筆すべきは、この変化が「表面わずか0.1mm〜0.2mm程度」の極めて浅い層で起こっているということ。

内部の強靭な組織は、先述のポリフェノールと驚異的な密度によって完全に守られており、強度が損なわれることはありません。表面は優雅に老い、内側は鉄のような強さを保ち続ける。この「外柔内剛」の二重構造こそが、欧州のプロフェッショナルな建築家たちが、数世紀先を見据えたプロジェクトにおいてウリンを指名する最大の理由なのです。`,
        image: "/journal/02-aging/content-1.png",
        imageAlt: "Aged Ulin Silver Gray Texture",
        icon: Sun,
        items: [
          { icon: CloudRain, text: "雨と光が織りなす、天然の古色（パティナ）の完成。" },
          { icon: History, text: "30年が経過しても内部強度はほぼ変わらないという実証データ。" }
        ]
      },
      {
        title: "「赤い樹液（アク）」：\n自己防御から安定期への移行",
        accent: "赤い樹液",
        content: `施工後、数ヶ月から半年の間に見られる「赤い樹液（アク）」。これはウリンに含まれる豊富なポリフェノールが雨水に溶け出したものです。周囲のコンクリートや壁を汚してしまうため、初期段階では敬遠されがちな現象ですが、これこそがウリンが「100年腐らない」ための自己防御反応です。

アクはウリンが周囲の菌やシロアリを威嚇し、自らの領土を安定させるための「洗礼」のようなものです。この成分が十分に出尽くした頃、ウリンの表面は安定期に入り、いよいよシルバーグレーへの第一歩を踏み出します。

汚れへの対処法は確立されており、適切な洗浄を行えばコンクリートの美しさを保つことも可能です。このアク抜きというプロセスを経て初めて、ウリンは真の「一生モノ」としての品格を纏い始めます。`,
        icon: Droplets,
      },
      {
        type: "cards",
        title: "シルバーグレーを愛でる文化と哲学",
        subtitle: "Global Perspectives on Aging",
        cards: [
          { 
            icon: Sparkles, 
            title: "欧米で愛される\n「気高きシルバー」", 
            text: "欧州、特にイギリスやフランスの庭園文化では、木材がシルバーグレーに変化することを「気品のある変化」として尊びます。新築時の輝きよりも、10年、20年経って風景に溶け込んだ状態こそが最も美しいとされるのです。" 
          },
          { 
            icon: Clock, 
            title: "時を刻む家具という\n贅沢な体験", 
            text: "KamaKraftの家具も、屋外で使えば同じようにグレーに変わります。それは家族の思い出と共に家具も年を重ねている証。シルバーグレーへの変化は、家族の歴史を可視化する「愛着の蓄積」でもあります。" 
          }
        ]
      },
      {
        type: "table",
        title: "メンテナンス・ガイド比較表",
        subtitle: "目的別の手入れ方法と難易度",
        tableData: [
          { label: "日常の汚れ", ulin: "水洗い・デッキブラシ", ipe: "洗剤＋ホース", soft: "★☆☆" },
          { label: "黒ずみ（カビ等）", ulin: "高圧洗浄機のみ", ipe: "専用クリーナー", soft: "★★☆" },
          { label: "アク汚れ（付着時）", ulin: "サンポール（希塩酸）", ipe: "中性洗剤", soft: "★★★" },
          { label: "本来の色への再生", ulin: "サンディング（削り）", ipe: "再塗装必須", soft: "不可" }
        ]
      },
      {
        title: "美しさを継承する、\n大人のメンテナンス儀礼",
        content: `ウリンは「メンテナンス・フリー」の代表格ですが、適切な「手入れ」は木にさらなる品格と寿命を与えます。

シルバーグレーの気高さをそのまま愉しむのであれば、年に一度、積もった汚れを落とす程度の高圧洗浄だけで十分です。塗装の剥げや腐食を心配する必要がないため、精神的にも非常に豊かな「放任の美学」を愉しむことができます。

もし、数年経ってから再びあの瑞々しい赤褐色を取り戻したいのであれば、表面を軽くサンディング（研磨）してください。表面の酸化層を削り取れば、驚くほど鮮やかな本来の色が再び顔を出します。この「何度でも再生できる」という特性も、高密度なウリンならではの特権です。`,
        icon: Wand2,
        items: [
          { icon: Sparkles, text: "中性洗剤とデッキブラシで表面の塵や苔を定期的に清掃。" },
          { icon: Clock, text: "数年に一度のサンディングで「色」の記憶を呼び覚ます。" }
        ]
      },
      {
        title: "結び：時の流れを肯定する生き方",
        content: `私たちは、常に「新しさ」が価値を持つ時代に生きています。しかし、自然界において本当に価値のあるものは、時の流れに抗うのではなく、それを受け入れ、味方に付けたものです。

ウリンがシルバーグレーへと変わっていく姿は、私たちに「正しく老いることの美しさ」を教えてくれます。傷が付き、色が変わり、それでも内側には揺るぎない強さと品格を湛えている。KamaKraftがお届けするウリンの家具と共に、そんな贅沢な時間の流れを愉しんでいただければ幸いです。`,
        icon: History
      }
    ]
  },
  "strongest-wood-salt-damage-termites": {
    slug: "strongest-wood-salt-damage-termites",
    title: "シロアリ・塩害に最強の木材はどれ？\n海辺のテラスや湿気地で「ウリン」が選ばれる理由",
    titleEn: "The Guardian of the Coast",
    subtitle: "極限環境での圧倒的信頼性を支える、ボルネオ・アイアンウッドの真価",
    heroImage: "/journal/03-salt-damage/hero.png",
    publishDate: "2026.04.15",
    category: "ウリン豆知識",
    introTitle: "海、湿気、害虫。木材にとっての「死地」こそが、ウリンが真価を発揮する舞台。",
    introContent: `波しぶきが舞い、常に塩分を含んだ風が吹き付ける海岸沿い。あるいは、年間を通じて湿度が高く、腐朽菌やシロアリが猛威を振るう湿潤な森の側。多くの木材にとって、これらの環境は数年でその命を終える「死地」に他なりません。

しかし、東南アジアの過酷な熱帯雨林で育まれた「ウリン（ボルネオ・アイアンウッド）」にとって、これらの過酷な条件は、自らの強さを証明するための最高の舞台です。古くから水上生活を支える桟橋や、海水に浸かる土台として重用されてきたこの木には、他の木材が決して真似のできない「生存戦略」が秘められています。

なぜウリンは塩害に負けないのか。なぜシロアリはこれほどまでにこの木を避けるのか。本稿では、海辺の暮らしや過酷な環境でのウッドデッキ構築において、プロフェッショナルたちが「最後には必ずウリンに辿り着く」と言われる、その科学的・物理的根拠を解き明かします。`,
    sections: [
      {
        title: "塩害を物理的に遮断する、\n非多孔質の「鉄壁」",
        content: `木材が塩害で劣化する最大の原因は、木材内部に塩水が浸透し、乾燥時に結晶化することで細胞を内側から破壊することにあります。しかし、ウリンにはその「浸透」という概念がほぼ存在しません。

ウリンの比重は1.0〜1.2を超え、細胞壁が極めて緻密に詰まった「非多孔質」に近い構造を持っています。電子顕微鏡レベルで見ても、水分や塩分が入り込む隙間がほとんどないのです。この驚異的な密度が物理的な防壁となり、潮風や海水の影響を表面わずか数ミリの層で食い止めます。

事実、数十年にわたり海水に浸かっていたウリンの桟橋を切り出してみると、内部は施工時と変わらない、瑞々しく深い赤褐色の健全な状態が保たれていることが確認されています。この「物理的遮断」こそが、海辺のテラスにウリンが選ばれる第一の理由です。`,
        image: "/journal/03-salt-damage/content-1.png",
        imageAlt: "Ulin Wood Ultra-High Density Macro Structure",
        icon: Waves,
        items: [
          { icon: ShieldCheck, text: "塩分結晶による内部崩壊を許さない超高密度構造。" },
          { icon: Droplets, text: "水分吸収率が極めて低く、形状安定性が非常に高い。" }
        ]
      },
      {
        title: "シロアリを絶望させる、\n「硬度」と「化学的拒絶」の二重奏",
        accent: "シロアリ",
        content: `木材住宅の天敵であるシロアリ。しかし、ウリンの前に彼らは無力です。その理由は「物理的な硬さ」と「化学的な忌避成分」の二重の防衛策にあります。

まず、ウリンの表面硬度は鋼鉄に例えられるほど高く、シロアリの顎で食い破ることは困難を極めます。さらに、ウリンには高濃度のポリフェノール（タンニン）が蓄えられています。この成分はシロアリにとって強力な忌避剤として機能し、彼らはウリンの匂いを嗅ぎつけるだけで、そこを食料源として認識することなく立ち去ります。

実験データでは、他のハードウッドがシロアリの猛攻を受ける中でも、ウリンだけがほぼ無傷で残ることが証明されています。薬剤を注入した「防腐防蟻処理材」とは異なり、木材そのものの生命力が守り抜くため、効果が永続的に続くのも大きな特徴です。`,
        icon: BugOff
      },
      {
        type: "cards",
        title: "極限環境での30年が証明する「本物」の風格",
        subtitle: "Global Infrastructure Standards",
        cards: [
          { 
            icon: Microscope, 
            title: "ディズニーリゾートでの\n採用実績", 
            text: "常に波に晒される浦安の埠頭。日本で最も過酷な塩害地域の一つでありながら、ウリンはその耐久性を買われ、長年にわたり公共の安全を支え続けています。" 
          },
          { 
            icon: History, 
            title: "桟橋やマリーナの\n世界標準", 
            text: "欧州や東南アジアのマリーナでは、ウリンは「代えの効かない素材」として定着しています。30年以上ノーメンテナンスで海水に浸かりながら機能し続ける姿は、まさに伝説です。" 
          }
        ]
      },
      {
        title: "深い赤褐色が象徴する、\n生命力の濃さ",
        content: `陽光の下で端正な輝きを放つ、ウリンのデッキ。この深く、飽和した赤褐色（バーガンディ・ブラウン）は、単なる色ではありません。それはウリンが自らを守るために蓄えたポリフェノールと、超高密度の細胞が凝縮された「生命力の証」です。

光が当たると、木材内部のシリカ成分が鈍く鋭い輝きを放ちます。この鉱物的な質感こそが、ウリンを「鉄の木」たらしめる、他の木材にはない気品です。海辺の邸宅において、この赤褐色のデッキは青い海との対比で最も美しい風景を描き出します。

KamaKraftは、この「本物のウリン」だけが持つ重厚な質感を大切にしています。海辺という過酷な場所を、一生を共にする安らぎの場へと変える。それが、私たちが提案するウリンのある暮らしです。`,
        icon: Sparkles
      },
      {
        type: "table",
        title: "環境別・木材耐久性比較",
        subtitle: "過酷な条件下での耐用年数予測",
        tableHeaders: ["状況", "ウリン (鉄の木)", "イペ", "ソフトウッド"],
        tableData: [
          { label: "海辺のテラス（塩害）", ulin: "30年以上", ipe: "20年前後", soft: "3〜5年" },
          { label: "湿地・常に濡れる場所", ulin: "30年以上", ipe: "15〜20年", soft: "2〜3年" },
          { label: "シロアリ多発地域", ulin: "被害報告なし", ipe: "稀に被害あり", soft: "壊滅的" },
          { label: "メンテナンス頻度", ulin: "ほぼ不要", ipe: "年1回のオイル", soft: "年数回の再塗装" }
        ]
      },
      {
        title: "結び：自然への畏敬を、日々の豊かさへ",
        content: `自然は時に過酷ですが、その過酷さに対抗するために生まれた素材は、人間には作り出せない究極の機能美を備えています。

海辺の塩風を恐れず、湿気の多い土壌を厭わず、毅然としてそこに在り続けるウリンのデッキ。それは単なる建築資材ではなく、過酷な自然と共に生きるための「賢い選択」です。KamaKraftは、ボルネオの森が数百年かけて育てたこの至宝を、あなたの日常を支える一生のパートナーとしてお届けします。`,
        icon: History
      }
    ]
  },
  "ulin-maintenance-essential-tips": {
    slug: "ulin-maintenance-essential-tips",
    title: "ウリンのメンテナンスは本当に不要？\n数十年使い続けるための正しいお手入れ術",
    titleEn: "The Ritual of Longevity",
    subtitle: "「何もしなくていい」の真意と、愛着を深めるための最低限の作法",
    heroImage: "/journal/04-maintenance/hero.png",
    publishDate: "2026.04.11",
    category: "ウリン豆知識",
    introTitle: "「一生モノ」とは、共に年を重ねる喜びを知ること。",
    introContent: `「ウリンはメンテナンス・フリーである」という言葉は、半分は真実であり、半分は謙遜です。確かに、この木は一度も手入れをしなかったとしても、数十年という年月を揺るぎない強度で生き抜きます。腐食や虫食いを防ぐための薬剤散布も、毎年の塗り直しが必要なペンキも、ウリンには必要ありません。

しかし、もしあなたがウリンを単なる「資材」ではなく、共に暮らしを営む「家族の一員」として捉えるなら、そこには愛着を深めるための「お手入れの儀礼」が存在します。それは決して義務ではなく、素材が持つ生命力に触れ、その美しさを引き出し、対話を愉しむための贅沢な時間です。

本稿では、ウリンと共に長い歳月を過ごすために知っておきたい、必要最小限のケアと、数年後にあの瑞々しい赤褐色を再生させるための秘訣をご紹介します。`,
    sections: [
      {
        title: "日々の清掃：\n素材の呼吸を妨げないために",
        content: `屋外で使われるウリンにとって、最大の敵は腐食ではなく「堆積した汚れ」です。隙間に溜まった砂利や枯れ葉、鳥の糞などは、長時間放置されると木材の表面を覆い、水分を過剰に滞留させる原因となります。

特別な道具は必要ありません。たまにほうきで掃き、汚れが目立つ場所を水洗いする。これだけで十分です。水が弾ける姿を見るのは、ウリンの緻密な肌質を再確認する心地よい瞬間でもあります。高圧洗浄機を使用する場合は、水圧を上げすぎず、表面の埃を飛ばすイメージで行うのがコツです。`,
        icon: Sparkles,
      },
      {
        type: "cards",
        title: "汚れさえも風景の一部に",
        subtitle: "Wabi-Sabi of Ironwood",
        cards: [
          { 
            icon: ShieldCheck, 
            title: "汚れを恐れない\n重厚な質感", 
            text: "自然の中で付いた細かな傷や汚れも、ウリンの重厚な質感の中では「歴史」としての深みに変わります。新築時の完璧さよりも、使い込まれた風格を愛でる文化を大切にしています。" 
          },
          { 
            icon: History, 
            title: "数十年後の姿を\n愉しむ贅沢", 
            text: "ウリンの手入れは、明日を良くするためではなく、10年後、20年後の姿をより美しくするために行うものです。それはまさに、上質なワインを熟成させるような愉しみです。" 
          }
        ]
      },
      {
        type: "table",
        title: "目的別・メンテナンス項目",
        subtitle: "ライフスタイルに合わせたお手入れプラン",
        tableHeaders: ["状況", "推奨される方法", "必要なツール", "難易度"],
        tableData: [
          { label: "日常のホコリ・土砂", ulin: "ほうきで掃く・水洗い", ipe: "ほうき / ホース", soft: "★☆☆" },
          { label: "アク汚れ（付着時）", ulin: "酸性洗浄剤で除去", ipe: "洗剤", soft: "★★☆" },
          { label: "黒ずみ（カビ等）", ulin: "高圧洗浄・デッキブラシ", ipe: "専用洗剤", soft: "★★★" },
          { label: "本来の色への再生", ulin: "サンディング＋オイル", ipe: "再塗装", soft: "不可" }
        ]
      },
      {
        title: "美しさを継承する、\n大人のメンテナンス儀礼",
        content: `ウリンは「メンテナンス・フリー」の代表格ですが、適切な「手入れ」は木にさらなる品格と寿命を与えます。

シルバーグレーの気高さをそのまま愉しむのであれば、年に一度、積もった汚れを落とす程度の高圧洗浄だけで十分です。塗装の剥げや腐食を心配する必要がないため、精神的にも非常に豊かな「放任の美学」を愉しむことができます。

もし、数年経ってから再びあの瑞々しい赤褐色を取り戻したいのであれば、表面を軽くサンディング（研磨）してください。表面の酸化層を削り取れば、驚くほど鮮やかな本来の色が再び顔を出します。この「何度でも再生できる」という特性も、高密度なウリンならではの特権です。`,
        image: "/journal/04-maintenance/content-1.png",
        imageAlt: "Ulin Wood Rejuvenation Sanding Comparison",
        icon: Wand2,
        items: [
          { icon: Sparkles, text: "中性洗剤とデッキブラシで表面の塵や苔を定期的に清掃。" },
          { icon: Clock, text: "数年に一度のサンディングで「色」の記憶を呼び覚ます。" }
        ]
      },
      {
        title: "結び：時を味方に付ける、豊かなお手入れ",
        content: `ウリンをお手入れする時間は、単なる「作業」ではなく、自らの生活環境を慈しみ、素材が持つ生命力に触れる豊かなひとときです。

手間がかからないからこそ、たまに行う手入れが特別な意味を持ちます。KamaKraftが提供するウリンの家具やデッキが、あなたと共に美しく年を重ね、家族の歴史を刻むための最良の舞台であり続けることを願っています。`,
        icon: History
      }
    ]
  },
  "hardwood-comparison-ulin-ipe": {
    slug: "hardwood-comparison-ulin-ipe",
    title: "【比較】ウリン vs イペ vs セランガンバツ。\nハードウッド選びで失敗しないための決定版",
    titleEn: "The Ultimate Hardwood Duel",
    subtitle: "「価格」だけでは見えない、30年後の資産価値を徹底検証",
    heroImage: "/journal/05-comparison/hero.png",
    publishDate: "2026.04.08",
    category: "ウリン豆知識",
    introTitle: "「安いから」という理由で選ぶことが、最大のコスト増に繋がる理由。",
    introContent: `ウッドデッキや屋外家具の素材を選ぶ際、多くの人がまず目にするのは「平米単価」の比較表です。ウリン、イペ、セランガンバツ。これらはいずれも「ハードウッド」というカテゴリーに属し、一見するとどれも同じように頑丈に見えるかもしれません。

しかし、その実態は驚くほど異なります。ある材は10年で深刻な反りや割れを引き起こし、ある材は素足で歩けないほどの「ささくれ」に悩まされることになります。そして、それらの補修や作り直しにかかる費用は、最初に「節約」したはずの差額を遥かに上回ります。

本稿では、プロフェッショナルな建築家や職人が、なぜ最終的に「ウリン」という選択肢に辿り着くのか。素材の密度、成分、そして30年という時間軸でのコストパフォーマンスを、他の主要なハードウッドと徹底的に比較検証します。`,
    sections: [
      {
        title: "密度の差が、\nそのまま「生存期間」の差になる",
        content: `木材が腐朽する最大の原因は、内部に水分が浸透し、そこを住処とする腐朽菌が細胞を破壊することにあります。この「水分の浸透」を物理的に防ぐ唯一の手段が「密度」です。

今回、私たちが記事内に掲載したマイクロスコープ画像をご覧ください。左側のウリンは、細胞壁が隙間なく詰まっており、まるで大理石のような緻密な構造をしています。対して右側のセランガンバツは、導管と呼ばれる水分を通す穴が大きく、水分や菌が侵入しやすい「隙間」が散見されます。

この微細な構造の差が、過酷な屋外環境においては「耐用年数30年以上（ウリン）」と「15年前後（一般的ハードウッド）」という決定的な差となって現れます。密度が高いということは、それだけ外敵を寄せ付けない「鉄壁の守り」を持っているということなのです。`,
        image: "/journal/05-comparison/content-1.png",
        imageAlt: "Microscopic Cross-section Comparison: Ulin vs Serangan Batu",
        icon: Microscope,
        items: [
          { icon: ShieldCheck, text: "ウリンの比重は1.0を超え、水に沈むほどの超高密度。" },
          { icon: Droplets, text: "非多孔質な構造が、内部への水分侵入を物理的にシャットアウト。" }
        ]
      },
      {
        title: "「ささくれ」のリスクを、\n軽視していませんか？",
        accent: "ささくれ",
        content: `耐久性と同じくらい重要なのが「安全性」です。特にセランガンバツなどの材は、経年変化とともに表面の繊維が剥がれやすく、鋭い「ささくれ」が発生しやすい特性があります。これは、素足で歩くテラスや、直接触れる家具においては極めて深刻な問題です。

一方のウリンは、木目が極めて細かく詰まっているため、経年変化しても表面が非常に滑らかなままであることが大きな特徴です。シルバーグレーに変化した後も、その手触りはシルクのように上品で、お子様やペットがいる環境でも安心してお使いいただけます。

「どの木も同じ」という考え方は、実際に素足で歩いてみて、その痛みに気づいた時にはもう遅いのです。肌に触れる素材としての優しさを、ウリンは兼ね備えています。`,
        icon: UserCheck
      },
      {
        type: "cards",
        title: "主要ハードウッドの性格と「買い時」",
        subtitle: "Material Personality Analysis",
        cards: [
          { 
            icon: Shield, 
            title: "イペ (Ipe)\n「重厚な強者」", 
            text: "非常に優れた耐久性を持ちますが、供給が不安定で価格が高騰しやすい傾向があります。また、木目が複雑なため、稀に暴れ（反り）が生じることがあります。" 
          },
          { 
            icon: Leaf, 
            title: "セランガンバツ\n「標準的な選択」", 
            text: "コストパフォーマンスに優れますが、他の2種に比べると密度が低く、耐久年数は半分程度。また、ささくれが発生しやすいため定期的なメンテナンスが必須です。" 
          }
        ]
      },
      {
        title: "30年という時間軸で見る、\n「真の経済性」",
        content: `一見高価に思えるウリンですが、30年という長いスパンで「ライフサイクルコスト」を計算すると、最も安価な選択肢であることがわかります。

安価な材を選んだ場合、15年前後で大規模な改修や再施工が必要になります。その際の「解体費用」「廃棄費用」「材料費」「人件費」は、初期費用の数倍に膨らみます。これに対し、ウリンは一度の投資で30年、50年とその価値を維持し続けます。

「最後の一買い」としてウリンを選ぶことは、賢明な資産運用と同じです。KamaKraftが提供するのは、一時の安さではなく、一生涯にわたる「安心と品格」です。`,
        icon: TrendingUp
      },
      {
        type: "table",
        title: "ハードウッド３種・徹底比較表",
        subtitle: "性能・安全性・コストの全項目検証",
        tableHeaders: ["比較項目", "ウリン (鉄の木)", "イペ", "セランガンバツ"],
        tableData: [
          { label: "想定耐用年数", ulin: "30年以上", ipe: "20年前後", soft: "10〜15年" },
          { label: "ささくれ発生率", ulin: "極めて低い", ipe: "低い", soft: "高い（注意）" },
          { label: "寸法安定性（反り等）", ulin: "最高レベル", ipe: "高い", soft: "普通" },
          { label: "防蟻（シロアリ）性能", ulin: "最強レベル", ipe: "高い", soft: "普通" },
          { label: "生涯コスト(30年)", ulin: "★☆☆ (最安)", ipe: "★★☆ (中)", soft: "★★★ (高)" }
        ]
      },
      {
        title: "結び：本物を知る人が、ウリンに辿り着く理由",
        content: `ハードウッドの世界は奥深いものですが、その頂点に君臨するのはやはりウリンです。

他の木材を検討した後に、最終的にウリンに戻ってくるお客様が多いのは、その圧倒的な「信頼感」に他なりません。海辺でも、湿地でも、そしてあなたの邸宅でも。ウリンは毅然としてその姿を保ち続けます。

KamaKraftは、この「ハードウッドの王者」を、あなたの日常にふさわしい最高峰の造形へと昇華させてお届けします。`,
        icon: History
      }
    ]
  },
  "ulin-sap-stain-prevention": {
    slug: "ulin-sap-stain-prevention",
    title: "ウリンの「赤い樹液（アク）」対策。\n汚れを落とす方法と、施工前に知っておくべき注意点",
    titleEn: "The Crimson Ritual",
    subtitle: "「汚れ」を「生命力の証」へと変える、大人のためのメンテナンス読本",
    heroImage: "/journal/06-sap-stain/hero.png",
    publishDate: "2026.04.05",
    category: "ウリン豆知識",
    introTitle: "雨の日に現れる、神秘的で少し厄介な「贈りもの」。",
    introContent: `ウリンのウッドデッキや家具を設置して初めての雨の日。床や壁にうっすらと広がる赤い染めに驚かれるかもしれません。これは「アク」と呼ばれるウリン特有の樹液が、雨水とともに溶け出したものです。

多くの人がこれを「施工ミス」や「欠陥」ではないかと心配されますが、実はその逆です。この赤い液体こそが、ウリンを「最強の木」たらしめる源泉であり、他の木材には真似できない驚異的な耐久性の正体なのです。

本稿では、アクが出る科学的な理由から、付着した汚れを簡単に落とす方法、そして施工前に検討しておくべき具体的な対策までを徹底解説します。この現象を正しく理解することで、ウリンとの暮らしはより豊かで安心なものへと変わります。`,
    sections: [
      {
        title: "アクの正体は、\n最強の防腐剤「ポリフェノール」",
        content: `ウリンから出る赤い液体の正体は、ワインや緑茶にも含まれる「ポリフェノール（タンニン）」の一種です。ウリンはこの成分を驚異的な密度で細胞内に蓄えています。

このポリフェノールには強力な抗菌作用と防虫作用があり、海水の中でも腐らず、シロアリすら寄せ付けない鉄壁の防御能力をウリンに与えています。つまり、アクが出るということは、その木材が「今まさに自らを守るために機能している」という生命力の証なのです。

一般的に、アクの流出は設置から3ヶ月から半年程度、長くても1年以内には自然に収まります。この「浄化期間」を過ぎると、ウリンは安定したシルバーグレーへと変化し、その耐久性はさらに盤石なものとなります。`,
        icon: Sparkles,
        items: [
          { icon: ShieldCheck, text: "タンニンが持つ強力な抗菌作用により、腐朽菌の繁殖を根源から抑制。" },
          { icon: BugOff, text: "シロアリが嫌う成分が凝縮されており、薬剤散布なしでの防虫を実現。" }
        ]
      },
      {
        title: "もしコンクリートが汚れたら？\n「驚くほど簡単に」落ちる事実",
        content: `アクの対策で最も重要なのは、「落とせる汚れである」と知っておくことです。万が一、コンクリートや石材に赤い跡がついてしまっても、慌てる必要はありません。

今回掲載した実証画像（右側）のように、市販の中性洗剤や、より確実な方法として「家庭用塩素系漂白剤（ハイター等）」を薄めた液で軽くこするだけで、アクの汚れは驚くほど綺麗に分解されます。ポリフェノールは酸化しやすく分解しやすい性質を持っているため、油汚れのように深く染み込んで取れなくなることはありません。

また、特別な清掃をしなくても、半年から1年も経てば紫外線の力で自然に分解され、跡形もなく消えていくことがほとんどです。「時が解決してくれる」のも、天然素材ならではの美徳と言えるでしょう。`,
        image: "/journal/06-sap-stain/content-1.png",
        imageAlt: "Cleaning demonstration: Removing Ulin sap stains from a stone patio floor",
        icon: Wand2
      },
      {
        type: "cards",
        title: "失敗しないための、施工前３つの知恵",
        subtitle: "Strategic Protection Before Installation",
        cards: [
          { 
            icon: Shield, 
            title: "徹底した「養生」\n(Masking)", 
            text: "施工中、アクが付きそうな壁面や床面をあらかじめビニールやシートで保護します。初期の激しい流出をこの期間に防ぐのが最も効果的です。" 
          },
          { 
            icon: Waves, 
            title: "排水ルートの「設計」\n(Drainage)", 
            text: "雨水がコンクリート面を伝わらず、土壌や砂利に直接落ちるように設計します。アクが土に還れば、汚れを気にする必要は一切ありません。" 
          }
        ]
      },
      {
        title: "「最初からアクを出す」という、\nプロの裏技",
        content: `どうしても最初から汚れを避けたい場合、職人の間では「水通し」という手法が取られることがあります。

施工前に材料を水に浸したり、数日間散水してあらかじめアクを強制的に排出させる工程です。これにより、現場に設置した後の流出を最小限に抑えることが可能になります。KamaKraftでは、設置環境に合わせてこのような専門的なアドバイスも提供しています。

また、濃い色の床材や、アクが目立ちにくい素材を周囲に配置するなど、デザインの力でアクと共生するアプローチも非常にスマートな選択です。`,
        icon: Scale
      },
      {
        title: "結び：赤い涙は、\n一生涯続く物語の「序章」",
        content: `ウリンが流す赤い雫。それは、熱帯の過酷な密林で生き抜いてきた「鉄の木」が、新しい居場所であなたの暮らしを守り始めるための洗礼のようなものです。

その一時的な変化を慈しみ、理解し、適切に対処する。それこそが、本物の天然素材を愛でる大人の贅沢ではないでしょうか。アクが止まる頃、ウリンはあなたの邸宅に完全に溶け込み、代えの効かない一生のパートナーとなっているはずです。

KamaKraftは、この活気に満ちた「生命のプロセス」を、お客様が心から楽しめるよう、確かな知識と技術でサポートし続けます。`,
        icon: History
      }
    ]
  }
};

export default function ArticlePage({ params: paramsPromise }: { params: Promise<{ slug: string }> }) {
  const params = use(paramsPromise);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 1.05]);

  const article = ARTICLES[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <p className="text-white/40">記事の準備中です。</p>
          <Link href="/journal" className="text-sm underline font-bold tracking-widest">ジャーナル一覧に戻る</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050505] min-h-screen text-white/90 font-light overflow-x-hidden selection:bg-white selection:text-black">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </motion.div>

        {/* Floating Top Nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-24 left-6 md:left-10 z-20"
        >
          <Link 
            href="/journal" 
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-white/40 hover:text-white transition-colors group uppercase"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            ジャーナル一覧に戻る
          </Link>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-4 text-balance"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.6em] text-white/40 uppercase block">
              {article.titleEn}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight">
              <ResponsiveText text={article.title} isTitle />
            </h1>
            <p className="text-white/40 text-sm md:text-base tracking-[0.2em] font-medium pt-4">
              {article.subtitle}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "80px" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="w-px bg-gradient-to-b from-white/40 to-transparent mx-auto"
          />
        </div>

        <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/20 uppercase">
          スクロールして読み進める
        </motion.div>
      </section>

      {/* Intro Section */}
      {article.introTitle && (
        <section className="max-w-3xl mx-auto px-6 py-24 md:py-40 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12 flex flex-col items-start text-left"
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-extralight tracking-wide md:border-l border-white/20 md:pl-8 leading-relaxed">
                <ResponsiveText text={article.introTitle} isTitle />
              </h2>
              <div className="text-base md:text-lg leading-loose text-white/70 space-y-6">
                {article.introContent?.split('\n\n').map((para, i) => (
                  <p key={i}><ResponsiveText text={para} /></p>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Dynamic Sections Loop */}
      <div className="relative">
        {article.sections.map((section, index) => {
          if (section.type === "cards") {
            return (
              <section key={index} className="py-32 md:py-48 bg-white/[0.02]">
                <div className="max-w-7xl mx-auto px-6 space-y-24">
                  <div className="text-center space-y-4">
                    <h3 className="text-xs font-bold tracking-[0.5em] text-white/30 uppercase">{section.subtitle}</h3>
                    <p className="text-3xl md:text-4xl font-extralight tracking-wider"><ResponsiveText text={section.title} /></p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.cards?.map((card, ci) => (
                      <motion.div
                        key={ci}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ci * 0.2 }}
                        className="p-12 border border-white/5 bg-white/5 backdrop-blur-3xl space-y-6 group hover:border-white/20 transition-colors"
                      >
                        <card.icon size={32} className="text-white/40 group-hover:text-white transition-colors" />
                        <h4 className="text-xl font-medium tracking-wide text-white"><ResponsiveText text={card.title} /></h4>
                        <p className="text-white/50 circle leading-relaxed font-light"><ResponsiveText text={card.text} /></p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === "table") {
            return (
              <section key={index} className="py-32 md:py-48 max-w-5xl mx-auto px-6 overflow-x-auto">
                <div className="text-center space-y-6 mb-16">
                  <h3 className="text-center text-2xl font-light tracking-[0.2em]">{section.title}</h3>
                  {section.subtitle && <p className="text-white/40 text-sm">{section.subtitle}</p>}
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] tracking-[0.2em] font-bold uppercase text-center">
                      <th className="py-6 text-left text-white/40">{section.tableHeaders?.[0] || "項目"}</th>
                      <th className="py-6 px-4 text-white border-x border-white/5 bg-white/[0.02]">{section.tableHeaders?.[1]}</th>
                      <th className="py-6 px-4 text-white/30">{section.tableHeaders?.[2]}</th>
                      <th className="py-6 px-4 text-white/30">{section.tableHeaders?.[3]}</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-light text-center">
                    {section.tableData?.map((row, i) => (
                      <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors">
                        <td className="py-8 text-left font-medium text-white/40">{row.label}</td>
                        <td className="py-8 px-4 text-white font-medium border-x border-white/5 bg-white/[0.02] scale-[1.02] origin-center">
                          {row.ulin}
                        </td>
                        <td className="py-8 px-4 text-white/40">{row.ipe}</td>
                        <td className="py-8 px-4 text-white/20">{row.soft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            );
          }

          return (
            <section 
              key={index} 
              className={`py-32 md:py-48 ${index % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className={section.image 
                  ? `grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
                  : `max-w-4xl mx-auto text-center flex flex-col items-center`
                }>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={section.image ? "space-y-8" : "space-y-12"}
                  >
                    {section.icon && (
                      <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center ${!section.image ? 'mx-auto' : ''}`}>
                        <section.icon className="text-white/40" size={32} />
                      </div>
                    )}
                    
                    <AccentTitle 
                      title={section.title} 
                      accent={section.accent} 
                      className={`text-3xl md:text-5xl font-extralight tracking-wider leading-tight ${section.image ? 'text-left md:text-left' : 'text-center'}`} 
                    />

                    <div className={`text-white/60 leading-loose text-lg space-y-8 ${section.image ? 'text-left max-w-xl' : 'text-center max-w-2xl mx-auto'}`}>
                      {section.content?.toString().split('\n\n').map((para, pidx) => (
                        <p key={pidx}><ResponsiveText text={para} /></p>
                      ))}
                    </div>
                    
                    {section.items && (
                      <ul className={`space-y-4 pt-6 ${!section.image ? 'flex flex-col items-center' : ''}`}>
                        {section.items.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="flex items-center gap-4 text-sm text-white/80"
                          >
                            <item.icon size={18} className="text-white/40" />
                            {item.text}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.div>

                  {section.image && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative aspect-square rounded-sm overflow-hidden border border-white/5 order-first lg:order-none"
                    >
                      <Image
                        src={section.image}
                        alt={section.imageAlt || ""}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </motion.div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Final Message */}
      <section className="py-32 md:py-60 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.heroImage}
            alt="Durability BG"
            fill
            className="object-cover opacity-10 grayscale"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
          <History size={48} className="mx-auto text-white/20" />
          <h3 className="text-3xl md:text-6xl font-extralight tracking-tight leading-tight">
            100年後も愛される、<br />
            <span className="text-white">一生モノという贅沢。</span>
          </h3>
          <p className="text-lg md:text-xl text-white/60 leading-loose max-w-2xl mx-auto">
            私たちの家具が「一生モノ」を自負するのは、ウリンという素材が持つ永遠に近い時間に裏打ちされているからです。
            <br /><br />
            使い捨ての消費文化から脱却し、世代を超えて受け継がれる価値を持つ家具。KamaKraftは、大自然の恩恵である「鉄の木」を、最高峰の工芸技術によってあなたの日常へと繋ぎます。
          </p>
          <div className="pt-12">
            <Link 
              href="/products" 
              className="inline-block border border-white/80 text-xs font-bold tracking-[0.4em] px-12 py-6 hover:bg-white hover:text-black transition-all uppercase"
            >
              コレクションを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Nav */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <Link href="/journal" className="flex items-center gap-4 text-xs font-bold tracking-widest text-white/40 hover:text-white transition-colors group uppercase">
          <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          ジャーナル一覧を見る
        </Link>
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase text-center">
          <span>公開日 {article.publishDate}</span>
          <span>カテゴリー: {article.category}</span>
        </div>
      </div>
    </div>
  );
}
