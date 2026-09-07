# Next.js 16 + MUI 9 Boilerplate

A production-minded starter for projects that need:

- Next.js 16 App Router
- TypeScript
- Material UI 9 + Emotion SSR integration
- Feature-based architecture
- Axios
- Zustand
- React Hook Form + Zod
- ESLint flat config + Prettier

The starter intentionally stays small. It does **not** force authentication, TanStack Query,
internationalization, testing libraries, analytics, or a deployment provider before the application
actually needs them.

## Requirements

- Node.js 20.9+

## Install

```bash
npm install
npm run dev
```

or:

```bash
yarn
yarn dev
```

Copy `.env.example` to `.env.local` when you need environment overrides.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

`next lint` is intentionally not used; Next.js 16 removed that command. ESLint runs directly.

## Folder structure

```text
src/
├── app/                    # Routes, layouts, route handlers, route-level boundaries
│   └── api/                # Next.js route handlers only
├── components/
│   ├── common/             # Cross-feature composed components
│   └── ui/                 # Small reusable UI primitives (create when needed)
├── config/                 # Runtime/application configuration
├── constants/              # Truly global constants
├── features/               # Business/domain modules
│   └── starter-demo/
│       ├── api/
│       ├── components/
│       ├── schemas/
│       ├── store/
│       └── types/
├── providers/              # App-wide React providers
├── services/               # Infrastructure shared by features
│   └── http/
├── theme/                  # MUI theme tokens and component overrides
├── types/                  # Only cross-feature types (create when needed)
└── utils/                  # Only cross-feature utilities (create when needed)
```

## Architecture rules

### 1. Keep `app/` thin

`app/` owns routing. Business logic belongs in a feature. A page should mostly compose feature
components and server-side data requirements.

### 2. Server Components are the default

Do not add `'use client'` to a page/layout just because one child is interactive. Put the client
boundary as deep as possible. The included home page is a Server Component and only
`StarterDemo` is a Client Component.

### 3. Keep feature code together

Instead of growing global `components/`, `hooks/`, `api/` and `types/` folders indefinitely, keep
code that belongs to one domain inside that feature:

```text
features/auth/
├── api/
├── components/
├── hooks/
├── schemas/
├── store/
├── types/
└── utils/
```

Create only the folders the feature actually needs.

### 4. Feature boundaries

A feature may import from shared infrastructure (`components`, `services`, `config`, `theme`, etc.).
Avoid importing private implementation details from another feature. If cross-feature sharing becomes
necessary, expose a deliberate public entry point or promote the shared abstraction.

### 5. Zustand placement

Feature-local state stays in `features/<feature>/store`. Create a root `src/store` only for state that
is genuinely global across unrelated features.

### 6. Axios placement

`src/services/http/client.ts` owns the common browser-oriented Axios instance. Feature-specific
endpoints belong in `features/<feature>/api`, not in a giant global service file. For data fetched
directly in Server Components, prefer Next.js `fetch` when you need its caching/revalidation semantics.

The starter keeps Axios responses intact. Each feature decides what response payload it needs.
Add authentication/retry/error-reporting interceptors in the shared client only when they are truly
cross-cutting.

### 7. Forms

Put reusable validation schemas in the owning feature's `schemas/` folder. Infer TypeScript types from
Zod instead of duplicating interfaces when the schema is the source of truth.

### 8. MUI + Next.js 16

`AppRouterCacheProvider` is configured in the root layout for Emotion styles during App Router
streaming. The included `AppLink` Client Component is the safe wrapper to pass Next.js Link to MUI's
`component` prop on Next.js 16.

### 9. Environment variables

Public variables are validated in `src/config/env.ts`. Never place secrets in variables prefixed with
`NEXT_PUBLIC_`.

For server-only secrets, create a separate server-only env module and import `server-only` there.

## Adding a new feature

Example:

```text
src/features/auth/
├── api/
│   └── login.ts
├── components/
│   └── LoginForm.tsx
├── schemas/
│   └── loginSchema.ts
├── store/
│   └── useAuthStore.ts
└── types/
    └── index.ts
```

Then let `src/app/(auth)/login/page.tsx` compose `LoginForm` instead of moving login business logic
into the route itself.

## Why TypeScript 6 instead of 7?

This boilerplate pins TypeScript 6.0.3 because the current `typescript-eslint` support range is below
TypeScript 6.1. This keeps the Next.js ESLint TypeScript rules inside their officially supported range.
Upgrade after the lint toolchain officially supports TypeScript 7.

## Disposable demo

`src/features/starter-demo` exists only to prove that MUI, RHF/Zod, Zustand and Axios are wired
correctly. Delete that feature and replace the home page when starting a real application.
