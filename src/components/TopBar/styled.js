import styled from "styled-components";
import { colors, flexBetween, spacing } from "@/theme";

export const TopBarHeader = styled.header`
	position: fixed;
	top: 0;
	left: ${(props) => (props.isSidebarOpen ? "16rem" : "0")};
	right: 0;
	height: 3.75rem;
	background: ${colors.white};
	border-bottom: 1px solid #e0e0e0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	z-index: 100;
	transition: all 0.3s ease-in-out;

	@media (max-width: 768px) {
		left: 0;
	}
`;

export const TopBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 13px 1.5rem;
	gap: 1.5rem;

	@media (max-width: 1024px) {
		padding: 0 1.5rem;
		gap: 1rem;
	}

	@media (max-width: 768px) {
		padding: 0 1rem;
		flex-wrap: wrap;
	}

	@media (max-width: 480px) {
		gap: 0.75rem;
	}
`;

export const TopBarLeft = styled.div`
	flex: 0 0 auto;
	${flexBetween};
	gap: 1.5rem;

	@media (max-width: 768px) {
		order: 1;
	}
`;

export const TopBarCenter = styled.div`
	flex: 1;
	max-width: 25rem;
	margin-right: auto;

	@media (max-width: 1024px) {
		max-width: 15.625rem;
	}

	@media (max-width: 768px) {
		order: 3;
		flex: 1 0 100%;
		margin-top: 0.5rem;
	}
`;

export const TopBarRight = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;

	@media (max-width: 768px) {
		order: 2;
	}
`;

export const SidebarToggle = styled.button`
	position: relative;
	z-index: 100;
	width: 2rem;
	height: 2rem;
	border: none;
	background: ${colors.white};
	color: ${colors.primary};
	font-size: 1.5rem;
	cursor: pointer;
	transition: all 0.3s ease;
	line-height: 20px;
	display: flex;
	justify-content: center;

	${(props) =>
		props.isSidebarOpen
			? `
      align-items: center;
    padding: ${spacing.sm};
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: ${spacing.md};
    margin-left: -2.5rem;
    background: ${colors.white};
    `
			: `
    border-radius: ${spacing.xs};
    padding: ${spacing.xs};
    `}

	&:hover {
		background: ${colors.secondaryLight};
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const SiteLogo = styled.img`
	transition: all 0.3s ease-in-out;
`;
