import styled from "styled-components";
import { borderRadius, colors, flexColumn, spacing, typography } from "@/theme";

export const NavMenuContainer = styled.nav`
	padding: ${spacing.lg} 0;
`;

export const MenuList = styled.ul`
	list-style: none;
	padding: 0 23px;
	${flexColumn};
	gap: 0.5rem;
`;

export const MenuItem = styled.li`
	margin: 0;
`;

export const MenuIcon = styled.img`
	width: 1rem;
	height: 1rem;
	object-fit: contain;
	transition: all 0.3s ease;
`;

export const MenuLink = styled.a`
	display: flex;
	align-items: center;
	padding: 0.75rem 0.625rem;
	color: ${colors.secondaryDark};
	text-decoration: none;
	transition: all 0.3s ease;
	gap: 0.625rem;

	&:hover,
	&:active,
	&.active {
		background-color: ${colors.primaryLight};
		border-radius: ${borderRadius.md};
		color: ${colors.white};
	}

	&:hover ${MenuIcon}, &.active ${MenuIcon} {
		filter: brightness(0) invert(1);
	}

	@media (max-width: 768px) {
		padding: 0.75rem 1rem;
	}
`;

export const MenuLabel = styled.span`
	font-size: ${typography.fontSize.base};
	font-weight: 500;
`;
