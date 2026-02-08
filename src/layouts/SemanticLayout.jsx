import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

import { colors, flexCenter } from "@/theme";

const AppWrap = styled.div`
	display: flex;
	min-height: 100vh;
`;

const ContentArea = styled.main`
	flex: 1;
	margin-left: ${(props) => (props.isSidebarOpen ? "16rem" : "0")};
	padding-top: 60px;
	transition: margin-left 0.3s ease-in-out;
	background: ${colors.backgroundLight};
	min-height: 100vh;

	@media (max-width: 768px) {
		margin-left: 0;
	}
`;

const Centered = styled.div`
	${flexCenter};
	height: 100vh;
	flex-direction: column;
	gap: 1rem;
`;

const LayoutContent = ({ isLoggedIn, setIsLoggedIn }) => {
	const { isSidebarOpen } = useSidebar();

	if (!isLoggedIn) {
		return (
			<Centered>
				<h2>Please sign in to continue</h2>
				<div>
					<button onClick={() => setIsLoggedIn(true)}>Sign In</button>
				</div>
			</Centered>
		);
	}

	return (
		<AppWrap>
			<Sidebar isSidebarOpen={isSidebarOpen} />
			<TopBar onLogout={() => setIsLoggedIn(false)} />
			<ContentArea isSidebarOpen={isSidebarOpen}>
				<Outlet />
			</ContentArea>
		</AppWrap>
	);
};

const SemanticLayout = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(() => {
		try {
			const _isLoggedIn = localStorage.getItem("isLoggedIn");
			return _isLoggedIn === null ? true : _isLoggedIn === "true";
		} catch (e) {
			return true;
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
		} catch (e) {}
	}, [isLoggedIn]);

	return (
		<SidebarProvider>
			<LayoutContent
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
			/>
		</SidebarProvider>
	);
};

export default SemanticLayout;
