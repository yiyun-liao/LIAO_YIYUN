import type { Demo, BodySection, CodeBlock, Img } from "@/data/demos";

export const UXFIVEELEMENTSARTICLE: Demo = {
  date: "2026-06-30",
  title: {
    en: "The Five Elements of UX",
    "zh-TW": "UX 的五要素",
  },
  description: {
    en: "A practical guide to the five-layer UX model — from strategy to surface — and how each layer maps to real deliverables in a product team.",
    "zh-TW":
      "五層 UX 模型的實用指南——從策略到表現——以及每一層如何對應到產品團隊中的實際交付物。",
  },
  type: ["article", "design"],
  tags: ["UX", "Design", "Product"],
  url: "/demos/ux-five-elements",
  image: {
    url: "/assets/demos/InformationArchitecture.png",
    source: `Photo by <a href="https://unsplash.com/@theshubhamdhage?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Shubham Dhage</a> on <a href="https://unsplash.com/photos/a-group-of-white-cubes-sitting-on-top-of-a-orange-surface-pIfbjoX4DV0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`,
  },
  introduction: {
    outline: {
      en: "The Elements of User Experience describes the building blocks of UX across five layers. This article walks through each layer — what it defines, what gets delivered, and where it fits in a real development workflow — so you can identify exactly which layers you own and which deliverables you're responsible for.",
      "zh-TW":
        "The Elements of User Experience 將使用者體驗拆解成五個層級。這篇文章逐層走過——每一層定義什麼、交付什麼、在實際開發流程中對應到哪裡——讓你能清楚辨識自己負責哪幾層、該產出什麼。",
    },
    emphasis: [
      {
        en: "Layer Ownership — UX isn't just the designer's job. Every layer involves decisions from PM, design, and engineering — knowing which layers you touch helps you communicate scope clearly.",
        "zh-TW":
          "層級所有權 — UX 不只是設計師的事。每一層都涉及 PM、設計、工程的決策——搞清楚自己碰到哪幾層，才能把範圍講明白。",
      },
      {
        en: "Two Lenses — the model splits into functional product (tasks, features) and information product (content, structure). Most real products are both — the split helps you check coverage.",
        "zh-TW":
          "雙重視角 — 模型分成功能產品（任務、功能）和資訊載體（內容、結構）。真實產品通常兩者皆是——這個拆分幫你檢查有沒有遺漏。",
      },
      {
        en: "Deliverable Mapping — each layer maps to concrete outputs: strategy → market research, scope → functional map, structure → IA & user flow, skeleton → wireframe, surface → UI.",
        "zh-TW":
          "交付物對照 — 每一層對應到具體產出：策略 → 市場研究、範圍 → functional map、結構 → IA & user flow、框架 → wireframe、表現 → UI。",
      },
    ],
    refs: [
      {
        label: "The Elements of User Experience — Jesse James Garrett",
        url: "https://ia.net/topics/the-five-elements-of-user-experience",
      },
    ],
  },
};

export const UXFIVEELEMENTSARTICLE_DATA: Demo[] = [UXFIVEELEMENTSARTICLE];

// ─── Motivation ───

export const MOTIVATION_SECTION: BodySection = {
  title: { en: "motivation", "zh-TW": "motivation" },
  content: {
    en: "This is knowledge I shared when I was working as a design leader. The boundaries between PM, designer, and engineer responsibilities have no absolute standard — a complete product thinking framework isn't just something designers should understand, it's a shared language for those conversations. More importantly, it's a checklist to make sure nothing falls through the cracks between roles.",
    "zh-TW":
      "這是一份我在作為 design leader 時分享的相關知識。PM、設計師、工程師在職責的界線上並沒有絕對的標準——一份完整的產品思考方向不只是設計師該了解的內容，也是一套共同語言去進行那些對話——更重要的是，一張清單，確保沒有東西在角色之間的縫隙裡被漏掉。",
  },
};

// ─── Brief ───

export const BRIEF_SECTION: BodySection = {
  title: { en: "", "zh-TW": "" },
  content: {
    en: "\"User Experience\" is not just the UX designer's responsibility. Every decision in the design process — from goal-setting to visual implementation — affects the user's experience: how information is delivered, whether behavior feels consistent, whether the interface flows naturally. Different companies and teams also define the same job title differently. So the real question isn't \"what is UX?\" — it's \"which layers am I responsible for completing?\"",
    "zh-TW":
      "「User Experience」並不只是 UX 設計師的職責——從目標設定到畫面實作，整個設計流程中的所有決定都會影響到用戶體驗：資訊如何傳遞、行為是否連貫一致、畫面是否自然延續。不同公司、部門對於相同職稱也會有不同的定義及工作分配。所以真正要問的不是「什麼是 UX」，而是「我需要完成到哪幾層的任務？」",
  },
};

// ─── Overview ───

export const OVERVIEW_IMAGE: Img = {
  url: "/assets/demos/design/UxFiveElementsArticle-a.png",
};

export const OVERVIEW_B_IMAGE: Img = {
  url: "/assets/demos/design/UxFiveElementsArticle-b.png",
};

export const OVERVIEW_SECTION: BodySection = {
  title: { en: "The Five Layers", "zh-TW": "五層架構" },
  content: {
    en: "The model describes UX as five stacked layers, each building on the one below. At the bottom sits Strategy — the most abstract, defining why the product exists. At the top sits Surface — the most concrete, defining what the user actually sees. In between, Scope, Structure, and Skeleton progressively turn abstract goals into tangible interface.\nThe model also offers two parallel lenses: the product as a functional tool (tasks, features, interaction) and the product as an information carrier (content, structure, presentation). Most real products are both — a dashboard is a functional tool that also needs clear information hierarchy.",
    "zh-TW":
      "這個模型把 UX 描述成五層堆疊的架構，每一層都建立在下面那層之上。最底下是策略層——最抽象的一層，定義產品為什麼存在。最上面是表現層——最具體的一層，定義使用者實際看到什麼。中間的範圍、結構、框架三層，則是逐步把抽象的目標變成可觸碰的介面。\n這個模型同時提供兩個平行的觀察角度：產品作為功能工具（任務、功能、互動）和產品作為資訊載體（內容、結構、呈現方式）。真實產品通常兩者皆是——一個後台系統既是功能工具，也需要清晰的資訊層級。",
  },
};


// ─── 01 Strategy ───

export const STRATEGY_IMAGE: Img = {
  url: "/assets/demos/design/UxFiveElementsArticle-g.png",
};

export const STRATEGY_SECTION: BodySection = {
  title: { en: "Strategy", "zh-TW": "策略層 Strategy" },
  content: {
    en: "**What it asks:** What do users need? What are the product's goals?\nStrategy is where you analyze product goals against user needs, find the product's positioning and highlight, and identify which needs you're actually going to satisfy. In a typical workflow, this maps to the Project Initiation phase in project management and the design research phase (convergence maps, SWOT, trend matrices) in design.\n**Deliverables:** market research, design research.\nStrategy sits closest to decision-making and project management. In the design workflow, it's usually the layer you don't linger on as a designer — but the one you need to understand, because every layer above it inherits whatever was decided here.",
    "zh-TW":
      "**問的問題：**使用者的需求是什麼？產品的目標又是什麼？\n策略層是分析產品目標與使用者需求的地方——找到產品定位和特色，確認實際要滿足哪些需求。在流程上對應到專案管理的 Project Initiation，以及設計階段的設計研究（收斂圖、SWOT、趨勢矩陣）。\n**交付物：**市場研究、設計研究。\n策略層最靠近決策面和專案管理前期任務。在設計流程裡，它通常不是設計師會花最多時間的一層——但你必須理解它，因為上面每一層都繼承了這裡做出的決定。",
  },
};

export const STRATEGY_CODE: CodeBlock = {
  codeType: "text",
  code: `Strategy Layer

  Asks        →  What do users need? What are the product goals?
  Maps to     →  Project Initiation · Design Research
  Delivers    →  Market research · Design research
  Owns        →  Product positioning · User need validation`,
};

// ─── 02 Scope ───

export const SCOPE_IMAGE: Img = {
  url: "/assets/demos/design/UxFiveElementsArticle-f.png",
};

export const SCOPE_SECTION: BodySection = {
  title: { en: "Scope", "zh-TW": "範圍層 Scope" },
  content: {
    en: "**What it asks:** What features do we build? What content do we provide?\nScope is where you generate requirements, define priorities, and set constraints. You pick out the main scenarios and tasks, map out the corresponding features, and use User Flow to analyze the interactions. This is also where you evaluate the scale and timeline — because you can't estimate effort without knowing what you're building.\nIn a typical workflow, this maps to the Project Planning phase (WBS, SoW, Risk Management, Schedule, RACI) and the second phase of design research (CJM and similar).\n**Deliverables:** Functional Map.\nScope has a deeper article in this series — it covers requirement generation, prioritization, and spec writing in detail.",
    "zh-TW":
      "**問的問題：**要做哪些功能？要提供什麼內容？\n範圍層是生成需求、定義優先序和限制的地方。從產品功能與服務層面分析，挑出幾個主要場景和任務、對應出產品功能，可以用 User Flow 輔助分析。這一層也是評估所需規模或時間的依據——因為不知道要做什麼，就沒辦法估工。\n在流程上對應到專案管理的 Project Planning（WBS、SoW、Risk Management、Schedule、RACI）和設計階段的第二階段研究（CJM 等）。\n**交付物：**Functional Map。\n範圍層在這個系列裡有更深入的文章——詳細介紹需求生成、優先序和規格書的寫法。",
  },
};

export const SCOPE_CODE: CodeBlock = {
  codeType: "text",
  code: `Scope Layer

  Asks        →  What features to build? What content to provide?
  Maps to     →  Project Planning · Design Research (CJM)
  Delivers    →  Functional Map
  Owns        →  Requirements · Priorities · Constraints`,
};

// ─── 03 Structure ───

export const STRUCTURE_IMAGE: Img = {
  url: "/assets/demos/design/UxFiveElementsArticle-e.png",
};

export const STRUCTURE_SECTION: BodySection = {
  title: { en: "Structure", "zh-TW": "結構層 Structure" },
  content: {
    en: "**What it asks:** How does the product interact with people? How do we connect pages? How do we organize information so users can find it?\nStructure defines the interaction design and information architecture. You draw out the product's IA to analyze each feature's hierarchy and classification, then verify that the architecture makes sense and that the interaction logic has no contradictions or inconsistencies.\nIn a typical workflow, this maps to the Project Execution phase in project management and the design execution phase.\n**Deliverables:** Information Architecture, User Flow, CRUD flow charts.\nStructure has its own article in this series covering interaction design principles and IA structure patterns (hierarchical, hub-and-spoke, organic, sequential).",
    "zh-TW":
      "**問的問題：**產品如何和人互動？頁面怎麼串接？如何組織資訊讓使用者容易找到？\n結構層定義交互設計和資訊架構。畫出產品的 IA 分析各功能的層級與分類，確認架構設定上有沒有問題、互動邏輯設計上有沒有矛盾或不一致的地方。\n在流程上對應到專案管理的 Project Execution 和設計階段的設計執行。\n**交付物：**Information Architecture、User Flow、CRUD flow chart。\n結構層在這個系列裡有專文，涵蓋交互設計五原則和 IA 結構模式（分層、輪輻、有機、順序）。",
  },
};

export const STRUCTURE_CODE: CodeBlock = {
  codeType: "text",
  code: `Structure Layer

  Asks        →  How does the product interact with users?
               →  How to organize info for findability?
  Maps to     →  Project Execution · Design Execution
  Delivers    →  Information Architecture · User Flow · CRUD
  Owns        →  Interaction logic · Content hierarchy`,
};

// ─── 04 Skeleton ───

export const SKELETON_IMAGE: Img = {
  url: "/assets/demos/design/UxFiveElementsArticle-d.png",
};

export const SKELETON_SECTION: BodySection = {
  title: { en: "Skeleton", "zh-TW": "框架層 Skeleton" },
  content: {
    en: "**What it asks:** How do we design an interface that's easy to understand and operate? How do we present information clearly?\nSkeleton is where structure becomes form. While Structure defines how content is organized and how interactions work, Skeleton defines the presentation and arrangement of those things on screen. It has three parts: interface design (what users can do), navigation design (where users can go), and information design (what users need to understand).\nIn a typical workflow, this maps to Project Execution and design execution.\n**Deliverables:** Wireframe, draft, prototype.\nThe wireframe is essentially the culmination of the Skeleton layer — it visualizes the user flow, IA, and functional map into a concrete layout.",
    "zh-TW":
      "**問的問題：**如何設計讓使用者易理解、好操作的介面？如何呈現清楚的資訊？\n框架層是結構變成形式的地方。結構層定義了內容的組織方式和交互區域，框架層則定義這些東西在畫面上的形式、呈現和排列。它由三個部分組成：界面設計（使用者能做什麼）、導航設計（使用者能去哪裡）、資訊設計（使用者需要理解什麼）。\n在流程上對應到 Project Execution 和設計執行。\n**交付物：**Wireframe、draft、prototype。\nWireframe 可以說是框架層的集大成——它把 user flow、IA、functional map 視覺化成具體的版面配置。",
  },
};

export const SKELETON_CODE: CodeBlock = {
  codeType: "text",
  code: `Skeleton Layer

  Asks        →  How to make the interface easy to understand?
               →  How to present info clearly?
  Maps to     →  Project Execution · Design Execution
  Delivers    →  Wireframe · Draft · Prototype
  Parts       →  Interface design · Navigation design · Info design`,
};

// ─── 05 Surface ───

export const SURFACE_IMAGE: Img = {
  url: "/assets/demos/design/UxFiveElementsArticle-c.png",
};

export const SURFACE_SECTION: BodySection = {
  title: { en: "Surface", "zh-TW": "表現層 Surface" },
  content: {
    en: "**What it asks:** What does the product look like? How does it feel?\nSurface is the sum of all the work and decisions from every layer below. It determines the product's visual appearance — layout, typography, color, and all the sensory design choices that give users cues about what they can do and how to interact. It should make things easier to understand and improve the user's ability to absorb what's on screen.\nIn a typical workflow, this maps to Project Execution and design execution.\n**Deliverables:** UI, prototype.\nHow to complete this layer involves all UI knowledge, tool proficiency, brand, and design system work. The details are covered in the dedicated UI articles in this series.",
    "zh-TW":
      "**問的問題：**產品視覺看起來如何？給人什麼感受？\n表現層是下面所有層級工作和決定的總和。它決定產品的外觀——版面、排版、配色，以及所有感官設計的選擇，讓使用者知道可以做什麼、如何互動。它應該讓事情更容易理解、提高使用者吸收畫面資訊的能力。\n在流程上對應到 Project Execution 和設計執行。\n**交付物：**UI、prototype。\n這一層的完成方式涉及所有 UI 知識、工具的應用、品牌和設計系統的設計，細節在這個系列的 UI 專文中介紹。",
  },
};

export const SURFACE_CODE: CodeBlock = {
  codeType: "text",
  code: `Surface Layer

  Asks        →  What does the product look like? How does it feel?
  Maps to     →  Project Execution · Design Execution
  Delivers    →  UI · Prototype
  Owns        →  Visual design · Brand expression · Sensory cues`,
};

// ─── Deliverable Map ───

export const DELIVERABLE_SECTION: BodySection = {
  title: { en: "Deliverable Map", "zh-TW": "交付物總覽" },
  content: {
    en: "Putting it all together — each layer has a clear set of deliverables that feed into the next. The key insight is that these aren't sequential gates you pass through once; in practice, you move between layers as requirements evolve. But knowing the full map helps you catch gaps early — if you're jumping straight from Strategy to Wireframe, you've probably skipped defining the scope and structure, and those gaps will surface as rework later.",
    "zh-TW":
      "把全部放在一起看——每一層都有一組明確的交付物，往上餵給下一層。關鍵的認知是：這些不是一次性通過的順序關卡；實務上你會在層與層之間來回移動。但知道完整的地圖幫你提早抓到缺口——如果你從策略直接跳到 wireframe，八成跳過了範圍和結構的定義，那些缺口後面會變成返工。",
  },
};

export const DELIVERABLE_CODE: CodeBlock = {
  codeType: "text",
  code: `
Layer          Deliverables                       Phase
──────────────────────────────────────────────────────────────
Strategy       Market research · Design research   Initiation
Scope          Functional Map                      Planning
Structure      IA · User Flow · CRUD               Execution
Skeleton       Wireframe · Draft · Prototype        Execution
Surface        UI · Prototype                       Execution`,
};

// ─── Functional vs Information ───

export const DUAL_LENS_SECTION: BodySection = {
  title: { en: "Functional Product vs Information Carrier", "zh-TW": "功能產品 vs 資訊載體" },
  content: {
    en: "The model splits every layer into two parallel tracks. On the left: the product as a functional tool — what tasks users can perform, what features exist, how interactions work. On the right: the product as an information carrier — what content users consume, how it's organized, how it's presented.\nIn Strategy, this means user needs (functional) versus content goals (information). In Structure, it's interaction design versus information architecture. In Surface, it's interface controls versus content layout.\nMost products live in both tracks simultaneously. Recognizing which track a decision belongs to helps you ask the right questions — a feature decision (\"should we add a filter?\") is different from a content decision (\"should we show the description here?\"), even though both affect the same screen.",
    "zh-TW":
      "這個模型把每一層都拆成兩條平行的軌道。左邊：產品作為功能工具——使用者能執行什麼任務、有哪些功能、互動怎麼運作。右邊：產品作為資訊載體——使用者消費什麼內容、如何組織、如何呈現。\n在策略層，這代表使用者需求（功能面）vs 內容目標（資訊面）。在結構層，是交互設計 vs 資訊架構。在表現層，是介面控制項 vs 內容排版。\n多數產品同時存在於兩條軌道上。辨認一個決策屬於哪條軌道，幫你問對問題——功能決策（「要不要加篩選器？」）跟內容決策（「這裡要不要顯示描述？」）是不同性質的，即使它們影響的是同一個畫面。",
  },
};

export const DUAL_LENS_CODE: CodeBlock = {
  codeType: "text",
  code: `
.             Functional Product          Information Carrier
.             (tasks & features)         (content & structure)
───────────────────────────────────────────────────────────────
Strategy      User needs                 Content goals
Scope         Feature specs              Content specs
Structure     Interaction design         Information architecture
Skeleton      Interface design           Navigation & info design
Surface       UI controls                Content presentation`,
};
