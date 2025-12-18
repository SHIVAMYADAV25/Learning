# Next.js Layouts - Complete Guide

## 1️⃣ What is layout in Next.js?

**Definition**  
A layout is a special React Server Component that:  
- Wraps pages and nested routes  
- Persists across navigation  
- Controls shared UI and metadata  

📌 **In short:**  
`Layout = persistent UI shell for routes`

---

## 2️⃣ Why Next.js Introduced layout (Problem it Solves)

**❌ Old way (React / Pages Router)**  
function Page() {
return (
<>
<Navbar />
<Sidebar />
<Content />
</>
)
}

text

**Problems:**  
- Navbar re-renders on every page change  
- No native nested layouts  
- No streaming or partial rendering  
- No server-first mindset  

**✅ New way (App Router + Layout)**  
export default function Layout({ children }) {
return (
<>
<Navbar />
{children}
</>
)
}

text

**Benefits:**  
- Navbar persists  
- Faster navigation  
- Better UX  
- Cleaner architecture  

---

## 3️⃣ File-Based Layout System (Core Concept)

**Folder Structure Example**  
app/
├── layout.tsx ← Root Layout (mandatory)
├── page.tsx
├── dashboard/
│ ├── layout.tsx ← Nested layout
│ ├── page.tsx
│ └── settings/
│ └── page.tsx

text

**How wrapping works:**  
Root Layout
└── Dashboard Layout
└── Dashboard Page
└── Settings Page

text

📌 **Layouts wrap pages automatically based on folder structure**

---

## 4️⃣ Root Layout (Mandatory)

**`app/layout.tsx`**  
export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
<html lang="en">
<body>
{children}
</body>
</html>
)
}

text

🔥 **Interview Important:**  
- Root layout must return `<html>` and `<body>`  
- Only place where HTML structure is defined  
- Runs on server  

---

## 5️⃣ Layout vs Page (Critical Difference)

| Feature | `layout.tsx` | `page.tsx` |
|---------|-------------|------------|
| **Persistent** | ✅ Yes | ❌ No |
| **Re-renders on navigation** | ❌ No | ✅ Yes |
| **Can wrap children** | ✅ | ❌ |
| **Supports metadata** | ✅ | ✅ |
| **Server Component by default** | ✅ | ✅ |

📌 **Key Interview Line:**  
> "Layouts persist across route transitions, pages do not."

---

## 6️⃣ Layout Persistence (Most Important Concept)

**What does "persistent" mean?**  
If you navigate:  
`/dashboard` → `/dashboard/settings`

- ❌ Layout is **NOT** re-rendered  
- ❌ Navbar does **NOT** unmount  
- ✅ Only `page.tsx` changes  

📌 **This gives:**  
- Faster navigation  
- State preservation  
- Better UX  

---

## 7️⃣ Layout = Server Component (By Default)

**Default Behavior**  
// layout.tsx
export default function Layout({ children }) {
return <>{children}</>
}

text

- Runs on server  
- Can access DB, cookies, headers  
- Smaller JS bundle  

**❗ If you add:**  
"use client";

text

Now:  
- Layout becomes Client Component  
- Cannot access server-only APIs  
- Increases JS bundle size  

📌 **Best practice:**  
> 👉 Keep layouts server components whenever possible

---

## 8️⃣ Metadata in Layout (SEO GOLD)

**Static Metadata**  
export const metadata = {
title: "Dashboard",
description: "User dashboard",
};

text

**Dynamic Metadata**  
export async function generateMetadata() {
return {
title: "Dynamic Title",
};
}

text

📌 **Metadata in layouts:**  
- Applies to all child routes  
- Automatically merged with page metadata  

---

## 9️⃣ Nested Layouts (Advanced Routing)

**Example:**  
`/dashboard`  
`/dashboard/settings`

// app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
return (
<section>
<Sidebar />
{children}
</section>
);
}

text

📌 **Sidebar persists only for `/dashboard/*`**

**🔥 Interview Question:**  
*How does Next.js decide which layout applies?*  

**Answer:**  
Next.js walks the folder tree from root → leaf and applies every `layout.tsx` it finds.

---

## 🔟 Layout vs Template (Very Tricky Interview Topic)

| Feature | Layout | Template |
|---------|--------|----------|
| **Persistent** | ✅ | ❌ Not persistent |
| **Preserves state** | ✅ | ❌ State resets |
| **Faster navigation** | ✅ | ❌ |
| **Default choice** | ✅ | Rare use |

**Template example:**  
export default function Template({ children }) {
return <>{children}</>
}

text

📌 **Use `template.tsx` when:**  
- You want fresh render on every navigation  
- Example: page animations, reset state  

---

## 1️⃣1️⃣ Data Fetching in Layout

**Server-side fetching**  
const user = await db.user.findMany();

text

**Allowed because:**  
- Layout = Server Component  
- Runs before page renders  

📌 **Ideal for:**  
- Auth checks  
- User info  
- Navigation data  

---

## 1️⃣2️⃣ Auth Pattern (Real Production Use)

export default async function ProtectedLayout({ children }) {
const session = await getSession();

if (!session) redirect("/login");

return <>{children}</>;
}

text

📌 **This protects all routes inside folder**

---

## 1️⃣3️⃣ Layout Rendering Order (Interview Favorite)

**Rendering order:**  
Root Layout
→ Nested Layout
→ Page

text

**Streaming:**  
- Layouts render first  
- Pages stream later  
- Enables partial loading  

---

## 1️⃣4️⃣ Layout vs React Components (Key Difference)

| Feature | React Component | Next Layout |
|---------|-----------------|-------------|
| **Wrapping** | Manual | Automatic |
| **Execution** | Client-side | Server-first |
| **Persistence** | No | Persistent |
| **Routing** | No awareness | Route-aware |

📌 **One-liner for interview:**  
> "Layout is a framework-level construct, not just a React component."

---

## 1️⃣5️⃣ Common Mistakes (Interview Red Flags)

❌ Putting `useEffect` in layout  
❌ Making root layout client component  
❌ Fetching page-specific data in layout  
❌ Using layout for animations (use template)  

---

## 🧠 Final Mental Model

Layout = Shell
Page = Content
Template = Reset Shell

text

---

## 🔑 Interview Summary (Memorize This)

> **"In Next.js App Router, `layout.tsx` is a persistent server component that wraps routes based on folder structure, preserves UI across navigations, supports nested layouts, handles metadata, and enables performant SSR with streaming."**