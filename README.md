# 🏆 Alex Rivera — SkillsUSA 2025 Portfolio

A production-ready, full-stack portfolio website built for the **SkillsUSA Web Design Technology** competition. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Node.js.

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (ThemeProvider, Navbar, Footer)
│   ├── page.tsx                  # Home page (all sections)
│   ├── not-found.tsx             # 404 page
│   ├── admin/
│   │   └── page.tsx              # Admin dashboard (auth + CRUD)
│   ├── blog/
│   │   └── page.tsx              # Blog listing page
│   ├── projects/
│   │   └── page.tsx              # Projects listing page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   └── api/
│       ├── contact/route.ts      # Contact form → Nodemailer
│       ├── projects/route.ts     # Projects CRUD API
│       ├── github/route.ts       # GitHub API integration
│       └── admin/route.ts        # Admin JWT auth
│
├── components/
│   ├── ui/                       # Reusable UI primitives
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── theme-provider.tsx
│   └── sections/                 # Page sections
│       ├── Navbar.tsx            # Sticky nav with theme toggle
│       ├── HeroSection.tsx       # Animated hero + typewriter
│       ├── AboutSection.tsx      # Bio + marquee tech stack
│       ├── SkillsSection.tsx     # Animated skill bars
│       ├── TimelineSection.tsx   # Career/achievement timeline
│       ├── ProjectsSection.tsx   # Filterable project cards + modal
│       ├── SkillsUSASection.tsx  # SkillsUSA focus section
│       ├── BlogSection.tsx       # Blog post cards
│       ├── ContactSection.tsx    # Validated contact form
│       └── Footer.tsx
│
├── data/
│   └── portfolio.ts              # All static content (projects, skills, etc.)
│
├── hooks/
│   ├── use-toast.ts
│   ├── use-scroll-spy.ts
│   └── use-local-storage.ts
│
├── lib/
│   ├── utils.ts                  # cn(), formatDate(), etc.
│   ├── mongodb.ts                # MongoDB connection singleton
│   └── auth.ts                   # JWT + bcrypt helpers
│
├── server/
│   └── index.js                  # Express server (port 3001)
│
├── styles/
│   └── globals.css               # CSS variables, animations, utilities
│
├── types/
│   └── index.ts                  # Shared TypeScript types
│
├── .env.example                  # Environment variable template
├── .gitignore
├── .eslintrc.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.17 or later
- **npm** 9+ (or yarn/pnpm)
- **Git**

### 1. Clone and Install

```bash
# Clone the repo (or unzip if you received this as a zip)
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install all dependencies (frontend + backend in one package.json)
npm install
```

### 2. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env.local

# Open .env.local and fill in your values
# At minimum, you need nothing to run locally — defaults are set
# For email: add Gmail credentials (see Email Setup below)
```

### 3. Run Development Servers

**Option A — Next.js only (recommended for most development):**
```bash
npm run dev
# → http://localhost:3000
```

**Option B — Next.js + Express server simultaneously:**
```bash
npm run dev:all
# → Next.js on http://localhost:3000
# → Express on http://localhost:3001
```

### 4. Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

---

## ✉️ Email Setup (Contact Form)

The contact form works in demo mode without any email config (submissions are logged to console). To enable real email:

### Gmail Setup
1. Enable 2-Factor Authentication on your Google account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Create a new App Password for "Mail"
4. Add to `.env.local`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=xxxx_xxxx_xxxx_xxxx   # The 16-char app password
EMAIL_TO=your.email@gmail.com
```

### Alternative: Resend (recommended for production)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Update `app/api/contact/route.ts` to use the Resend SDK

---

## 🗄️ Database Setup (Optional)

The portfolio works fully without a database using static data from `data/portfolio.ts`. To enable dynamic project management via the Admin Dashboard:

### MongoDB Atlas (Free Tier)
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free M0 cluster
3. Get your connection string
4. Add to `.env.local`:

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio
```

---

## 🔐 Admin Dashboard

The admin dashboard is at `/admin`.

**Default credentials (change immediately!):**
- Username: `admin`
- Password: `admin123`

To change them, update your `.env.local`:
```env
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=a_very_long_random_secret_string_here
```

**Features:**
- JWT authentication with HTTP-only cookies
- Add / edit / delete projects
- Dashboard stats
- Protected API routes

---

## 📦 Customization

### Update Personal Info
Edit `data/portfolio.ts` — change `PERSONAL_INFO`, `PROJECTS`, `SKILLS`, `TIMELINE`, and `BLOG_POSTS` to your own content.

### Change Theme Colors
Edit `styles/globals.css` CSS variables and `tailwind.config.ts` color palette.

### Add/Remove Sections
- Sections are in `components/sections/`
- Imported and composed in `app/page.tsx`
- Add navigation items in `components/sections/Navbar.tsx`

---

## 🌐 Deployment

### Deploy to Vercel (Recommended — Free)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (follow prompts)
vercel

# Set environment variables in Vercel dashboard:
# Project → Settings → Environment Variables
# Add all variables from your .env.example
```

Or use the Vercel dashboard:
1. Push your code to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Project Settings
4. Deploy!

### Deploy to Netlify

```bash
# Build the project
npm run build

# The output is in .next/
# Configure Netlify to:
#   Build command: npm run build
#   Publish directory: .next
#   Node version: 18
```

### Deploy Express Server (if using it separately)

The Express server can be deployed to:
- **Railway** ([railway.app](https://railway.app)) — free tier available
- **Render** ([render.com](https://render.com)) — free tier available
- **Fly.io** — generous free tier

```bash
# Example: Deploy to Railway
npm install -g @railway/cli
railway login
railway init
railway up
```

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 14 (App Router)             |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS + CSS Variables        |
| UI Library  | Radix UI primitives + custom        |
| Animations  | Framer Motion                       |
| Forms       | React Hook Form + Zod validation    |
| Email       | Nodemailer                          |
| Auth        | JWT + bcryptjs                      |
| Database    | MongoDB (Mongoose) — optional       |
| Backend     | Express.js (optional sidecar)       |
| Deployment  | Vercel (frontend) + Railway (API)   |
| Fonts       | Cormorant Garamond + DM Sans        |
| Icons       | Lucide React                        |

---

## 📊 Performance

Target Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 100
- **SEO**: 100

Optimizations included:
- Next.js Image component with lazy loading
- Font preloading via Google Fonts
- Static generation where possible
- Code splitting per route
- CSS-only animations where possible
- Semantic HTML + ARIA labels

---

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance (WCAG AA)
- Screen reader friendly

---

## 🏆 SkillsUSA Competition Notes

This project demonstrates:

1. **Technical Excellence** — Full-stack Next.js with TypeScript, API routes, JWT auth, Nodemailer, and MongoDB integration
2. **UI/UX Design** — Custom design system, dark/light mode, responsive layout, Framer Motion animations
3. **Professional Standards** — Clean code, TypeScript types, ESLint, SEO meta tags, security headers
4. **Problem Solving** — Contact form with validation & email, admin dashboard, project filtering/search
5. **Code Quality** — Modular components, custom hooks, utility functions, consistent patterns

---

## 📝 License

MIT © Alex Rivera — Built for SkillsUSA 2025
