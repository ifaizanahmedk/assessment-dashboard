import {
	Header,
	ProgressBackground,
	ProgressFill,
	StepDate,
	StepDot,
	StepLabel,
	StepWrapper,
	Title,
	TimelineContainer,
	Wrapper,
	YearButton,
} from "./styled";

import chevronDownIcon from "@/assets/icons/caret-down.svg";

const ProjectTimeline = () => {
	const steps = [
		{ date: "Mar 17", label: "Kickoff Workshop", status: "done" },
		{ date: "March 18", label: "Data Collection", status: "done" },
		{ date: "May 8", label: "Initial Phase", status: "done" },
		{ date: "May 9-July 12", label: "Verification", status: "current" },
		{ date: "July 13", label: "Completion Reviews", status: "pending" },
		{ date: "August 21", label: "Cycle Conclusion", status: "pending" },
	];

	return (
		<Wrapper>
			<Header>
				<Title style={{ margin: 0 }}>Project Timeline</Title>
				<YearButton>
					2026 <img src={chevronDownIcon} alt="select year" />
				</YearButton>
			</Header>
			<TimelineContainer>
				<ProgressBackground /> <ProgressFill />
				{steps.map((step, idx) => {
					const isActive = step.status === "done";
					const isCurrent = step.status === "current";
					return (
						<StepWrapper key={idx}>
							<StepDot active={isActive} current={isCurrent} />
							<StepDate>{step.date}</StepDate>
							<StepLabel>{step.label}</StepLabel>
						</StepWrapper>
					);
				})}
			</TimelineContainer>
		</Wrapper>
	);
};

export default ProjectTimeline;
