/* Resume page translations. Used by index.html only. Keys match
   data-i18n / data-i18n-html attributes in the markup. */

const I18N = {
  en: {
    name: "Cheng Jiang",
    title: "Software Engineer & Former Designer",
    tagline: "I build things for the web — with an eye trained in design and a mind pivoting toward AI.",
    navAbout: "About", navExperience: "Experience", navProjects: "Projects", navDesign: "Design", navContact: "Contact",
    about1: "I'm a software engineer based in Tokyo who started out as a graphic designer. After graduating from <a class=\"inline\" href=\"#\">China Academy of Art</a>, I spent two years creating packaging, posters, and brand visuals — then taught myself to code and made the leap to engineering.",
    about2: "For the past three years, I've been building full-stack web applications in financial services — Vue.js on the frontend, Java/Spring Boot on the backend, and AWS infrastructure underneath. I've led major framework migrations, designed serverless systems from scratch, and kept production running with zero downtime.",
    about3: "Now I'm pivoting toward <a class=\"inline\" href=\"#\">AI engineering</a> — building products powered by LLMs and AI agents, leveraging my web development and cloud experience as the foundation.",
    lang_zh: "Chinese — Native",
    lang_ja: "Japanese — JLPT N1",
    lang_en: "English — TOEIC 905",

    exp1_date: "2023 — Now", exp1_loc: "Tokyo, JP",
    exp1_role: "Software Developer", exp1_co_inline: " · Aiful Co., Ltd.",
    exp1_desc: "Full-stack development of web applications for business lending. Led Vue 2→3 and Spring Boot 2→3 migrations with zero production incidents. Designed serverless data pipelines on AWS Lambda and managed cross-system security remediation.",
    exp2_date: "2020 — 2021", exp2_loc: "Shenzhen, CN",
    exp2_role: "Graphic Designer", exp2_co_inline: " · Ad.Quan",
    exp2_desc: "Designed branded products including packaging, posters, and 3D product models. Coordinated with manufacturing teams on quality and print specifications.",
    exp3_date: "2019 — 2020", exp3_loc: "Hangzhou, CN",
    exp3_role: "Graphic Designer", exp3_co_inline: " · Joyoung Co., Ltd.",
    exp3_desc: "Brand and event design for a publicly listed home appliance company (~2,000 employees) — campus recruitment visuals, exhibition graphics, and cross-team design support.",

    t_packaging: "Packaging", t_poster: "Poster", t_3d: "3D Modeling", t_brand: "Brand Design", t_print: "Print",
    t_brandid: "Brand Identity", t_event: "Event Design", t_exhibition: "Exhibition", t_ad: "Advertising",

    proj1_title: "DualRead — Chrome Extension for Language Learners",
    proj1_store: "Chrome Web Store · v2.0",
    proj1_desc: "A Chrome side-panel extension for Chinese speakers learning English. Select text on any page to get instant translation, save unknown words to a personal vocab list, and see them auto-highlighted everywhere. No account, no backend, no telemetry — privacy-first design.",

    gallery_intro: "Seven selected works from my years as a graphic designer in China — packaging, brand identity, and 3D-modeled gift sets for clients including Tencent and Joyoung. Click any piece to see the full case.",

    contact_h: "Get In Touch",
    contact_body: "I'm currently looking for new opportunities in AI engineering. Whether you have a question or just want to say hi — feel free to reach out.",
    footer: "Designed & Built by Cheng Jiang"
  },
  ja: {
    name: "江 成 — Cheng Jiang",
    title: "ソフトウェアエンジニア / 元グラフィックデザイナー",
    tagline: "デザインの目と、AIに向かうエンジニアリングの力で、Webをつくる。",
    navAbout: "About", navExperience: "Experience", navProjects: "Projects", navDesign: "Design", navContact: "Contact",
    about1: "東京を拠点とするソフトウェアエンジニアです。キャリアはグラフィックデザイナーとしてスタートしました。<a class=\"inline\" href=\"#\">中国美術学院</a>を卒業後、約2年間パッケージデザインやポスター、ブランドビジュアルの制作に携わり、その後プログラミングを独学でエンジニアに転身しました。",
    about2: "現在はアイフル株式会社で約3年間、金融サービス向けのフルスタックWeb開発を担当しています。フロントエンド（Vue.js）、バックエンド（Java / Spring Boot）、インフラ（AWS）を横断し、フレームワークのメジャーバージョン移行やサーバーレスシステムの0→1設計を主導してきました。",
    about3: "今後は<a class=\"inline\" href=\"#\">AIエンジニアリング</a>へのピボットを目指しています。LLMやAIエージェントを活用したプロダクト開発に、Web開発とクラウドの実務経験を土台として取り組んでいきたいと考えています。",
    lang_zh: "中国語 — ネイティブ",
    lang_ja: "日本語 — JLPT N1",
    lang_en: "英語 — TOEIC 905",

    exp1_date: "2023 — 現在", exp1_loc: "東京",
    exp1_role: "ソフトウェアエンジニア", exp1_co_inline: " · アイフル株式会社",
    exp1_desc: "事業者向けローンの顧客書類・データ管理Webアプリのフルスタック開発。Vue 2→3、Spring Boot 2→3のメジャー移行を主導し本番インシデントゼロを達成。AWS Lambdaによるサーバーレスデータパイプラインの設計・構築も担当。",
    exp2_date: "2020 — 2021", exp2_loc: "中国・深セン",
    exp2_role: "グラフィックデザイナー", exp2_co_inline: " · 厦門方胜众合",
    exp2_desc: "ブランドのカスタマイズプロダクト（パッケージ、ポスター、3Dモデル等）のデザインを担当。工場との連携によるプロダクト品質管理も兼務。",
    exp3_date: "2019 — 2020", exp3_loc: "中国・杭州",
    exp3_role: "グラフィックデザイナー", exp3_co_inline: " · 九陽株式会社",
    exp3_desc: "上場企業（従業員約2,000名）のブランドイベント（キャンパス新卒採用、展示会等）のグラフィックデザインを担当。広告代理店との折衝、社内チームのデザイン支援も実施。",

    t_packaging: "パッケージ", t_poster: "ポスター", t_3d: "3Dモデリング", t_brand: "ブランド", t_print: "印刷",
    t_brandid: "ブランドVI", t_event: "イベント", t_exhibition: "展示会", t_ad: "広告",

    proj1_title: "DualRead — 英語学習者向けChrome拡張機能",
    proj1_store: "Chrome Web Store · v2.0",
    proj1_desc: "中国語話者のための英語学習Chrome拡張機能。Webページ上の英語を選択するだけで即座に中国語翻訳を表示し、未知の単語を個人の単語帳に保存。保存した単語は訪問するすべてのページで自動ハイライト表示されます。アカウント不要、バックエンドなし、テレメトリなし — プライバシーファーストの設計。",

    gallery_intro: "中国でグラフィックデザイナーとして活動していた時期の代表作7点。テンセントや九陽などのクライアント向けのパッケージ、ブランドVI、3Dモデリングを使ったギフトセットを含みます。クリックして各案件の詳細をご覧ください。",

    contact_h: "お問い合わせ",
    contact_body: "現在、AIエンジニアリング領域での新しい機会を探しています。ご質問やご相談、ちょっとしたご挨拶でも、お気軽にご連絡ください。",
    footer: "Designed & Built by Cheng Jiang"
  },
  zh: {
    name: "江 成 — Cheng Jiang",
    title: "软件工程师 / 前平面设计师",
    tagline: "用设计师的眼光和面向AI的工程能力，构建Web产品。",
    navAbout: "关于", navExperience: "经历", navProjects: "项目", navDesign: "设计作品", navContact: "联系",
    about1: "我是一名常驻东京的软件工程师，职业起点是平面设计师。从<a class=\"inline\" href=\"#\">中国美术学院</a>毕业后，我花了两年时间做包装设计、海报和品牌视觉，然后自学编程转行成为工程师。",
    about2: "过去三年，我在アイフル株式会社从事金融服务领域的全栈Web开发——前端Vue.js、后端Java/Spring Boot、基础设施AWS。我主导了框架大版本迁移，从零设计了无服务器系统，并保持了生产环境零故障。",
    about3: "现在我正在向<a class=\"inline\" href=\"#\">AI工程</a>方向转型——希望利用Web开发和云基础设施的经验，构建基于LLM和AI Agent的产品。",
    lang_zh: "中文 — 母语",
    lang_ja: "日语 — JLPT N1",
    lang_en: "英语 — TOEIC 905",

    exp1_date: "2023 — 至今", exp1_loc: "东京",
    exp1_role: "软件工程师", exp1_co_inline: " · アイフル株式会社",
    exp1_desc: "负责企业贷款客户文档与数据管理Web应用的全栈开发。主导了Vue 2→3和Spring Boot 2→3的大版本迁移，生产环境零事故。设计并构建了基于AWS Lambda的无服务器数据管道。",
    exp2_date: "2020 — 2021", exp2_loc: "中国·深圳",
    exp2_role: "平面设计师", exp2_co_inline: " · 厦门方胜众合",
    exp2_desc: "负责品牌定制产品（包装、海报、3D模型等）的设计，同时与工厂协调产品质量管控。",
    exp3_date: "2019 — 2020", exp3_loc: "中国·杭州",
    exp3_role: "平面设计师", exp3_co_inline: " · 九阳股份",
    exp3_desc: "为上市公司（约2,000名员工）的品牌活动（校园招聘、展会等）制作平面设计。负责与广告代理商沟通及团队内部设计支持。",

    t_packaging: "包装", t_poster: "海报", t_3d: "3D建模", t_brand: "品牌", t_print: "印刷",
    t_brandid: "品牌标识", t_event: "活动设计", t_exhibition: "展会", t_ad: "广告",

    proj1_title: "DualRead — 英语学习Chrome扩展",
    proj1_store: "Chrome Web Store · v2.0",
    proj1_desc: "面向中文母语者的英语学习Chrome扩展。在任意网页上选中英文即可获得即时中文翻译，将生词保存到个人单词本，之后访问的每个网页上这些生词都会自动高亮显示。无需注册、无后端、无遥测——隐私优先设计。",

    gallery_intro: "我在中国担任平面设计师期间的7件代表作——包括为腾讯、九阳等客户设计的包装、品牌VI和3D建模礼盒。点击任意作品查看完整案例。",

    contact_h: "联系我",
    contact_body: "我目前正在寻找AI工程领域的新机会。如有任何问题或合作意向，欢迎随时联系。",
    footer: "Designed & Built by Cheng Jiang"
  }
};
