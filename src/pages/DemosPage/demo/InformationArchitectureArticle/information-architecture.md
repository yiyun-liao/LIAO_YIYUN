# Information Architecture

What information architecture is, why it matters, and how it integrates into every layer of the UX process.

---

This is the second article in a series I shared as a design leader. The previous article covered the Five Elements of UX — the five layers from strategy to surface. This one zooms into one of the most critical concepts within that framework: Information Architecture. If the five elements tell you what to deliver at each layer, IA tells you how to organize the information inside those deliverables so users can actually find what they need.

---

Two questions this article answers: What are information and information architecture? When do we need information architecture?

---

## 01 — Information

Information has two defining conditions: **useful** and **timely**. Put simply — data that is useful at this moment and can influence the user's behavior or thinking is what we call information.

From a product perspective, this could be the structure of a page, task entry points on a homepage or tool page, or page-level messages. When users need it, they should be able to find it on screen; when they don't, it should blend invisibly into the page. It can be as granular as deciding what a single page needs to show, how it's presented, and whether the information can be understood.

From a user perspective, **who the user is matters enormously**. Different types of users have different information needs and different behavior patterns. The same screen might need completely different information priorities depending on who's looking at it.

---

## 02 — Information Architecture

When all the information is in place, information architecture emerges naturally. Good IA considers what users need, when they need it, and plans the right timing for the right content to appear — while also thinking about how it appears and how it's presented. And IA has one brutally practical quality: **the best information architecture is invisible to the user**.

For website content, the goal is to turn complex, messy data into something simple and clear — to build a legible map so users can find what they need efficiently and satisfy their search intent.

In short, information architecture is:

1. The place where information, products, and services are organized.
2. These places have good **discoverability** and **comprehensibility**.

A spec document (ticket or requirement) covers all the information needed for that scope. Different phases of documentation cover different subsets of information, and together they gradually build up a complete and well-structured information architecture.

---

## 03 — Three Elements of IA

Information architecture lives at the intersection of three pillars — **Users**, **Content**, and **Context**. Each pillar asks different questions, and the overlap of all three is where IA decisions get made.

**Content** — What kind of information is available? What relevance does it have to the user?

**Context** — Where is the user seeking out the content? When, why, and how is the user engaging with the content?

**User** — Who is consuming the content? What value does it provide? What preexisting expectations do they have?

```
Information Architecture — Three Pillars

  Content     →  What information is available?
              →  What relevance to the user?
  Context     →  Where is the user seeking content?
              →  When, why, how do they engage?
  User        →  Who is consuming the content?
              →  What value and expectations?

  IA = intersection of all three
```

**Definition:** user-centered planning, organization, and construction of information environments that help users find data effectively and solve the problems they encounter.

- **Users** — audience, needs, behaviors, tasks, user experience.
- **Content** — format of content delivery, information types, items.
- **Context** — the background environment when building: goals, budget, technology, resources, culture.

**Goals:**

1. Help users find the information they need smoothly and solve their problems (effective use).
2. Help information providers deliver information according to service goals and business models, generating value.
3. Allow websites or apps to maintain quality as information changes, grows, or shrinks over time.

---

## 04 — IA in the Five Elements

The academic definition of Information Architecture goes deeper — the references below cover that. Here, the focus is on how IA integrates into a practical development process.

In reality, each phase of development produces progressively more detailed information needs, and the focus of each cycle varies. Every configuration needs its own information architecture. Here's a quick mapping:

**In Strategy — User Story**

Helps collect and define requirements. The template — "As a __(actor), I want to __(action), so that __(after effect)" — structures the who (add adjectives and context), the what (use verbs), and the why (the outcome or insight, in one sentence).

**In Scope — Functional Map**

An overview of the product's features and services. The functional map shows the full breadth of what the product offers, organized by hierarchy.

**In Skeleton — UI Flow**

The feedback and information users receive after each action is triggered. UI flow diagrams map out every behavior → response path, including error states and edge cases.

**In Skeleton / Surface — Wireframe & Prototype**

Clear information architecture. The wireframe specifies the IA for each state — what content appears, what fields exist, what error messages say, and how the layout adapts.

```
IA in the Five Elements

  Layer              IA Deliverable           Purpose
  ─────────────────────────────────────────────────────────
  Strategy           User Story               Collect & define requirements
  Scope              Functional Map           Product & feature overview
  Skeleton           UI Flow                  Action → feedback mapping
  Skeleton/Surface   Wireframe · Prototype    State-level IA specification
```

---

*References:*
- 【Day 02】設計流程（一）：IA 資訊架構
- IA 資訊架構 (Information Architecture) 是什麼？
- [How to Create Information Architecture for Web Design](https://xd.adobe.com/ideas/process/information-architecture/information-ux-architect/)
