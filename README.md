# Student Dashboard

A student registry and dashboard application built with Next.js, Supabase, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project

### Installation

1. Clone the repository

```bash
git clone <repo-url>
cd student-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Copy the example env file and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

You can find your project URL and anon key in your [Supabase project's API settings](https://supabase.com/dashboard/project/_/settings/api).

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Environment Variables

| Variable                               | Description                   |
| -------------------------------------- | ----------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`             | Your Supabase project URL     |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Your Supabase anon/public key |

## Architectural Decisions

### Component Structure

I tried to follow React's philosophy of modularity as closely as I could — breaking the UI into small, focused components with clear responsibilities rather than lumping everything into a few large files. Each component does one thing and does it well.

### Semantic HTML over Div Soup

A conscious effort was made to lean on semantic HTML elements (`<main>`, `<section>`, `<article>`, `<header>`, `<nav>`, etc.) rather than wrapping everything in generic `<div>` tags. This keeps the markup meaningful, improves accessibility, and makes the component tree easier to reason about.

### Layout

Coming up with the layout was one of the more challenging parts of the project. The goal was a clean, readable interface that surfaced the most important student information without feeling cluttered. Several iterations were explored before landing on the current structure.

### Animations

The animations were another challenging aspect — getting the timing and easing to feel natural rather than mechanical took some trial and error. The aim was subtle motion that guides attention without being distracting.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Supabase](https://supabase.com)
- [Tailwind CSS](https://tailwindcss.com)
