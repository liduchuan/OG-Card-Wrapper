# NextJS Template

A modern, production-ready Next.js template with comprehensive testing, component development, and build tooling.

## ✨ Features

- **⚡ Next.js 15.2.0** - Latest Next.js with Turbopack for ultra-fast development
- **🎨 Tailwind CSS 4** - Latest Tailwind CSS for modern styling
- **📚 Storybook** - Component development and documentation
- **🔧 TypeScript** - Full TypeScript support with strict configuration
- **🧪 Testing Suite** - Unit tests with Vitest and E2E tests with Playwright
- **🚀 Modern React 19** - Latest React with concurrent features
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Component Development**: Storybook 8.6.2
- **Package Manager**: pnpm (recommended)

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nextjs-template
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command                | Description                             |
| ---------------------- | --------------------------------------- |
| `pnpm dev`             | Start development server with Turbopack |
| `pnpm build`           | Build production application            |
| `pnpm start`           | Start production server                 |
| `pnpm test`            | Run all tests (unit + E2E)              |
| `pnpm test:unit`       | Run unit tests with Vitest              |
| `pnpm e2e`             | Run E2E tests with Playwright           |
| `pnpm e2e:ui`          | Run E2E tests with Playwright UI        |
| `pnpm storybook`       | Start Storybook dev server              |
| `pnpm build-storybook` | Build Storybook for production          |

## 🧪 Testing

### Unit Tests

Unit tests are powered by **Vitest** with React Testing Library:

```bash
pnpm test:unit
```

### E2E Tests

End-to-end tests use **Playwright** for comprehensive browser testing:

```bash
pnpm e2e
```

For interactive testing with UI:

```bash
pnpm e2e:ui
```

### Component Testing

Components are tested and documented using **Storybook**:

```bash
pnpm storybook
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/             # Reusable components
│   └── button/            # Example component with tests & stories
├── e2e/                   # Playwright E2E tests
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json          # TypeScript configuration
└── vitest.config.ts       # Vitest configuration
```

## ⚙️ Configuration

### TypeScript

- Strict mode enabled
- Path aliases configured (`@/*` → `./`)
- Latest ES2017 target with modern features

### Tailwind CSS

- Latest v4 with PostCSS integration
- Responsive design utilities
- Custom configuration in `postcss.config.mjs`

### Next.js

- App Router enabled
- TypeScript support
- Optimized for production builds

## 🔧 Development

### Adding New Components

1. Create component in `components/` directory
2. Add unit tests (`*.test.tsx`)
3. Create Storybook stories (`*.stories.ts`)
4. Export from component index file

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📊 Performance

- **Turbopack**: Lightning-fast bundling in development
- **React 19**: Concurrent features and optimizations
- **Next.js 15**: Latest performance improvements
- **Tailwind CSS 4**: Optimized CSS generation

## 📝 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Storybook](https://storybook.js.org/) - Component development environment
- [Playwright](https://playwright.dev/) - E2E testing framework
- [Vitest](https://vitest.dev/) - Unit testing framework
