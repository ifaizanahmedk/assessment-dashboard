import { css } from "styled-components";
import { colors, spacing, borderRadius, shadows, typography } from "./theme";

/**
 * Flexbox utilities
 */
export const flexCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const flexBetween = css`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const flexColumn = css`
	display: flex;
	flex-direction: column;
`;

/**
 * Text utilities
 */
export const textEllipsis = css`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const textClamp = (lines = 2) => css`
	display: -webkit-box;
	-webkit-line-clamp: ${lines};
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const textTruncate = css`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

/**
 * Button utilities
 */
export const buttonReset = css`
	background: none;
	border: none;
	padding: 0;
	cursor: pointer;
	font-family: inherit;

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
`;

export const buttonBase = css`
	${buttonReset}
	padding: ${spacing.sm} ${spacing.lg};
	border-radius: ${borderRadius.md};
	font-weight: ${typography.fontWeight.medium};
	transition: all 0.3s ease;

	&:active {
		transform: scale(0.98);
	}
`;

export const buttonPrimary = css`
	${buttonBase}
	background: ${colors.primary};
	color: ${colors.white};

	&:hover:not(:disabled) {
		background: ${colors.primaryDark};
		box-shadow: ${shadows.md};
	}
`;

export const buttonSecondary = css`
	${buttonBase}
	background: ${colors.background};
	color: ${colors.text};
	border: 1px solid ${colors.border};

	&:hover:not(:disabled) {
		background: ${colors.border};
	}
`;

/**
 * Card utilities
 */
export const cardBase = css`
	background: ${colors.white};
	border-radius: ${borderRadius.md};
	box-shadow: ${shadows.sm};
	transition: all 0.3s ease;
	padding: ${spacing.lg};
`;

export const cardHover = css`
	${cardBase}
	&:hover {
		box-shadow: ${shadows.md};
		transform: translateY(-0.125rem);
	}
`;

/**
 * Input utilities
 */
export const inputBase = css`
	padding: ${spacing.sm} ${spacing.md};
	border: 1px solid ${colors.border};
	border-radius: ${borderRadius.md};
	font-size: ${typography.fontSize.base};
	font-family: inherit;
	transition: all 0.3s ease;

	&:focus {
		outline: none;
		border-color: ${colors.primary};
		box-shadow: 0 0 0 0.1875rem rgba(102, 126, 234, 0.1);
	}

	&:disabled {
		background: ${colors.background};
		cursor: not-allowed;
	}
`;

/**
 * Gradient utilities
 */
export const gradientPrimary = css`
	background: linear-gradient(
		135deg,
		${colors.primary} 0%,
		${colors.primaryDark} 100%
	);
`;

/**
 * Responsive utilities
 */
export const hideOnMobile = css`
	@media (max-width: 768px) {
		display: none;
	}
`;

export const hideOnTablet = css`
	@media (max-width: 1024px) {
		display: none;
	}
`;

export const hideOnDesktop = css`
	@media (min-width: 1024px) {
		display: none;
	}
`;

/**
 * Opacity utilities
 */
export const disabledState = css`
	opacity: 0.6;
	pointer-events: none;
	cursor: not-allowed;
`;

/**
 * Animation utilities
 */
export const fadeIn = css`
	animation: fadeIn 0.3s ease-in-out;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const slideInFromLeft = css`
	animation: slideInFromLeft 0.3s ease-in-out;

	@keyframes slideInFromLeft {
		from {
			transform: translateX(-100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;

export const slideInFromRight = css`
	animation: slideInFromRight 0.3s ease-in-out;

	@keyframes slideInFromRight {
		from {
			transform: translateX(100%);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}
`;

/**
 * Common patterns
 */
export const absoluteFill = css`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const visibleScroll = css`
	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background: ${colors.border};
		border-radius: 0.25rem;

		&:hover {
			background: ${colors.lightGray};
		}
	}
`;
