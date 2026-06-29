---
name: react-vibe-kickoff
description: |
  啟動一個新的 React 專案、要用 vibe coding（讓 AI 寫程式）方式開發時的環境建置與規範流程。
  使用者只要提到「想開新的 React 專案」、「kick off React」、「初始化 React」、「React 新專案環境建置」、
  「要用 vibe coding 寫 React」、「React 專案要怎麼開始」這類情境，就要使用這個 skill，
  即使他沒有明確說「啟動專案」。這個 skill 會先了解專案類型（後台、SaaS、landing page、工具站、電商等），
  再根據類型推薦合適的技術棧組合，並提供分階段的可複製 prompt 範本（環境建置、規範 prompt、開場 prompt），
  讓使用者貼到 Cursor / Claude Code / Windsurf 等 AI coding 工具裡，
  避免 AI 寫程式時亂裝套件、風格亂跳、覆蓋舊程式碼。
---

# React Vibe Coding Kickoff

協助使用者用 vibe coding（讓 AI 寫程式）方式啟動一個新的 React 專案。重點是在開始寫功能前，先依**專案類型**選對技術棧，並把規範定好，否則 AI 會亂裝套件、風格亂跳。

## 整體流程

依序帶使用者走完：

1. **問清楚專案類型** → 推薦技術棧
2. **階段 1**：使用者自己跑 Vite 初始化
3. **階段 2**：給 AI 的「環境建置 prompt」（依推薦技術棧客製）
4. **階段 3**：給 AI 的「規範 prompt」（最重要，存成檔案讓 AI 永遠記得）
5. **階段 4**：開始寫功能時的「開場 prompt」

每個階段都直接給使用者**可以複製貼上**的 prompt，不要只描述概念。

---

## 第 0 步：先問專案類型，再推薦技術棧

不要一上來就丟一整套技術棧。先問使用者要做什麼類型的專案，再給對應建議。

問法可以是：「你這個專案比較像哪種？後台 / SaaS 產品 / landing page / 個人工具 / 電商 / 其他？大概會有 API 嗎？需要登入嗎？」

依專案類型推薦：

### 後台 / Admin Dashboard
- **UI 庫**：Ant Design 或 Mantine（表格、表單元件最強）
- **樣式**：搭配該庫的樣式系統，Tailwind 可選
- **狀態**：Zustand（client）+ React Query（server，幾乎一定有 API）
- **路由**：React Router v6
- **表單**：React Hook Form + Zod
- **圖表**：Recharts 或 ECharts
- **必備**：權限控制、表格分頁/排序/篩選

### SaaS 產品 / 一般 Web App
- **UI 庫**：shadcn/ui（最有彈性、AI 最熟）
- **樣式**：Tailwind CSS
- **Icon**：lucide-react
- **狀態**：Zustand + React Query
- **路由**：React Router v6 或 TanStack Router
- **表單**：React Hook Form + Zod

### Landing Page / 行銷網站
- **建議改用 Next.js**（SEO、SSR 友善），不要用純 Vite
- **UI**：shadcn/ui + Tailwind + Framer Motion（動畫）
- **不需要**：複雜狀態管理、路由（Next.js 自帶）
- **重點**：圖片優化、Lighthouse 分數、SEO meta

### 個人工具站 / 原型
- **UI 庫**：daisyUI 或 shadcn/ui（看想多快做完）
- **狀態**：useState 就好，不要過度設計
- **不需要**：Husky、Commitlint 這些團隊規範
- **可選**：localStorage 存資料就好，不一定要後端

### 電商 / 內容站
- **建議**：Next.js + shadcn/ui
- **狀態**：Zustand（購物車）+ React Query（商品資料）
- **必備**：圖片優化、SEO、支付串接

### 不確定 / 不想想那麼多
預設給 **SaaS 通用組合**：Vite + React + TS + Tailwind + shadcn/ui + lucide-react + React Router + Zustand + React Query + RHF + Zod。

---

## 通用：程式碼品質工具

無論哪種專案，這些都建議裝（除非使用者說「我自己玩玩不需要」）：
- ESLint + Prettier + EditorConfig
- Husky + lint-staged（commit 前自動檢查）
- Commitlint（規範 commit message）

個人原型可以省略 Husky / Commitlint。

---

## 階段 1：Vite 初始化指令

確認技術棧後，給使用者這段，請他自己在終端機跑：

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

如果是 landing page / 電商建議用 Next.js 的話，改成：

```bash
npx create-next-app@latest my-app --typescript --tailwind --app
cd my-app
```

提醒：用 TypeScript 不是負擔，反而會讓 AI 寫得更準（型別會幫它自我檢查）。

---

## 階段 2：環境建置 Prompt

依使用者選定的技術棧，產生對應的 prompt 給他**整段複製**貼到 Cursor / Claude Code / Windsurf。

下面是 **SaaS / 通用組合**的範例，其他類型按相同結構替換套件即可：

````
我剛用 Vite + React + TypeScript 初始化了一個專案，
請幫我建置以下開發環境，並說明每一步在做什麼：

【技術棧】
- 樣式：Tailwind CSS
- UI 元件庫：shadcn/ui
- Icon：lucide-react
- 路由：React Router v6
- 狀態管理：Zustand（client state）+ React Query（server state）
- 表單：React Hook Form + Zod 驗證
- HTTP client：axios

【程式碼品質】
- ESLint + Prettier（互不衝突的設定）
- EditorConfig
- Husky + lint-staged（commit 前自動檢查）
- Commitlint（規範 commit message）

【專案結構】
請幫我建立以下資料夾結構並說明用途：
src/
  components/
    ui/         # shadcn 元件放這
  pages/        # 頁面
  hooks/        # 自訂 hooks
  lib/          # 工具函式（cn、formatters 等）
  api/          # API 請求
  types/        # TypeScript 型別
  store/        # Zustand store

【執行順序】
請按以下順序進行，每一步停下來讓我確認後再繼續：
1. 安裝並設定 Tailwind CSS（跟 Vite 整合）
2. 初始化 shadcn/ui（npx shadcn@latest init）
3. 安裝 lucide-react
4. 安裝路由、狀態、表單相關套件
5. 設定 ESLint + Prettier
6. 設定 Husky + lint-staged + Commitlint
7. 建立資料夾結構

不要一次全部裝完，也不要自己加我沒提到的套件。
````

**對其他類型的客製重點**：
- 後台類：把 shadcn 換成 Ant Design 或 Mantine，加上 Recharts
- Landing page：移除路由、狀態管理那塊；改用 Next.js 的話初始化指令也要改
- 原型：把 Husky / Commitlint / Zustand 拿掉，留 ESLint + Prettier 就好

---

## 階段 3：規範 Prompt（最重要）

很多人會跳過這步，結果 AI 寫出來的程式碼風格亂跳。請使用者把下面這段**存成專案根目錄的檔案**，AI 工具會自動讀：

- 用 Cursor → 存成 `.cursorrules`
- 用 Claude Code → 存成 `CLAUDE.md`
- 用 Windsurf → 存成 `.windsurfrules`
- 通用 → 存成 `AGENTS.md`

下面同樣是 **shadcn/ui + Tailwind + lucide** 的範例，使用者用其他組合時要替換對應段落：

````markdown
# 專案規範

在這個專案裡，請遵守以下規範：

## 元件
- 一律用 function component + hooks
- Props 一定要定義 TypeScript interface
- 檔名用 PascalCase（如 UserCard.tsx）
- 一個檔案只 export 一個主要元件

## shadcn/ui
- 需要新元件時，用 `npx shadcn@latest add [元件名]` 安裝
- 不要自己重刻 shadcn 已有的元件（Button、Input、Dialog 等）
- shadcn 元件放在 src/components/ui/，自訂元件放在 src/components/
- 修改 shadcn 元件時，直接改原始碼即可（這是 shadcn 的設計）

## 樣式
- 只用 Tailwind class，不寫 inline style，不開新的 .css 檔
- 顏色用 shadcn 的 design token（bg-primary、text-muted-foreground 等），
  不要寫死 bg-[#xxx] 或 text-blue-500
- 多個 class 條件組合時，用 cn() 工具函式（src/lib/utils.ts）
- RWD 用 Tailwind 的 sm: md: lg: 前綴

## Icon
- 一律用 lucide-react，不要用 emoji 當 icon、也不要找其他 icon 套件
- import 方式：import { Search, User } from 'lucide-react'
- icon 大小用 className 控制（如 className="w-4 h-4"）

## 狀態
- 能用 useState 解決就不要用 Zustand
- Server state 一律走 React Query，不要塞進 Zustand
- 不要把 API 資料塞進全域 state

## 其他
- 寫程式前先告訴我你的計畫
- 改動超過 3 個檔案時，先列清單給我確認
- 不要自己安裝沒討論過的套件
- 寫完功能後，告訴我有沒有破壞既有的東西
````

**換成其他技術棧時的調整方向**：
- 用 Ant Design / Mantine：把「shadcn/ui」段改成該庫的元件使用規則（例如「優先用 Form.Item，不要自己組」）
- 用 Chakra：拿掉 Tailwind 那段，改成 style prop / theme 規則
- 沒用 Zustand / React Query：那兩個段落也拿掉

---

## 階段 4：開場 Prompt（每個新功能都用）

當使用者要開始寫第一個（或下一個）功能時，給他這個範本：

````
我要做 [功能描述]，使用者流程是 [...]，
請先：
1. 列出需要哪些頁面/元件
2. 畫出資料流（state 在哪、API 怎麼打）
3. 估計需要改哪些檔案

確認後我們再開始寫。
````

---

## 實戰建議（給使用者的提醒）

呈現完四個階段的 prompt 後，補上這幾點實戰心法：

- **小步快跑**：一次只做一個功能，做完 commit，再做下一個。AI 一次寫太多東西會失控。
- **讓 AI 看得到全貌**：用 Cursor、Claude Code、Windsurf 這類能讀整個專案的工具，比單純複製貼上效果好很多。
- **TypeScript 嚴格模式打開**：`tsconfig.json` 裡 `"strict": true`，AI 亂寫會被型別系統擋下來。
- **規範 prompt 要持續更新**：踩到 AI 的雷之後，把該避免的事補進規範檔，下次它就不會再犯。

---

## 互動原則

- **先問再給**：技術棧不是預設值，要先問專案類型再推薦。但如果使用者明確說了類型或技術棧，就跳過這步直接照他的需求生 prompt。
- **直接給可貼的 prompt**：不要只說「你需要設定 ESLint」，要直接給 prompt。使用者要的是能複製的東西。
- **使用者想換套件就換**：使用者可能想換 axios → fetch、Zustand → Jotai、shadcn → Mantine。換掉指定的那項，其他保留，並更新對應的規範 prompt 段落。
- **遇到「我已經有專案了，只想加規範」時**：跳過階段 1、2，先確認他現在用什麼技術棧，再給對應的階段 3 規範 prompt。
- **不要對話裡解釋每個套件做什麼，除非使用者問**：使用者要的是快速 kick off，不是教學。
