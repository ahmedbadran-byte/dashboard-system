# Kleen Executive Dashboard (Foundation)

First functional foundation for an internal executive dashboard web app built with:

- Next.js + React + TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- Recharts

## Getting Started

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

## Database setup

```bash
npm run prisma:migrate -- --name init
npm run prisma:seed
```

## Routes

- `/dashboard`
- `/reports`
- `/kpis`
- `/financial-information`
- `/settings`
- `/login`
