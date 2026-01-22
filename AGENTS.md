# AGENTS.md

## Commands
- `pnpm dev` - Start dev server (runs Prisma generate + Next.js with Turbo)
- `pnpm build` - Build for production (Velite + Prisma + Next.js)
- `pnpm lint` - ESLint on src/
- `pnpm format` - Prettier formatting

## Architecture
- **Next.js 16 App Router** with React 19, TypeScript, Tailwind CSS
- **Database**: PostgreSQL via Prisma (`prisma/schema.prisma`)
- **Auth**: Session-based with OAuth (GitHub via Arctic)
- **Payments**: Stripe integration
- **Email**: React Email + Resend
- **Structure**: `src/app/` (routes), `src/components/`, `src/lib/server/` & `src/lib/client/`, `src/config/`, `src/hooks/`

## Code Style (from .windsurfrules)
- Use TypeScript with interfaces (not types or enums)
- Functional components only; avoid classes
- Named exports for components
- Lowercase-dash directories (e.g., `components/auth-wizard`)
- Descriptive variable names with auxiliary verbs (`isLoading`, `hasError`)
- Use Shadcn UI + Radix + Tailwind; mobile-first responsive design
- Prefer React Server Components; minimize `use client`, `useEffect`, `setState`
- Wrap client components in Suspense; use dynamic imports for non-critical code
