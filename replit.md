# MTS Transportation Website - Replit Setup

## Project Overview
This is a professional React + Vite frontend application for MTS Transportation, a logistics and transportation management company. The website features a modern design with responsive layouts, showcasing their services, technology, and contact information.

## Architecture
- **Frontend**: React 19.1.0 with Vite 6.3.6 build system
- **Styling**: Tailwind CSS 4.1.7 with custom CSS
- **UI Components**: Radix UI components for accessibility
- **Icons**: Lucide React
- **Development Server**: Vite dev server on port 5000
- **Deployment**: Static site served with npx serve

## Recent Changes (2025-09-18)
- ✅ Configured Vite to work with Replit proxy environment (host: 0.0.0.0, port: 5000)
- ✅ Set up Frontend Server workflow to run development server
- ✅ Resolved dependency conflicts using --legacy-peer-deps flag
- ✅ Configured deployment settings for production builds
- ✅ Tested build process - successful with optimized assets

## User Preferences
- Professional, clean design maintained
- All original functionality preserved
- SEO optimization retained

## Project Structure
```
mts-transportation/
├── public/           # Static assets (favicon, logo)
├── src/
│   ├── assets/       # Images and media files
│   ├── components/   # Reusable UI components (Radix UI)
│   ├── hooks/        # Custom React hooks
│   ├── lib/          # Utility functions
│   ├── App.jsx       # Main application component
│   ├── main.jsx      # React app entry point
│   └── *.css         # Styling files
├── dist/             # Build output (generated)
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration (Replit-optimized)
└── replit.md         # This documentation
```

## Development Workflow
1. **Development**: `npm run dev` - Starts Vite dev server on port 5000
2. **Build**: `npm run build` - Creates production build in dist/
3. **Preview**: `npm run preview` - Preview production build locally

## Dependencies Management
- Uses npm with --legacy-peer-deps flag due to date-fns version conflicts
- All Radix UI components for accessible interface elements
- Tailwind CSS for styling with custom components

## Deployment Configuration
- **Type**: Autoscale (static site)
- **Build**: `npm run build`
- **Run**: `npx serve -s dist -l 5000`
- **Port**: 5000 (configured for Replit environment)

## Known Issues
- Date-fns version conflict with react-day-picker requires --legacy-peer-deps flag
- This has been resolved and doesn't affect functionality

## Contact Information (from website)
- Company: MTS Transportation
- Location: Houston, TX  
- Email: info@mtstransportation.com
- Phone: (281) 223-3468