// Status colors for progress steps
export const ProgresStatusColors = {
	notStarted: "#94a3b8", // Not Started - gray
	inProgress: "#f59e0b", // In Progress - amber
	completed: "#10b981", // Completed - green
	partiallyUploaded: "#1e40af", // Partially Uploaded - dark blue
	fullyUploaded: "#3b82f6", // Fully Uploaded - blue
	delayed: "#ef4444", // Delayed - red
};

export const mockPerspectivesList = [
	{
		id: 1,
		title: "Strategy And Planning",
		themes: 3,
		status: "On Track",
		progress: 97.78,
		cards: [
			{
				title: "Strategic Planning",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "completed" },
				],
			},
			{
				title: "Goal Setting",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "partiallyUploaded" },
				],
			},
		],
	},
	{
		id: 2,
		title: "Organization And Culture",
		themes: 3,
		status: "On Track",
		progress: 70.83,
		cards: [
			{
				title: "Organizational Structure",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "inProgress" },
				],
			},
			{
				title: "Culture Development",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "fullyUploaded" },
				],
			},
			{
				title: "Change Management",
				steps: [
					{ id: 1, status: "inProgress" },
					{ id: 2, status: "notStarted" },
				],
			},
		],
	},
	{
		id: 3,
		title: "Operations And Execution",
		themes: 1,
		status: "On Track",
		progress: 80.0,
		cards: [
			{
				title: "Process Optimization",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "completed" },
					{ id: 4, status: "fullyUploaded" },
				],
			},
		],
	},
	{
		id: 4,
		title: "Business Continuity",
		themes: 2,
		status: "On Track",
		progress: 97.78,
		cards: [
			{
				title: "Risk Management",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
				],
			},
			{
				title: "Disaster Recovery",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "completed" },
				],
			},
		],
	},
	{
		id: 5,
		title: "Information Technology",
		themes: 3,
		status: "On Track",
		progress: 70.83,
		cards: [
			{
				title: "IT Infrastructure",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "inProgress" },
				],
			},
			{
				title: "Security",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "fullyUploaded" },
				],
			},
			{
				title: "Digital Transformation",
				steps: [
					{ id: 1, status: "inProgress" },
					{ id: 2, status: "notStarted" },
				],
			},
		],
	},
	{
		id: 6,
		title: "Comprehensive Governance",
		themes: 1,
		status: "On Track",
		progress: 80.0,
		cards: [
			{
				title: "Governance Framework",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "partiallyUploaded" },
				],
			},
		],
	},
	{
		id: 7,
		title: "Channels And Services",
		themes: 2,
		status: "On Track",
		progress: 97.78,
		cards: [
			{
				title: "Service Delivery",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
				],
			},
			{
				title: "Channel Strategy",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "completed" },
				],
			},
		],
	},
	{
		id: 8,
		title: "Beneficiary Centralization",
		themes: 3,
		status: "Not Started",
		progress: 0,
		cards: [
			{
				title: "Beneficiary Database",
				steps: [
					{ id: 1, status: "notStarted" },
					{ id: 2, status: "notStarted" },
				],
			},
			{
				title: "Central Registry",
				steps: [
					{ id: 1, status: "notStarted" },
					{ id: 2, status: "notStarted" },
					{ id: 3, status: "notStarted" },
				],
			},
		],
	},
	{
		id: 9,
		title: "Government Data",
		themes: 3,
		status: "On Track",
		progress: 80.0,
		cards: [
			{
				title: "Data Integration",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "completed" },
					{ id: 3, status: "inProgress" },
				],
			},
			{
				title: "Data Quality",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "fullyUploaded" },
				],
			},
		],
	},
	{
		id: 10,
		title: "Research And Innovation",
		themes: 2,
		status: "At Risk",
		progress: 20.78,
		cards: [
			{
				title: "Innovation Pipeline",
				steps: [
					{ id: 1, status: "completed" },
					{ id: 2, status: "delayed" },
				],
			},
			{
				title: "Research Projects",
				steps: [
					{ id: 1, status: "inProgress" },
					{ id: 2, status: "notStarted" },
				],
			},
		],
	},
];
