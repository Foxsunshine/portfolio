/* Single source of truth for design portfolio entries.
   index.html reads cover + title/cat/year. project.html reads details (with
   width/height for content-aware layout) + role/client/desc.
   Adding/removing a project here updates both pages. */

const PROJECTS = [
  {
    id: 1, layout: "feature",
    title: { en: "Zoomily", ja: "Zoomily", zh: "Zoomily" },
    cat:   { en: "Brand Identity", ja: "ブランドVI", zh: "品牌VI" },
    year: "2019",
    role:  { en: "Visual Identity Design", ja: "VIデザイン", zh: "视觉识别设计" },
    client:{ en: "Self-initiated", ja: "個人プロジェクト", zh: "个人项目" },
    desc: {
      en: "A pet brand VI system inspired by the refined colors of popular Chinese court dramas. Targets female customers and uses a black cat character to enhance brand recognition. Includes packaging applications for the derived sub-brands Camily and Domily.",
      ja: "ペットブランドのVIシステム。中国宮廷ドラマの洗練された色彩をインスピレーションに、女性顧客をターゲットとした黒猫キャラクターによるブランド認知向上。サブブランドCamily / Domilyのパッケージ展開も含む。",
      zh: "宠物品牌VI系统。配色灵感来源于热播中国宫廷剧的精致色调，主要面向女性客户，引入黑猫角色增强品牌辨识度，同时包含子品牌Camily/Domily的包装应用设计。"
    },
    cover: "assets/design-01-cover.png",
    details: [
      { src: "assets/detail/project-1/img-1.jpg", w: 1887, h: 1281 },
      { src: "assets/detail/project-1/img-2.jpg", w: 1886, h: 2415 },
      { src: "assets/detail/project-1/img-3.jpg", w: 1886, h: 1181 },
      { src: "assets/detail/project-1/img-4.jpg", w: 1886, h: 2021 },
      { src: "assets/detail/project-1/img-5.jpg", w: 1886, h: 3510 }
    ]
  },
  {
    id: 2, layout: "half",
    title: { en: "Joyoung Festival Gift", ja: "九陽 新年ギフト", zh: "九阳新年礼盒" },
    cat:   { en: "Packaging Design", ja: "パッケージデザイン", zh: "包装设计" },
    year: "2020",
    role:  { en: "Chief Designer", ja: "チーフデザイナー", zh: "主设计师" },
    client:{ en: "Joyoung Co., Ltd.", ja: "九陽株式会社", zh: "九阳股份" },
    desc: {
      en: "Lunar New Year gift packs for Joyoung's employees and major customers. Design inspired by three flagship products (water dispenser, rice cooker, cooking machine), featuring the Joyoung circle, brand orange, and classic festival elements.",
      ja: "九陽の従業員・主要顧客向け年賀ギフトパック。ウォーターサーバー、炊飯器、クッキングマシンの3主力製品をモチーフに、ブランドカラーのオレンジと中国の正月要素を融合。",
      zh: "九阳员工及重要客户的新年礼盒。设计灵感来自2020年三大主力产品（饮水机、电饭煲、料理机），视觉突出九阳圆环标志、品牌橙色和经典年味元素。"
    },
    cover: "assets/design-02-cover.png",
    details: [
      { src: "assets/detail/project-2/img-1.jpg", w: 5334, h: 3000 },
      { src: "assets/detail/project-2/img-2.jpg", w: 5334, h: 3000 },
      { src: "assets/detail/project-2/img-3.jpg", w: 5334, h: 3000 },
      { src: "assets/detail/project-2/img-4.jpg", w: 5334, h: 3001 },
      { src: "assets/detail/project-2/img-5.jpg", w: 5334, h: 3000 }
    ]
  },
  {
    id: 3, layout: "half",
    title: { en: "Tencent Welfare Gift", ja: "Tencent 公益ギフト", zh: "腾讯公益礼盒" },
    cat:   { en: "Packaging Design", ja: "パッケージデザイン", zh: "包装设计" },
    year: "2021",
    role:  { en: "Chief Designer", ja: "チーフデザイナー", zh: "主设计师" },
    client:{ en: "ThinkBig Studio", ja: "ThinkBig Studio", zh: "ThinkBig Studio" },
    desc: {
      en: "Gift for participants in Tencent's public-welfare fundraising campaign. PVC shell packaging with special welfare paper, containing a 100-day plan with to-do lists and stickers.",
      ja: "テンセント公益募金キャンペーン参加者向けギフト。PVCシェルと特別公益紙によるパッケージに、100日プラン（ToDoリスト＋ステッカー）を収録。",
      zh: "腾讯公益募捐活动参与者纪念礼品。PVC外壳搭配特种公益纸包装，内含100天计划（待办清单+特别贴纸）。"
    },
    cover: "assets/design-03-cover.png",
    details: [
      { src: "assets/detail/project-3/img-1.jpg", w: 3106, h: 2071 },
      { src: "assets/detail/project-3/img-2.jpg", w: 3199, h: 2133 },
      { src: "assets/detail/project-3/img-3.jpg", w: 3199, h: 2133 },
      { src: "assets/detail/project-3/img-4.jpg", w: 3199, h: 2133 },
      { src: "assets/detail/project-3/img-5.jpg", w: 3065, h: 2044 }
    ]
  },
  {
    id: 4, layout: "tall",
    title: { en: "Carnivo Toy Gift", ja: "Carnivo おもちゃギフト", zh: "Carnivo 玩具礼盒" },
    cat:   { en: "3D Modeling · Packaging", ja: "3Dモデリング · パッケージ", zh: "3D建模 · 包装" },
    year: "2021",
    role:  { en: "3D Modeling, Package Design", ja: "3Dモデリング、パッケージ", zh: "3D建模、包装设计" },
    client:{ en: "ThinkBig Studio", ja: "ThinkBig Studio", zh: "ThinkBig Studio" },
    desc: {
      en: "Children's-Day gift for Carnival Advertising clients. Co-branded with ThinkBig's 'little white' IP and packaged in a transparent PVC box with a skateboard and a roly-poly toy figure.",
      ja: "こどもの日向けクライアントギフト。ThinkBigの「little white」IPとのコラボ。透明PVCボックスにスケートボードと起き上がりこぼしフィギュアを収納。",
      zh: "儿童节客户礼品。与ThinkBig「小白」IP联名，透明PVC盒内装有滑板和「小白」不倒翁玩偶，以游戏元素展现广告人的多元创意。"
    },
    cover: "assets/design-04-cover.png",
    details: [
      { src: "assets/detail/project-4/img-1.jpg", w: 3201, h: 2754 },
      { src: "assets/detail/project-4/img-2.jpg", w: 1920, h: 1920 },
      { src: "assets/detail/project-4/img-3.jpg", w: 1920, h: 1920 },
      { src: "assets/detail/project-4/img-4.jpg", w: 1920, h: 1920 },
      { src: "assets/detail/project-4/img-5.jpg", w: 1920, h: 1343 }
    ]
  },
  {
    id: 5, layout: "tall",
    title: { en: "Joyoung Recruit", ja: "九陽 新卒採用", zh: "九阳校招" },
    cat:   { en: "Poster · Brand Design", ja: "ポスター · ブランド", zh: "海报 · 品牌设计" },
    year: "2020",
    role:  { en: "Chief Designer", ja: "チーフデザイナー", zh: "主设计师" },
    client:{ en: "Joyoung Co., Ltd.", ja: "九陽株式会社", zh: "九阳股份" },
    desc: {
      en: "Campus-recruitment visuals to reposition Joyoung's brand for young people. Bold orange, glass-textured brand elements, and playful typography break the 'traditional soymilk-machine brand' perception.",
      ja: "キャンパスリクルーティング用ビジュアル。「伝統的な豆乳メーカーブランド」というイメージを刷新するため、大胆なオレンジ、ガラス質感のブランド要素、遊び心のあるタイポグラフィを採用。",
      zh: "校园招聘视觉设计。挑战是改变年轻人心中九阳『传统豆浆机品牌』的刻板印象，大面积使用橙色，搭配玻璃质感的品牌元素和趣味排版。"
    },
    cover: "assets/design-05-cover.png",
    details: [
      { src: "assets/detail/project-5/img-1.jpg", w: 4000, h: 4915 },
      { src: "assets/detail/project-5/img-2.jpg", w: 4001, h: 5102 },
      { src: "assets/detail/project-5/img-3.jpg", w: 4002, h: 4788 },
      { src: "assets/detail/project-5/img-4.jpg", w: 4007, h: 6140 },
      { src: "assets/detail/project-5/img-5.jpg", w: 4008, h: 3644 }
    ]
  },
  {
    id: 6, layout: "wide",
    title: { en: "Tencent Festival Gift", ja: "Tencent 端午ギフト", zh: "腾讯端午礼盒" },
    cat:   { en: "3D Modeling · Packaging", ja: "3Dモデリング · パッケージ", zh: "3D建模 · 包装" },
    year: "2021",
    role:  { en: "3D Modeling", ja: "3Dモデリング", zh: "3D建模" },
    client:{ en: "ThinkBig Studio", ja: "ThinkBig Studio", zh: "ThinkBig Studio" },
    desc: {
      en: "Dragon-Boat-Festival gift packs combining creativity and practicality. A skateboard transforms into a chair illustrated with the Tencent penguin; a carpet and triangle-dumpling packaging round out the outdoor set.",
      ja: "端午節ギフトパック。スケートボードを椅子に変形させる実用性と創造性の融合。テンセントペンギンのイラストを施し、カーペットと三角ちまきパッケージも付属。",
      zh: "端午节礼盒，将滑板变形为椅子，兼具创意与实用性。融入腾讯企鹅插画和端午元素，另附地毯和三角粽子包装，可整套带出野营。"
    },
    cover: "assets/design-06-cover.png",
    details: [
      { src: "assets/detail/project-6/img-1.jpg", w: 3334, h: 1876 },
      { src: "assets/detail/project-6/img-2.jpg", w: 1600, h: 900 },
      { src: "assets/detail/project-6/img-3.jpg", w: 1600, h: 900 },
      { src: "assets/detail/project-6/img-4.jpg", w: 1600, h: 900 },
      { src: "assets/detail/project-6/img-5.jpg", w: 1600, h: 900 }
    ]
  },
  {
    id: 7, layout: "half",
    title: { en: "Tencent Esports Gift", ja: "Tencent eスポーツギフト", zh: "腾讯电竞礼盒" },
    cat:   { en: "Packaging · Photography", ja: "パッケージ · 写真", zh: "包装 · 摄影" },
    year: "2021",
    role:  { en: "Calendar Design, Photography", ja: "カレンダー設計、撮影", zh: "日历设计、摄影" },
    client:{ en: "ThinkBig Studio", ja: "ThinkBig Studio", zh: "ThinkBig Studio" },
    desc: {
      en: "Esports New-Year gift pack styled as a chip bag. Centerpiece is a 365-day creative calendar featuring esports highlights, jokes, and industry jargon, plus stickers.",
      ja: "ポテチ袋型のeスポーツ年賀ギフトパック。365日分のeスポーツハイライト、ジョーク、業界用語を収録したクリエイティブカレンダーが目玉。",
      zh: "薯片袋造型的电竞新年礼盒。亮点是365天创意日历，收录电竞名场面、趣味梗和行业术语，让收到礼盒的员工每天都能产生共鸣。"
    },
    cover: "assets/design-07-cover.png",
    details: [
      { src: "assets/detail/project-7/img-1.jpg", w: 3912, h: 2580 },
      { src: "assets/detail/project-7/img-2.jpg", w: 3720, h: 2533 },
      { src: "assets/detail/project-7/img-3.jpg", w: 3870, h: 2800 },
      { src: "assets/detail/project-7/img-4.jpg", w: 2808, h: 2808 },
      { src: "assets/detail/project-7/img-5.jpg", w: 2864, h: 2968 }
    ]
  }
];
