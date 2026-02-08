import { NavLink } from "react-router-dom";
import {
	NavMenuContainer,
	MenuList,
	MenuItem,
	MenuLink,
	MenuIcon,
	MenuLabel,
} from "./styled";
import homeIcon from "@/assets/icons/home.svg";
import fileIcon from "@/assets/icons/file.svg";
import medicalFileIcon from "@/assets/icons/medical-file.svg";
import chartbarLineIcon from "@/assets/icons/chart-bar-line.svg";
import reportIcon from "@/assets/icons/report.svg";
import usersIcon from "@/assets/icons/user-multiple.svg";

const NavMenu = () => {
	const menuItems = [
		{ id: 1, label: "Dashboard", icon: homeIcon, path: "/" },
		{
			id: 2,
			label: "Perspectives",
			icon: medicalFileIcon,
			path: "/perspectives",
		},
		{ id: 3, label: "Tasks", icon: chartbarLineIcon, path: "/tasks" },
		{ id: 4, label: "Documents", icon: fileIcon, path: "/documents" },
		{ id: 5, label: "Reports", icon: reportIcon, path: "/reports" },
		{
			id: 6,
			label: "Users & Roles",
			icon: usersIcon,
			path: "/users-roles",
		},
	];

	return (
		<NavMenuContainer>
			<MenuList>
				{menuItems.map((item) => (
					<MenuItem key={item.id}>
						<MenuLink
							as={NavLink}
							to={item.path}
							title={item.label}
							className={({ isActive }) =>
								isActive ? "active" : ""
							}>
							<MenuIcon src={item.icon} />
							<MenuLabel>{item.label}</MenuLabel>
						</MenuLink>
					</MenuItem>
				))}
			</MenuList>
		</NavMenuContainer>
	);
};

export default NavMenu;
