import { useState, useEffect, useRef } from "react";
import {
	ProfileContainer,
	ProfileAvatar,
	ProfileDropdownBtn,
	ProfileDropdownMenu,
	ProfileHeader,
	ProfileInfo,
	ProfileName,
	ProfileEmail,
	ProfileMenu,
	ProfileMenuItem,
	ProfileDivider,
} from "./styled";

import defaultAvatar from "@/assets/images/default-avatar.png";
import caretDownIcon from "@/assets/icons/caret-down.svg";

const ProfileDropdown = ({ userName = "User", onLogout, onSettings }) => {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [isOpen]);

	const handleAvatarClick = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = () => {
		setIsOpen(false);
		if (onLogout) {
			onLogout();
		}
	};

	const handleSettings = () => {
		setIsOpen(false);
		if (onSettings) {
			onSettings();
		}
	};

	const getInitials = (name) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase()
			.slice(0, 2);
	};

	return (
		<ProfileContainer ref={containerRef}>
			<ProfileDropdownBtn onClick={handleAvatarClick}>
				<ProfileAvatar
					src={defaultAvatar}
					aria-label="Profile menu"
					title={userName}
				/>
				<ProfileName>{userName}</ProfileName>
				<img src={caretDownIcon} alt="" className="caret-down" />
			</ProfileDropdownBtn>

			{isOpen && (
				<ProfileDropdownMenu>
					<ProfileHeader>
						<ProfileInfo>
							<ProfileEmail>user@example.com</ProfileEmail>
						</ProfileInfo>
					</ProfileHeader>

					<ProfileMenu>
						<ProfileMenuItem onClick={handleSettings}>
							Settings
						</ProfileMenuItem>
						<ProfileMenuItem>Profile</ProfileMenuItem>
						<ProfileMenuItem>Help</ProfileMenuItem>
						<ProfileDivider />
						<ProfileMenuItem isLogout onClick={handleLogout}>
							Logout
						</ProfileMenuItem>
					</ProfileMenu>
				</ProfileDropdownMenu>
			)}
		</ProfileContainer>
	);
};

export default ProfileDropdown;
