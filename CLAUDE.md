# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 website for the American Language Fund, featuring multiple pages about their mission, grants, films, and contact information.

## Essential Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Production
npm run build        # Create production build
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint to check code quality
```

## Architecture

### Tech Stack
- **Next.js 13.3.1** with React 18.2.0
- **Tailwind CSS** for styling with custom SCSS in `styles/globals.scss`
- **Nodemailer** for contact form email functionality
- **React components**: react-icons, react-modal-video, react-responsive-carousel, swiper

### Page Structure
All pages follow a consistent pattern:
1. Import a Header component (e.g., `AboutHeader`)
2. Import a Main component (e.g., `AboutMain`)
3. Wrap both in the shared `Nav` component

Example pattern:
```javascript
import Nav from "@/components/Nav";
import AboutHeader from "@/components/AboutHeader";
import AboutMain from "@/components/AboutMain";

export default function About() {
  return (
    <Nav>
      <AboutHeader />
      <AboutMain />
    </Nav>
  );
}
```

### API Routes
- `/api/send-mail` - Handles contact form submissions
  - Requires environment variables: `INBOX`, `GMAIL`, `GMAIL_APP_PASSWORD`
  - Uses Gmail SMTP with nodemailer

### Component Organization
- **Page-specific components**: Named as `[Page]Header` and `[Page]Main`
- **Shared components**: `Nav`, `Footer`, `HeroSection`, `Gallery`, `Team`, etc.
- **Bio components**: Nested in `components/bio/` directory

### Import Alias
Use `@/` to import from the project root:
```javascript
import Nav from "@/components/Nav";
```

## Development Notes

- Images are stored in `/assets/` with subdirectories for bio images and new content
- The site uses unoptimized images (`unoptimized: true` in next.config.js) for static export compatibility
- Mobile menu functionality is implemented in the Nav component
- External donation links point to Ko-fi platform