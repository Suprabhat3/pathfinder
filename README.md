# Path Menties 🎯

> Your AI-Powered Journey to Success

Path Menties is an intelligent web application that helps students, self-learners, and professionals generate structured, goal-oriented learning roadmaps. Using AI, the platform creates step-by-step, actionable plans tailored to your specific goals, timeline, and current skill level.

## ✨ Features

- **AI-Powered Roadmap Generation**: Get personalized learning paths based on your goals, current level, and time commitment
- **Interactive Progress Tracking**: Mark steps as completed and visualize your progress
- **Beautiful, Modern UI**: Clean design with glassmorphism effects, emerald accents, and smooth animations
- **Dark/Light Mode**: Seamless theme switching for comfortable viewing
- **Export & Save**: Download your roadmaps for offline reference
- **Resource Recommendations**: AI-curated learning resources for each step

## 🎯 Target Audience

- **Students**: Planning academic journeys or preparing for competitive exams
- **Self-Learners**: Transitioning into tech or learning new skills independently
- **Professionals**: Seeking upskilling or career pivots

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pathfinder
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
OPENAI_API_KEY=your_openai_api_key_here
# or
GOOGLE_API_KEY=your_google_api_key_here
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: Custom components with [Lucide React](https://lucide.dev/) icons
- **AI Integration**: OpenAI API / Google Generative AI
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Animations**: Canvas Confetti for celebrations

## 📁 Project Structure

```
pathfinder/
├── app/
│   ├── api/
│   │   └── generate/          # AI roadmap generation endpoint
│   ├── generate/              # Roadmap generation page
│   ├── history/               # User's saved roadmaps
│   ├── cookies/               # Cookie policy
│   ├── privacy-policy/        # Privacy policy
│   ├── terms-of-service/      # Terms of service
│   └── page.tsx               # Landing page
├── components/
│   ├── landing/               # Landing page components
│   │   ├── Hero.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── layout/                # Layout components (Navbar, Footer)
├── public/                    # Static assets
└── README.md
```

## 🎨 Design Philosophy

Path Menties follows a premium, modern design aesthetic:

- **Color Palette**: Slate backgrounds with emerald accents
- **Typography**: Geist and Geist Mono fonts
- **Components**: Glassmorphism cards with subtle shadows
- **Interactions**: Smooth transitions and micro-animations
- **Accessibility**: WCAG-compliant color contrasts and semantic HTML

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🌟 How It Works

1. **Input Your Goal**: Tell us what you want to learn and your current skill level
2. **Set Your Timeline**: Define how much time you can commit per week
3. **Generate Roadmap**: AI creates a personalized, step-by-step learning path
4. **Track Progress**: Mark steps as completed and watch your progress grow
5. **Export & Share**: Save your roadmap or share it with others

## 🚧 Roadmap

### Current (MVP)
- ✅ AI roadmap generation
- ✅ Interactive progress tracking
- ✅ Beautiful landing page
- ✅ Dark/light mode support

### Planned Features
- 🔄 User authentication (save roadmaps to account)
- 🔄 Community roadmaps (share and discover)
- 🔄 Calendar integration (export to Google/Apple Calendar)
- 🔄 Resource validation (verify AI-recommended links)
- 🔄 Mobile app

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | OpenAI API key for GPT models | Yes (or use Google) |
| `GOOGLE_API_KEY` | Google Generative AI API key | Yes (or use OpenAI) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🔗 Links

- [Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 💡 Support

For support, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js and AI
