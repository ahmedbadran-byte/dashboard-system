# Kleen Management System (Configuration-Ready Foundation)

This project is a bilingual (English/Arabic) internal management platform foundation for Kleen.

## Current foundation capabilities

- Decision Center for global outputs (alerts, insights, recommendations)
- Dynamic department navigation and reusable department template with 4 tabs:
  - Dashboard
  - KPIs
  - Reports
  - Structure
- Admin Panel modules for:
  - Department Management
  - Reports Configuration
  - KPI Configuration
  - Decision Rules
  - Language & Translations
  - General Settings
- User language preference foundation (English/Arabic + RTL/LTR handling)
- Prisma schema and seed prepared for dynamic departments and historical report/KPI records

## Run

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

## Database

```bash
npm run prisma:migrate -- --name init_management_foundation
npm run prisma:seed
```
