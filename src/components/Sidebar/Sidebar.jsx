import NavMenu from "@/components/NavMenu";
import { SidebarContainer, SidebarHeader } from "@/components/Sidebar/styled";

import tahwulLogo from "@/assets/tahwul-logo.svg";

const Sidebar = ({ isSidebarOpen }) => {
	return (
		<>
			<SidebarContainer isSidebarOpen={isSidebarOpen}>
				<SidebarHeader>
					<img src={tahwulLogo} alt="Tahwul" />
				</SidebarHeader>
				<NavMenu />
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
