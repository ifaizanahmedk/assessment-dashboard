import { DashboardContainer } from "./styled";

import ProjectTimeline from "@/components/ProjectTimeline/ProjectTimeline";
import StatCard from "@/components/StatCard";

import chartbarLineRedIcon from "@/assets/icons/chart-bar-line-red.svg";
import fileUploadRedIcon from "@/assets/icons/file-upload-red.svg";
import fileVerifiedRedIcon from "@/assets/icons/file-verified-red.svg";
import folderCheckRedIcon from "@/assets/icons/folder-check-red.svg";
import folderRedIcon from "@/assets/icons/folder-red.svg";
import securityRedIcon from "@/assets/icons/security-red.svg";

const statsData = [
	{ value: "78.65%", label: "Overall Progress", icon: chartbarLineRedIcon },
	{ value: "95", label: "Total Criteria", icon: folderRedIcon },
	{ value: "52", label: "Completed Criteria", icon: folderCheckRedIcon },
	{ value: "386", label: "Evidence Documents", icon: securityRedIcon },
	{ value: "302", label: "Evidence (Completed)", icon: fileVerifiedRedIcon },
	{ value: "258", label: "Uploaded To DGA", icon: fileUploadRedIcon },
];

function Dashboard() {
	return (
		<>
			<DashboardContainer>
				<ProjectTimeline />
				<StatCard items={statsData} />
			</DashboardContainer>
		</>
	);
}

export default Dashboard;
