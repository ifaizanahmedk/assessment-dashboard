/\*\*

- Project Architecture Documentation
- Clean Architecture with Modular Component Structure
  \*/

/\*
PROJECT STRUCTURE - CLEAN ARCHITECTURE APPROACH
================================================

src/
├── components/ # Reusable UI Components
│ ├── Sidebar/ # Collapsible sidebar component
│ │ ├── Sidebar.jsx # Main component logic
│ │ ├── styled.js # Component styles
│ │ └── index.js # Barrel export
│ │
│ ├── TopBar/ # Navigation bar component
│ │ ├── TopBar.jsx # Main component logic
│ │ ├── styled.js # Component styles
│ │ └── index.js # Barrel export
│ │
│ ├── SearchBar/ # Search input component
│ │ ├── SearchBar.jsx # Main component logic
│ │ ├── styled.js # Component styles
│ │ └── index.js # Barrel export
│ │
│ ├── NotificationIcon/ # Notification bell component
│ │ ├── NotificationIcon.jsx # Main component logic
│ │ ├── styled.js # Component styles
│ │ └── index.js # Barrel export
│ │
│ ├── ProfileDropdown/ # User profile dropdown component
│ │ ├── ProfileDropdown.jsx # Main component logic
│ │ ├── styled.js # Component styles
│ │ └── index.js # Barrel export
│ │
│ ├── NavMenu/ # Navigation menu component
│ │ ├── NavMenu.jsx # Main component logic
│ │ ├── styled.js # Component styles
│ │ └── index.js # Barrel export
│ │
│ └── index.js # Barrel export for all components
│
├── pages/ # Page/Container Components
│ ├── Dashboard/ # Dashboard page
│ │ ├── Dashboard.jsx # Page component
│ │ ├── styled.js # Page styles
│ │ └── index.js # Barrel export
│ │
│ └── index.js # Barrel export for all pages
│
├── routes/ # Route Configuration
│ └── Routes.jsx # Route definitions
│
├── hooks/ # Custom React Hooks
│ └── (Future custom hooks)
│
├── utils/ # Utility Functions
│ └── helpers.js # Helper functions
│
├── constants/ # Global Constants
│ └── appConstants.js # Application constants
│
├── styles/ # Global Styles
│ └── (Future global stylesheets)
│
├── App.jsx # Main App component
└── main.jsx # Application entry point

# KEY ARCHITECTURE PRINCIPLES

1. FOLDER-PER-COMPONENT Pattern:
    - Each component has its own folder
    - Contains component logic, styles, and index export
    - Makes components truly modular and reusable
    - Easy to locate component files

2. BARREL EXPORTS (index.js):
    - Each component folder has index.js
    - Enables clean imports: import { Sidebar } from './components'
    - Simplifies import statements across the app
    - Centralized component exports

3. SEPARATION OF CONCERNS:
    - components/ → Reusable UI building blocks
    - pages/ → Full-page components using smaller components
    - routes/ → Route management
    - hooks/ → Custom React logic
    - utils/ → Pure functions and helpers
    - constants/ → Global app configuration

4. COMPONENT STRUCTURE:
   Each component folder contains:
    - ComponentName.jsx → React component logic
    - ComponentName.css → Component-scoped styles
    - index.js → Barrel export for clean imports

5. SCALABILITY:
    - Easy to add new components
    - Easy to add new pages
    - Clear navigation through the codebase
    - Follows industry best practices

# IMPORT EXAMPLES

// ✅ Clean imports using barrel exports
import { Sidebar, TopBar, SearchBar } from './components';
import { Dashboard } from './pages';

// ✅ Specific component import if needed
import SearchBar from './components/SearchBar';

// ❌ Avoid direct imports (less clean)
import SearchBar from './components/SearchBar/SearchBar.jsx';

# ADDING NEW COMPONENTS

1. Create folder: src/components/ComponentName/
2. Create files:
    - ComponentName.jsx (component logic)
    - ComponentName.css (styles)
    - index.js (export default)
3. Add to src/components/index.js barrel export
4. Import and use in your pages/components

# ADDING NEW PAGES

1. Create folder: src/pages/PageName/
2. Create files:
    - PageName.jsx (page component)
    - PageName.css (styles)
    - index.js (export default)
3. Add to src/pages/index.js barrel export
4. Add route to src/routes/Routes.jsx

\*/
