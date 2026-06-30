import type { Demo, BodySection, CodeBlock, Img } from "@/data/demos";

const _ = { en: "", "zh-TW": "" };

export const INFORMATIONARCHITECTUREARTICLE: Demo = {
  date: "2026-06-30",
  title: {
    en: "Information Architecture",
    "zh-TW": "資訊架構",
  },
  description: {
    en: "What information architecture is, why it matters, and how it integrates into every layer of the UX process.",
    "zh-TW":
      "資訊架構是什麼、為什麼重要，以及它如何整合進 UX 流程的每一層。",
  },
  type: ["article", "design"],
  tags: ["UX", "IA", "Design"],
  url: "/demos/information-architecture",
  image: {
    url: "/assets/demos/InformationArchitecture.png",
    source: `Photo by <a href="https://unsplash.com/@ccgabon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gabriel Sollmann</a> on <a href="https://unsplash.com/photos/people-walking-inside-library-Y7d265_7i08?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
  },
  introduction: {
    outline: {
      en: "Information Architecture is about organizing information, products, and services into places with good discoverability and comprehensibility. This article breaks down what \"information\" means in a product context, introduces the three pillars of IA — Users, Content, and Context — and shows how IA integrates into each layer of the UX Five Elements model.",
      "zh-TW":
        "資訊架構是將資訊、產品和服務組成具有良好可發現性和可理解性的場所。這篇文章拆解「資訊」在產品脈絡中的意涵，介紹 IA 的三大要素——使用者、內容、情境——並展示 IA 如何整合進 UX 五要素模型的每一層。",
    },
    emphasis: [
      {
        en: "Information = Useful + Timely — data becomes information only when it's useful at this moment and can influence the user's behavior or thinking.",
        "zh-TW":
          "資訊 = 有用 + 時間 — 在這個時間點，對用戶有用、能夠影響用戶的行為或者想法，才叫做資訊。",
      },
      {
        en: "Three Pillars — Users, Content, and Context form the core of IA. The overlap of all three is where good information architecture lives.",
        "zh-TW":
          "三大要素 — 使用者、內容、情境構成 IA 的核心。三者交集的地方，就是好的資訊架構所在。",
      },
      {
        en: "IA Across All Layers — from User Story in Strategy to Wireframe in Surface, every phase of the product process builds its own information architecture.",
        "zh-TW":
          "貫穿所有層級 — 從策略層的 User Story 到表現層的 Wireframe，產品流程的每個階段都在建構自己的資訊架構。",
      },
    ],
    refs: [
      {
        label: "【Day 02】設計流程（一）：IA 資訊架構",
        url: "#",
      },
      {
        label: "IA 資訊架構 (Information Architecture) 是什麼？",
        url: "#",
      },
      {
        label: "How to Create Information Architecture for Web Design",
        url: "#",
      },
    ],
  },
  previousArticle: {
    title: { en: "The Five Elements of UX", "zh-TW": "UX 的五要素" },
    url: "/demos/ux-five-elements",
  },
};

export const INFORMATIONARCHITECTUREARTICLE_DATA: Demo[] = [
  INFORMATIONARCHITECTUREARTICLE,
];

// ─── Motivation ───

export const MOTIVATION_SECTION: BodySection = {
  title: { en: "motivation", "zh-TW": "motivation" },
  content: {
    en: "This is the second article in a series I shared as a design leader. The previous article covered the Five Elements of UX — the five layers from strategy to surface. This one zooms into one of the most critical concepts within that framework: Information Architecture. If the five elements tell you what to deliver at each layer, IA tells you how to organize the information inside those deliverables so users can actually find what they need.",
    "zh-TW":
      "這是我在作為 design leader 時分享的系列第二篇。上一篇介紹了 UX 五要素——從策略到表現的五個層級。這一篇聚焦在那個框架裡最關鍵的交付物之一：資訊架構。如果五要素告訴你每一層該交付什麼，IA 告訴你如何組織那些交付物裡的資訊，讓使用者真的能找到他們需要的東西。",
  },
};


// ─── 01 Information ───

export const INFORMATION_SECTION: BodySection = {
  title: { en: "Information", "zh-TW": "資訊" },
  content: {
    en: "Information has two defining conditions: **useful** and **timely**. Put simply — data that is useful at this moment and can influence the user's behavior or thinking is what we call information.\nFrom a product perspective, this could be the structure of a page, task entry points on a homepage or tool page, or page-level messages. When users need it, they should be able to find it on screen; when they don't, it should blend invisibly into the page. It can be as granular as deciding what a single page needs to show, how it's presented, and whether the information can be understood.\nFrom a user perspective, **who the user is matters enormously**. Different types of users have different information needs and different behavior patterns. The same screen might need completely different information priorities depending on who's looking at it.",
    "zh-TW":
      "資訊有兩個重要的條件，**有用**、**時間**，簡單來說，在這個時間點，對用戶有用，能夠影響用戶的行為或者想法，才叫做資訊。\n從產品角度來看：這個訊息可能是網頁的架構、在首頁或工具頁的相關任務入口，也可能是頁面訊息。在有需要時能在畫面中找到訊息或入口，不需要時又可以完美隱形於頁面中。小到可以是一個頁面需要哪些訊息、用什麼方式呈現、資訊是否能夠被理解。\n從用戶角度來看：**誰是使用者是非常重要的**——不同性質的使用者會有不同的資訊需求、也會有不同的操作模式。同一個畫面，根據使用者不同，資訊的優先序可能完全不一樣。",
  },
};

// ─── 02 Information Architecture ───

export const COMPARISON_IMAGE: Img = {
  url: "/assets/demos/design/InformationArchitecture-a.png",
  source:`Photo by <a href="https://unsplash.com/@dustintramel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dustin Tramel</a> on <a href="https://unsplash.com/photos/assorted-title-books-vcXxSh0GHBc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> and by <a href="https://unsplash.com/@ccgabon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gabriel Sollmann</a> on <a href="https://unsplash.com/photos/people-walking-inside-library-Y7d265_7i08?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
};

export const IA_SECTION: BodySection = {
  title: { en: "Information Architecture", "zh-TW": "資訊架構" },
  content: {
    en: "When all the information is in place, information architecture emerges naturally. Good IA considers what users need, when they need it, and plans the right timing for the right content to appear — while also thinking about how it appears and how it's presented. And IA has one brutally practical quality: **the best information architecture is invisible to the user**.\nFor website content, the goal is to turn complex, messy data into something simple and clear — to build a legible map so users can find what they need efficiently and satisfy their search intent.\nIn short, information architecture is:\n1️⃣ The place where information, products, and services are organized.\n2️⃣ These places have good **discoverability** and **comprehensibility**.",
    "zh-TW":
      "當資訊都完整了，就會自然的產生資訊架構。良好的資訊架構會顧慮到：使用者要什麼，什麼時候要，規劃適合的時間、出現適合的內容，還需要思考如何出現、如何呈現。而資訊架構有一個很現實的問題——**最好的資訊架構，會讓使用者無感**。\n以網站內容來說，目的是如何將複雜繁瑣的資料，變成簡單明瞭、建構清晰的地圖，讓使用者可以更有效的獲得需要的資料，滿足搜尋的意圖。\n簡單來說資訊架構是：\n1️⃣ 將資訊、產品和服務組成的場所。\n2️⃣ 這些場所具有良好的**可發現性**和**可理解性**。",
  },
};

export const IA_QUOTE_SECTION: BodySection = {
  title: _,
  content: {
    en: "A spec document (ticket or requirement) covers all the information needed for that scope. Different phases of documentation cover different subsets of information, and together they gradually build up a complete and well-structured information architecture.",
    "zh-TW":
      "規格書（/票/需求）中會涵蓋到所有的資訊，而不同階段的文件會涵蓋到的資訊就會有所差別，並且逐漸建立起完整及良好的資訊架構。",
  },
};

// ─── 03 Three Elements ───

export const VENN_IMAGE: Img = {
  url: "/assets/demos/design/InformationArchitecture-c.png",
};

export const THREE_ELEMENTS_SECTION: BodySection = {
  title: { en: "Three Elements of IA", "zh-TW": "資訊架構的三大要素" },
  content: {
    en: "Information architecture lives at the intersection of three pillars — **Users**, **Content**, and **Context**. Each pillar asks different questions, and the overlap of all three is where IA decisions get made.\n**Content** — What kind of information is available? What relevance does it have to the user?\n**Context** — Where is the user seeking out the content? When, why, and how is the user engaging with the content?\n**User** — Who is consuming the content? What value does it provide? What preexisting expectations do they have?",
    "zh-TW":
      "資訊架構存在於三大支柱的交集——**使用者**、**內容**、**情境**。每個支柱問不同的問題，三者重疊的地方就是 IA 決策發生的位置。\n**內容 (Content)** — 有哪些資訊可用？這些資訊和使用者的關聯性是什麼？\n**情境 (Context)** — 使用者在哪裡尋找內容？什麼時候、為什麼、如何與內容互動？\n**使用者 (User)** — 誰在消費這些內容？提供什麼價值？他們有什麼既有的期待？",
  },
};

export const THREE_ELEMENTS_CODE: CodeBlock = {
  codeType: "text",
  code: `Information Architecture — Three Pillars

  Content     →  What information is available?
              →  What relevance to the user?
  Context     →  Where is the user seeking content?
              →  When, why, how do they engage?
  User        →  Who is consuming the content?
              →  What value and expectations?

  IA = intersection of all three`,
};

export const DEFINITION_SECTION: BodySection = {
  title: _,
  content: {
    en: "**Definition:** user-centered planning, organization, and construction of information environments that help users find data effectively and solve the problems they encounter.\n**Users** — audience, needs, behaviors, tasks, user experience.\n**Content** — format of content delivery, information types, items.\n**Context** — the background environment when building: goals, budget, technology, resources, culture.\n**Goals:**\n1️⃣ Help users find the information they need smoothly and solve their problems (effective use).\n2️⃣ Help information providers deliver information according to service goals and business models, generating value.\n3️⃣ Allow websites or apps to maintain quality as information changes, grows, or shrinks over time.",
    "zh-TW":
      "**定義：**以使用者為中心，規畫、組織、建構資訊環境，協助使用者有效地找到資料，解決他們碰到的問題！\n**使用者 (Users)** — 受眾、需求、行為、任務、使用者體驗。\n**內容 (Contents)** — 內容提供的形式、資訊的型態、項目。\n**情境 (Context)** — 建構時的背景環境，例如：目標、預算、技術、資源、文化等。\n**目標：**\n1️⃣ 要讓使用者能夠順利搜尋到他想要的資訊，並且可以解決他的問題（有效運用）。\n2️⃣ 讓資訊提供者，能夠依服務目標、商業模式去提供資訊，產生價值。\n3️⃣ 讓網站或 APP，可以依資訊的變化、增減、擴充，持續維持品質。",
  },
};

// ─── 04 Integration with UX Five Elements ───

export const USER_STORY_IMAGE: Img = {
  url: "/assets/demos/design/InformationArchitecture-b.png",
};

export const UX_INTEGRATION_SECTION: BodySection = {
  title: {
    en: "IA in the Five Elements",
    "zh-TW": "整合進 UX 五要素",
  },
  content: {
    en: "The academic definition of Information Architecture goes deeper — the references below cover that. Here, the focus is on how IA integrates into a practical development process.\nIn reality, each phase of development produces progressively more detailed information needs, and the focus of each cycle varies. Every configuration needs its own information architecture. Here's a quick mapping:\n**In Strategy — User Story**\nHelps collect and define requirements. The template — \"As a __(actor), I want to __(action), so that __(after effect)\" — structures the who (add adjectives and context), the what (use verbs), and the why (the outcome or insight, in one sentence).\n**In Scope — Functional Map**\nAn overview of the product's features and services. The functional map shows the full breadth of what the product offers, organized by hierarchy.\n**In Skeleton — UI Flow**\nThe feedback and information users receive after each action is triggered. UI flow diagrams map out every behavior → response path, including error states and edge cases.\n**In Skeleton / Surface — Wireframe & Prototype**\nClear information architecture. The wireframe specifies the IA for each state — what content appears, what fields exist, what error messages say, and how the layout adapts.",
    "zh-TW":
      "在下方的參考資料中可以看到 Information Architecture 更詳細的學術定義。這裡更著重在說明 IA 如何整合進實際開發流程。\n但考量進實際開發的流程中，就會在每個階段產生出更多的資訊細節需求，這會取決於每次開發的著重點為何而有所差別。所以，其實每一個 config 都會有需要說明的資訊架構，下面快速舉例：\n**In Strategy — User Story**\n協助收斂及定義需求。模板——「As a __(actor), I want to __(action), so that __(after effect).」——結構化了誰（可以加上形容詞、情境詞）、要什麼（盡量用動詞）、為什麼（想要看到的成果、洞見，盡量用一句話）。\n**In Scope — Functional Map**\n產品及功能的 overview。Functional Map 展示產品提供的所有功能和服務，按層級組織。\n**In Skeleton — UI Flow**\n每個行為觸發後的反饋及用戶所獲得的資訊。UI flow 圖表映射出每個行為 → 回應的路徑，包括錯誤狀態和邊界情境。\n**In Skeleton / Surface — Wireframe & Prototype**\n清楚的資訊架構。Wireframe 為每個狀態指定 IA——什麼內容出現、有哪些欄位、錯誤訊息怎麼寫、版面如何調適。",
  },
};

export const UX_INTEGRATION_CODE: CodeBlock = {
  codeType: "text",
  code: `IA in the Five Elements

  Layer              IA Deliverable           Purpose
  ─────────────────────────────────────────────────────────
  Strategy           User Story               Collect & define requirements
  Scope              Functional Map           Product & feature overview
  Skeleton           UI Flow                  Action → feedback mapping
  Skeleton/Surface   Wireframe · Prototype    State-level IA specification`,
};
