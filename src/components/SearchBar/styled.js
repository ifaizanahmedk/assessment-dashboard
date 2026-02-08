import styled from "styled-components";
import { borderRadius, colors, spacing, typography } from "../../theme";

export const SearchBarContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background: ${colors.background};
	border-radius: ${borderRadius.md};
	transition: all 0.3s ease;
	border: 1px solid rgba(224, 232, 237, 1);
	background-color: rgba(245, 248, 250, 1);
	height: 34px;

	&:focus-within {
		background-color: ${colors.background};
		box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.1);
	}
`;

export const SearchInput = styled.input`
	flex: 1;
	border: none;
	background: transparent;
	outline: none;
	padding: ${spacing.xs} ${spacing.md} ${spacing.xs} ${spacing["2xl"]};
	font-family: ${typography.fontFamily.base};
	font-weight: 400;
	font-size: ${typography.fontSize.base};
	line-height: 1;
	vertical-align: middle;
	text-transform: capitalize;
	color: ${colors.text};

	&::placeholder {
		color: ${colors.textLight};
	}
`;

export const SearchClear = styled.button`
	background: none;
	border: none;
	color: ${colors.textLight};
	cursor: pointer;
	font-size: ${typography.fontSize.base};
	padding: 0 ${spacing.md};
	transition: color 0.2s;

	&:hover {
		color: ${colors.text};
	}
`;

export const SearchIcon = styled.img`
	position: absolute;
	left: ${spacing.md};
	top: 0.5625rem;
`;
