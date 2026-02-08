import styled from "styled-components";
import {
	borderRadius,
	colors,
	flexBetween,
	spacing,
	typography,
} from "../../theme";

export const ProfileContainer = styled.div`
	position: relative;
`;

export const ProfileAvatar = styled.img`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: ${borderRadius.full};
	background: linear-gradient(
		135deg,
		${colors.primaryLight} 0%,
		${colors.primaryDark} 100%
	);
	border: none;
	cursor: pointer;
`;

export const ProfileDropdownBtn = styled.div`
	${flexBetween};
	background-color: ${colors.lightGray};
	gap: ${spacing.sm};
	padding: ${spacing.xs};
	border-radius: ${borderRadius.full};
	cursor: pointer;

	.caret-down {
		margin-left: ${spacing.xs};
		margin-right: 2px;
	}
`;

export const ProfileDropdownMenu = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	background: ${colors.white};
	border: 1px solid ${colors.border};
	border-radius: 0.5rem;
	min-width: 13.75rem;
	margin-top: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	z-index: 1001;
	overflow: hidden;
`;

export const ProfileHeader = styled.div`
	padding: 1rem;
	background: #f9f9f9;
	border-bottom: 1px solid ${colors.border};
`;

export const ProfileInfo = styled.div`
	margin: 0;
`;

export const ProfileName = styled.p`
	margin: 0;
	font-weight: 600;
	color: #23252a;
	font-size: 0.95rem;
	font-family: ${typography.fontFamily.inter};
	font-weight: 500;
	font-size: ${typography.fontSize.sm};
	line-height: 1.3;
	letter-spacing: 0%;
	vertical-align: middle;
	text-transform: capitalize;
`;

export const ProfileEmail = styled.p`
	margin: 0;
	color: #999;
	font-size: 0.85rem;
`;

export const ProfileMenu = styled.div`
	padding: 0.5rem 0;
`;

export const ProfileMenuItem = styled.button`
	width: 100%;
	padding: 0.75rem 1rem;
	border: none;
	background: none;
	text-align: left;
	cursor: pointer;
	color: #333;
	font-size: 0.9rem;
	transition: background 0.2s;

	&:hover {
		background: #f5f5f5;
	}

	${(props) =>
		props.isLogout &&
		`
    color: #ff4444;
    &:hover {
      background: #fff0f0;
    }
  `}
`;

export const ProfileDivider = styled.hr`
	margin: 0.5rem 0;
	border: none;
	border-top: 1px solid #e0e0e0;
`;
