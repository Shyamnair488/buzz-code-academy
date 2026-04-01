# Buzz Code Academy

Modern coding academy landing page built with React, TypeScript, and Tailwind CSS.

Maintained by SN Group.

## Overview

Buzz Code Academy is a responsive frontend project designed to showcase online programming courses, pricing plans, testimonials, and premium offerings in a clean and conversion-focused layout.

## Features

- Responsive design for mobile, tablet, and desktop
- Reusable UI components powered by shadcn/ui
- Structured page sections (hero, course grid, pricing, testimonials, footer)
- Fast development workflow with Vite
- Type-safe codebase with TypeScript

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/Shyamnair488/buzz-code-academy.git
cd buzz-code-academy
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will run locally on the port shown in your terminal (default Vite port is 5173 unless configured otherwise).

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run build:dev` - Build using development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Project Structure

```text
src/
	components/       Reusable page and UI components
	hooks/            Custom React hooks
	lib/              Utility helpers
	pages/            Route-level page components
	assets/           Static assets used by the app
```

## Deployment

You can deploy this app to any static hosting provider.

Recommended options:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Build command:

```bash
npm run build
```

Publish the generated `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run lint and build checks
5. Open a pull request

## License

This project is provided for educational and portfolio use. Add a formal license file if you plan to distribute it publicly.
