# Copilot Capability Map

An interactive, clickable map of GitHub's AI-powered Developer Platform that helps users explore capabilities, understand how Copilot accomplishes each task, and access demo flows with copyable prompts.

## 🚀 Features

- **Interactive Visual Map** - Click hotspots on the capability map to explore different GitHub Copilot features
- **Comprehensive Details** - Each capability includes summaries, demo flows, and actionable prompts
- **Search & Filter** - Quickly find capabilities by name or filter by development lifecycle stage (Plan, Code, Verify, Deploy, Operate)
- **Copy Prompts** - One-click copying of prompts for immediate use in demos and workflows
- **Stage Filters** - Focus on specific stages of the development lifecycle
- **Mobile Responsive** - Works seamlessly on desktop and mobile devices

## 🛠 Development

### Prerequisites
- Node.js 24.x or later
- npm 11.x or later

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npx vite

# Type check
npm run typecheck

# Build for production
npm run build
```

### Project Structure
```
src/
├── components/        # React components
│   ├── CapabilityMap.tsx  # Interactive map with hotspots
│   ├── DetailPanel.tsx    # Capability details sidebar
│   ├── Search.tsx         # Search functionality
│   ├── Filters.tsx        # Stage filter pills
│   └── ui/               # Reusable UI components (shadcn/ui)
├── lib/
│   ├── capabilityData.ts  # Capability definitions and data
│   ├── hotspotConfig.ts   # Hotspot positioning configuration
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Utility functions
└── styles/              # Global styles and themes
```

## 📦 Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide & Phosphor Icons** - Icon libraries

## 🎨 Design

The application uses a modern, professional design aligned with GitHub's aesthetic, featuring:
- Clean typography with Inter font family
- Stage-specific color coding
- Subtle animations and transitions
- High contrast ratios for accessibility

## 📄 License

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
