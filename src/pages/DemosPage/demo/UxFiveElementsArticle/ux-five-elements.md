# The Five Elements of UX

A practical guide to the five-layer UX model — from strategy to surface — and how each layer maps to real deliverables in a product team.

---

This is knowledge I shared when I was working as a design leader. The boundaries between PM, designer, and engineer responsibilities have no absolute standard — a complete product thinking framework isn't just something designers should understand, it's a shared language for those conversations. More importantly, it's a checklist to make sure nothing falls through the cracks between roles.

---

"User Experience" is not just the UX designer's responsibility. Every decision in the design process — from goal-setting to visual implementation — affects the user's experience: how information is delivered, whether behavior feels consistent, whether the interface flows naturally. Different companies and teams define the same job title differently. So the real question isn't "what is UX?" — it's "which layers am I responsible for completing?"

---

## The Five Layers

The model describes UX as five stacked layers, each building on the one below. At the bottom sits Strategy — the most abstract, defining why the product exists. At the top sits Surface — the most concrete, defining what the user actually sees. In between, Scope, Structure, and Skeleton progressively turn abstract goals into tangible interface.

The model also offers two parallel lenses: the product as a functional tool (tasks, features, interaction) and the product as an information carrier (content, structure, presentation). Most real products are both — a dashboard is a functional tool that also needs clear information hierarchy.

```
┌─────────────────────────────────────────────────────┐
│                    Surface                          │  ← Visual design, UI
├─────────────────────────────────────────────────────┤
│                    Skeleton                         │  ← Wireframe, layout
├─────────────────────────────────────────────────────┤
│                    Structure                        │  ← IA, interaction design
├─────────────────────────────────────────────────────┤
│                    Scope                            │  ← Features, content spec
├─────────────────────────────────────────────────────┤
│                    Strategy                         │  ← User needs, product goals
└─────────────────────────────────────────────────────┘

  abstract ──────────────────────────────────── concrete
  (why)                                         (what)
```

---

## 01 — Strategy

**What it asks:** What do users need? What are the product's goals?

Strategy is where you weigh product goals against user needs, find the product's positioning and differentiator, and decide which needs you're actually going to satisfy. In a typical workflow, this maps to the Project Initiation phase in project management and the design research phase (convergence maps, SWOT, trend matrices) in design.

**Deliverables:** market research, design research.

Strategy sits closest to decision-making and project management. In the design workflow, it's usually the layer you don't linger on as a designer — but the one you need to understand, because every layer above it inherits whatever was decided here.

```
Strategy Layer

  Asks        →  What do users need? What are the product goals?
  Maps to     →  Project Initiation · Design Research
  Delivers    →  Market research · Design research
  Owns        →  Product positioning · User need validation
```

---

## 02 — Scope

**What it asks:** What features do we build? What content do we provide?

Scope is where you generate requirements, define priorities, and set constraints. You identify the main scenarios and tasks, map out the corresponding features, and use User Flow to analyze the interactions. This is also where you evaluate scale and timeline — because you can't estimate effort without knowing what you're building.

In a typical workflow, this maps to the Project Planning phase (WBS, SoW, Risk Management, Schedule, RACI) and the second phase of design research (CJM and similar).

**Deliverables:** Functional Map.

Scope has a deeper article in this series — it covers requirement generation, prioritization, and spec writing in detail.

```
Scope Layer

  Asks        →  What features to build? What content to provide?
  Maps to     →  Project Planning · Design Research (CJM)
  Delivers    →  Functional Map
  Owns        →  Requirements · Priorities · Constraints
```

---

## 03 — Structure

**What it asks:** How does the product interact with people? How do we connect pages? How do we organize information so users can find it?

Structure defines the interaction design and information architecture. You draw out the product's IA to analyze each feature's hierarchy and classification, then verify that the architecture makes sense and that the interaction logic has no contradictions or inconsistencies.

In a typical workflow, this maps to the Project Execution phase in project management and the design execution phase.

**Deliverables:** Information Architecture, User Flow, CRUD flow charts.

Structure has its own article in this series covering interaction design principles and IA structure patterns (hierarchical, hub-and-spoke, organic, sequential).

```
Structure Layer

  Asks        →  How does the product interact with users?
               →  How to organize info for findability?
  Maps to     →  Project Execution · Design Execution
  Delivers    →  Information Architecture · User Flow · CRUD
  Owns        →  Interaction logic · Content hierarchy
```

---

## 04 — Skeleton

**What it asks:** How do we design an interface that's easy to understand and operate? How do we present information clearly?

Skeleton is where structure becomes form. While Structure defines how content is organized and how interactions work, Skeleton defines the presentation and arrangement of those things on screen. It has three parts: interface design (what users can do), navigation design (where users can go), and information design (what users need to understand).

In a typical workflow, this maps to Project Execution and design execution.

**Deliverables:** Wireframe, draft, prototype.

The wireframe is essentially the culmination of the Skeleton layer — it visualizes the user flow, IA, and functional map into a concrete layout.

```
Skeleton Layer

  Asks        →  How to make the interface easy to understand?
               →  How to present info clearly?
  Maps to     →  Project Execution · Design Execution
  Delivers    →  Wireframe · Draft · Prototype
  Parts       →  Interface design · Navigation design · Info design
```

---

## 05 — Surface

**What it asks:** What does the product look like? How does it feel?

Surface is the sum of all the work and decisions from every layer below. It determines the product's visual appearance — layout, typography, color, and all the sensory design choices that give users cues about what they can do and how to interact. It should make things easier to understand and help users absorb what's on screen.

In a typical workflow, this maps to Project Execution and design execution.

**Deliverables:** UI, prototype.

Completing this layer draws on UI knowledge, tool proficiency, brand identity, and design system work. The details are covered in the dedicated UI articles in this series.

```
Surface Layer

  Asks        →  What does the product look like? How does it feel?
  Maps to     →  Project Execution · Design Execution
  Delivers    →  UI · Prototype
  Owns        →  Visual design · Brand expression · Sensory cues
```

---

## Deliverable Map

Putting it all together — each layer has a clear set of deliverables that feed into the next. The key insight is that these aren't sequential gates you pass through once; in practice, you move between layers as requirements evolve. But knowing the full map helps you catch gaps early — if you're jumping straight from Strategy to Wireframe, you've probably skipped defining the scope and structure, and those gaps will surface as rework later.

```
Layer          Deliverables                       Phase
──────────────────────────────────────────────────────────────
Strategy       Market research · Design research   Initiation
Scope          Functional Map                      Planning
Structure      IA · User Flow · CRUD               Execution
Skeleton       Wireframe · Draft · Prototype        Execution
Surface        UI · Prototype                       Execution
```

---

## Functional Product vs Information Carrier

The model splits every layer into two parallel tracks. On the left: the product as a functional tool — what tasks users can perform, what features exist, how interactions work. On the right: the product as an information carrier — what content users consume, how it's organized, how it's presented.

In Strategy, this means user needs (functional) versus content goals (information). In Structure, it's interaction design versus information architecture. In Surface, it's interface controls versus content layout.

Most products live in both tracks simultaneously. Recognizing which track a decision belongs to helps you ask the right questions — a feature decision ("should we add a filter?") is different from a content decision ("should we show the description here?"), even though both affect the same screen.

```
              Functional Product          Information Carrier
              (tasks & features)         (content & structure)
───────────────────────────────────────────────────────────────
Strategy      User needs                 Content goals
Scope         Feature specs              Content specs
Structure     Interaction design         Information architecture
Skeleton      Interface design           Navigation & info design
Surface       UI controls                Content presentation
```

---

*References:*
- [The Elements of User Experience — Jesse James Garrett](https://ia.net/topics/the-five-elements-of-user-experience)
