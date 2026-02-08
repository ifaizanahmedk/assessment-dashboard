import styled from "styled-components";
import { colors } from "@/theme";

export const SidebarContainer = styled.aside`
	position: fixed;
	left: 0;
	top: 0;
	height: 100vh;
	width: 16rem;
	background: ${colors.primary};
	color: ${colors.white};
	box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease-in-out;
	z-index: 99;

	${(props) =>
		props.isSidebarOpen
			? `transform: translateX(0);`
			: `transform: translateX(-100%);`}

	@media (max-width: 768px) {
		width: 12.5rem;
	}
`;

export const SidebarHeader = styled.div`
	padding: 0.625rem 23px;
`;
