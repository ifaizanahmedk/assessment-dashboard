import { useState, useEffect, useRef } from "react";
import {
	NotificationContainer,
	NotificationButton,
	NotificationBadge,
	NotificationDropdown,
	NotificationHeader,
	NotificationList,
	NotificationItem,
	NoNotifications,
} from "./styled";
import notificationIcon from "@/assets/icons/notifications.svg";

const NotificationIcon = ({ notificationCount = 0, onNotificationClick }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setShowDropdown(false);
			}
		};

		if (showDropdown) {
			document.addEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [showDropdown]);

	const handleClick = () => {
		setShowDropdown(!showDropdown);
		if (onNotificationClick) {
			onNotificationClick();
		}
	};

	return (
		<NotificationContainer ref={containerRef}>
			<NotificationButton
				onClick={handleClick}
				aria-label="Notifications">
				<img src={notificationIcon} alt="notifications" />
				{notificationCount > 0 && <NotificationBadge />}
			</NotificationButton>

			{showDropdown && (
				<NotificationDropdown>
					<NotificationHeader>
						<h3>Notifications</h3>
					</NotificationHeader>
					<NotificationList>
						{notificationCount === 0 ? (
							<NoNotifications>
								No new notifications
							</NoNotifications>
						) : (
							<>
								<NotificationItem>
									<p>
										You have {notificationCount} new
										notification(s)
									</p>
								</NotificationItem>
							</>
						)}
					</NotificationList>
				</NotificationDropdown>
			)}
		</NotificationContainer>
	);
};

export default NotificationIcon;
