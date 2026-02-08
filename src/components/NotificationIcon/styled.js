import styled from "styled-components";
import { colors, spacing, typography } from "@/theme";
import { borderRadius } from "../../theme";

export const NotificationContainer = styled.div`
	position: relative;
`;

export const NotificationButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	position: relative;
	padding: ${spacing.sm} 0;
	transition: transform 0.2s;
	height: 2rem;

	&:hover {
		transform: scale(1.1);
	}
`;

export const NotificationIconImage = styled.img`
	width: 1rem;
	height: 1rem;
	object-fit: contain;
`;

export const NotificationBadge = styled.span`
	position: absolute;
	top: 0.375rem;
	right: 0;
	background: ${colors.danger};
	border-radius: ${borderRadius.full};
	width: 7px;
	height: 7px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const NotificationDropdown = styled.div`
	position: absolute;
	top: 100%;
	right: 0;
	background: white;
	border: 1px solid #e0e0e0;
	border-radius: 0.5rem;
	min-width: 18.75rem;
	margin-top: 0.5rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	z-index: 1001;
`;

export const NotificationHeader = styled.div`
	padding: 1rem;
	border-bottom: 1px solid #e0e0e0;

	h3 {
		margin: 0;
		font-size: 1rem;
		color: #333;
	}
`;

export const NotificationList = styled.div`
	max-height: 18.75rem;
	overflow-y: auto;
`;

export const NotificationItem = styled.div`
	padding: 1rem;
	border-bottom: 1px solid #f0f0f0;
	color: #666;
	font-size: 0.9rem;

	p {
		margin: 0;
	}
`;

export const NoNotifications = styled.p`
	padding: 2rem 1rem;
	text-align: center;
	color: #999;
	margin: 0;
`;
