import SearchBar from "../SearchBar";
import NotificationIcon from "../NotificationIcon";
import ProfileDropdown from "../ProfileDropdown";
import {
	TopBarHeader,
	TopBarContainer,
	TopBarLeft,
	TopBarCenter,
	TopBarRight,
	SidebarToggle,
	SiteLogo,
} from "./styled";

import { useSidebar } from "@/context/SidebarContext";
import menuCloseIcon from "@/assets/icons/menu-close.svg";
import siteLogo from "@/assets/tahwul-logo.svg";

const TopBar = ({
	userName = "John Doe",
	notificationCount = 3,
	onLogout = () => {},
}) => {
	const { isSidebarOpen, toggleSidebar } = useSidebar();

	const handleSearch = (searchTerm) => {
		// console.log("Search:", searchTerm);
	};

	const handleNotificationClick = () => {
		// console.log("Notification clicked");
	};

	const handleLogout = () => {
		if (onLogout) {
			onLogout();
		}
	};

	const handleSettings = () => {
		console.log("Settings clicked");
	};

	return (
		<TopBarHeader isSidebarOpen={isSidebarOpen}>
			<TopBarContainer>
				<TopBarLeft>
					<SidebarToggle
						onClick={toggleSidebar}
						aria-label="Toggle sidebar"
						isSidebarOpen={isSidebarOpen}>
						{isSidebarOpen ? (
							<img src={menuCloseIcon} alt="close sidebar" />
						) : (
							`☰`
						)}
					</SidebarToggle>

					{!isSidebarOpen && <SiteLogo src={siteLogo} alt="Tahwul" />}
				</TopBarLeft>

				<TopBarCenter>
					<SearchBar placeholder="Search" onSearch={handleSearch} />
				</TopBarCenter>

				<TopBarRight>
					<NotificationIcon
						notificationCount={notificationCount}
						onNotificationClick={handleNotificationClick}
					/>
					<ProfileDropdown
						userName={userName}
						onLogout={handleLogout}
						onSettings={handleSettings}
					/>
				</TopBarRight>
			</TopBarContainer>
		</TopBarHeader>
	);
};

export default TopBar;
