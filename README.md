# Tahwul Dashboard

A professional compliance and evidence management dashboard built with React and modern web technologies.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Architecture](#project-architecture)
- [How to Run the Project](#how-to-run-the-project)
- [Code Structure](#code-structure)
- [Technology Stack](#technology-stack)
- [Assumptions](#assumptions)
- [Future Improvements](#future-improvements)

---

## Project Overview

The **Tahwul Dashboard** is a web-based application designed to help organizations track compliance progress, manage evidence documents, and monitor criteria completion. The dashboard provides a clean, intuitive interface for viewing key metrics and project timelines.

### Key Features

- **Dashboard Overview**: Real-time statistics on overall progress, total/completed criteria, and evidence documents
- **Project Timeline**: Visual representation of project phases and milestones
- **Responsive Sidebar Navigation**: Collapsible sidebar with navigation menu
- **Top Bar**: Quick access to search, notifications, and user profile
- **Themed UI**: Professional color scheme with smooth transitions and animations

---

## Project Architecture

```
tahwul-dashboard/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and static files
│   │   ├── icons/         # SVG icons for the application
│   │   └── images/        # Image assets (logos, avatars, etc.)
│   ├── components/        # Reusable UI components
│   │   ├── NavMenu/       # Navigation menu component
│   │   ├── NotificationIcon/ # Notification bell with badge
│   │   ├── ProfileDropdown/  # User profile dropdown menu
│   │   ├── ProjectTimeline/  # Project timeline visualization
│   │   ├── SearchBar/     # Search input component
│   │   ├── Sidebar/       # Main sidebar navigation
│   │   ├── StatCard/      # Statistics display cards
│   │   └── TopBar/        # Top navigation bar
│   ├── constants/         # Application constants
│   ├── context/           # React Context providers
│   │   └── SidebarContext.jsx  # Sidebar state management
│   ├── layouts/           # Page layout components
│   │   └── SemanticLayout.jsx  # Main app layout with sidebar
│   ├── pages/             # Page components
│   │   └── Dashboard/     # Dashboard page
│   ├── routes/            # Routing configuration
│   │   └── Routes.jsx     # React Router setup
│   ├── styles/            # Global styles
│   ├── theme/             # Design system and theme configuration
│   │   ├── GlobalStyle.js # Global CSS styles
│   │   ├── mixins.js      # Reusable style mixins
│   │   ├── theme.js       # Theme object (colors, typography, etc.)
│   │   └── ui.js          # UI utility components
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Application entry point
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

### ADDING NEW COMPONENTS

1. Create folder: src/components/ComponentName/
2. Create files:
    - ComponentName.jsx (component logic)
    - ComponentName.css (styles)
    - index.js (export default)
3. Add to src/components/index.js barrel export
4. Import and use in your pages/components

### ADDING NEW PAGES

1. Create folder: src/pages/PageName/
2. Create files:
    - PageName.jsx (page component)
    - PageName.css (styles)
    - index.js (export default)
3. Add to src/pages/index.js barrel export
4. Add route to src/routes/Routes.jsx

### Design System

The project uses a comprehensive design system defined in `src/theme/`:

- **Colors**: Primary (#1D3557), Secondary (#8597A8), Status colors (success, warning, danger, info), and semantic colors
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
- **Shadows**: Multiple shadow levels for depth
- **Breakpoints**: Responsive breakpoints (xs, sm, md, lg, xl, 2xl)
- **Transitions**: Smooth animations for interactions

---

## How to Run the Project

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd tahwul-dashboard
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

---

## Code Structure

### Component Architecture

The application follows a **component-based architecture** with the following patterns:

1. **Atomic Design Principles**: Components are organized by complexity and reusability
2. **Layout Pattern**: SemanticLayout wraps page content with shared UI elements (Sidebar, TopBar)
3. **Context API**: Sidebar state managed globally via SidebarContext
4. **Styled Components**: All styling done with styled-components for scoped CSS

### Routing

The application uses **React Router v7** for client-side routing:

```javascript
// src/routes/Routes.jsx
const router = createBrowserRouter([
	{
		path: "/",
		element: <SemanticLayout />,
		children: [{ index: true, element: <Dashboard /> }],
	},
	{
		path: "*",
		element: <Navigate to="/" replace />,
	},
]);
```

### Theme Provider

The app uses styled-components' `ThemeProvider` to make theme variables available throughout the component tree:

```javascript
// src/main.jsx
<ThemeProvider theme={theme}>
	<GlobalStyle />
	<App />
</ThemeProvider>
```

### Path Aliases

The project uses `@` as a path alias for clean imports:

```javascript
import Sidebar from "@/components/Sidebar";
import { colors } from "@/theme";
```

Configured in `vite.config.js`:

```javascript
resolve: {
  alias: {
    "@": resolve(__dirname, "src"),
  },
}
```

---

## Technology Stack

| Category            | Technology          | Purpose                       |
| ------------------- | ------------------- | ----------------------------- |
| **Framework**       | React 19            | UI library                    |
| **Build Tool**      | Vite                | Fast development and building |
| **Routing**         | React Router DOM v7 | Client-side routing           |
| **Styling**         | styled-components   | CSS-in-JS styling             |
| **Language**        | JavaScript (ES6+)   | Application logic             |
| **Linting**         | ESLint              | Code quality                  |
| **Package Manager** | npm                 | Dependency management         |

---

## Assumptions

1. **Target Browsers**: The application targets modern browsers supporting ES6+ and CSS custom properties
2. **Authentication**: Basic authentication flow is simulated; real auth integration is pending
3. **API Integration**: The dashboard currently uses mock data; API calls will be integrated later
4. **Responsive Design**: The sidebar collapses on mobile devices; further mobile optimization may be needed
5. **State Management**: Context API is sufficient for the current scope; Redux/Zustand may be needed for larger state requirements
6. **Icons**: SVG icons are used for optimal performance and scalability

---

## Future Improvements

With more time, the following enhancements would improve the application:

### Performance

- Implement lazy loading for routes and components
- Add code splitting to reduce bundle size
- Implement virtualization for large data lists
- Add caching strategies for API requests

### Features

- **Authentication System**: Complete login/logout with JWT tokens and protected routes
- **API Integration**: Connect to backend API for real data
- **Data Visualization**: Add charts (Chart.js, Recharts) for analytics
- **Multi-language Support**: i18n for internationalization
- **Dark Mode**: Add theme toggle for light/dark mode
- **Dashboard Customization**: Allow users to customize widget layout
- **Notification System**: Real-time notifications with WebSocket
- **File Management**: Drag-and-drop file upload for evidence documents

### Code Quality

- **TypeScript Migration**: Convert to TypeScript for better type safety
- **Unit Testing**: Add Jest and React Testing Library
- **E2E Testing**: Add Cypress for end-to-end testing
- **Storybook**: Document components with Storybook
- **CI/CD Pipeline**: Automated testing and deployment

### UX/UI

- **Accessibility**: WCAG 2.1 AA compliance improvements
- **Loading States**: Skeleton screens and better loading indicators
- **Error Handling**: Graceful error boundaries and user feedback
- **Onboarding**: User onboarding flow for new users
- **Keyboard Navigation**: Full keyboard accessibility

### Architecture

- **State Management**: Consider Redux Toolkit or Zustand for complex state
- **API Layer**: Create a dedicated API service layer with Axios
- **Form Management**: Implement React Hook Form for form handling
- **Component Library**: Build a reusable component library
