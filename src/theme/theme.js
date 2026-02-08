export const colors = {
	// Primary colors
	primary: "#1D3557",
	primaryDark: "#1D3557",
	primaryLight: "#98AEC01A",

	// Secondary colors
	secondary: "#8597A8",
	secondaryDark: "#7B9FC3",
	secondaryLight: "#d1dfed",

	// Status colors
	success: "#28a745",
	warning: "#ffc107",
	danger: "#DB1F26",
	info: "#17a2b8",

	// Neutral colors
	dark: "#333333",
	gray: "#666666",
	lightGray: "#F9FAFA",
	border: "#E0E8ED",
	background: "#F5F8FA",
	backgroundLight: "#f0f2f5",
	white: "#ffffff",

	// Semantic
	text: "#1D3557",
	textSecondary: "#7B9FC3",
	textLight: "#8597A8",
};

export const typography = {
	// Font families
	fontFamily: {
		primary:
			'"Titillium Web", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", -apple-system, BlinkMacSystemFont, sans-serif',
		inter: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", -apple-system, BlinkMacSystemFont, sans-serif',
		mono: '"Courier New", monospace',
	},

	// Font sizes
	fontSize: {
		xs: "0.625rem",
		sm: "0.75rem",
		base: "0.875rem",
		lg: "1rem",
		xl: "1.125rem",
		"2xl": "1.25rem",
		"3xl": "1.5rem",
		"4xl": "2rem",
	},

	// Font weights
	fontWeight: {
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
	},

	// Line heights
	lineHeight: {
		tight: 1.2,
		normal: 1.5,
		relaxed: 1.75,
	},
};

export const spacing = {
	xs: "0.25rem",
	sm: "0.5rem",
	md: "1rem",
	lg: "1.5rem",
	xl: "2rem",
	"2xl": "2.5rem",
	"3xl": "3rem",
};

export const borderRadius = {
	none: "0",
	sm: "0.25rem",
	base: "0.375rem",
	md: "0.5rem",
	lg: "0.75rem",
	xl: "1rem",
	full: "3.125rem",
};

export const shadows = {
	none: "none",
	sm: "0 0.0625rem 0.125rem rgba(0, 0, 0, 0.05)",
	base: "0 0.125rem 0.5rem rgba(0, 0, 0, 0.05)",
	md: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)",
	lg: "0 0.5rem 1.5rem rgba(0, 0, 0, 0.12)",
	xl: "0 0.75rem 2rem rgba(0, 0, 0, 0.15)",
};

export const breakpoints = {
	xs: "0rem",
	sm: "30rem",
	md: "48rem",
	lg: "64rem",
	xl: "80rem",
	"2xl": "96rem",
};

export const transitions = {
	fast: "0.15s ease-in-out",
	base: "0.3s ease-in-out",
	slow: "0.5s ease-in-out",
};

export const zIndex = {
	hide: -1,
	auto: "auto",
	base: 1,
	dropdown: 1000,
	sticky: 1020,
	fixed: 1030,
	modalBackdrop: 1040,
	offcanvas: 1050,
	modal: 1060,
	popover: 1070,
	tooltip: 1080,
};

// ThemeProvider - Theme object
export const theme = {
	colors,
	typography,
	spacing,
	borderRadius,
	shadows,
	breakpoints,
	transitions,
	zIndex,
};

// Media query helpers
export const media = {
	xs: (styles) => `@media (min-width: ${breakpoints.xs}) { ${styles} }`,
	sm: (styles) => `@media (min-width: ${breakpoints.sm}) { ${styles} }`,
	md: (styles) => `@media (min-width: ${breakpoints.md}) { ${styles} }`,
	lg: (styles) => `@media (min-width: ${breakpoints.lg}) { ${styles} }`,
	xl: (styles) => `@media (min-width: ${breakpoints.xl}) { ${styles} }`,
	"2xl": (styles) =>
		`@media (min-width: ${breakpoints["2xl"]}) { ${styles} }`,
};

export default theme;
