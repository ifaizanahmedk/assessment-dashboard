import LegendItem from "./LegendItem";
import {
	Wrapper,
	Header,
	Legend,
	Grid,
	Column,
	ColumnHeader,
	PercentageBadge,
	ColumnContent,
	CardLink,
	CardTitle,
	StepsWrapper,
	StepCircle,
	Title,
} from "./styled";

import { mockPerspectivesList, ProgresStatusColors } from "@/data/mockData";

const ProjectStatus = () => {
	return (
		<Wrapper>
			<Header>
				<Title>Progress Status</Title>

				<Legend>
					<LegendItem
						color={ProgresStatusColors.notStarted}
						label="Not Started"
					/>
					<LegendItem
						color={ProgresStatusColors.inProgress}
						label="In Progress"
					/>
					<LegendItem
						color={ProgresStatusColors.completed}
						label="Completed"
					/>
					<LegendItem
						color={ProgresStatusColors.partiallyUploaded}
						label="Partially Uploaded"
					/>
					<LegendItem
						color={ProgresStatusColors.fullyUploaded}
						label="Fully Uploaded"
					/>
					<LegendItem
						color={ProgresStatusColors.delayed}
						label="Delayed"
					/>
				</Legend>
			</Header>

			<Grid>
				{mockPerspectivesList?.map((col, idx) => (
					<Column key={idx}>
						<ColumnHeader>
							<h3>{col.title}</h3>
							<PercentageBadge>{col.progress}%</PercentageBadge>
						</ColumnHeader>

						<ColumnContent>
							{col.cards.map((card, cIdx) => (
								<CardLink to="/perspectives" key={cIdx}>
									<CardTitle>{card.title}</CardTitle>

									<StepsWrapper>
										{card.steps.map((step) => (
											<StepCircle
												key={step.id}
												bg={
													ProgresStatusColors[
														step.status
													]
												}>
												{step.id}
											</StepCircle>
										))}
									</StepsWrapper>
								</CardLink>
							))}
						</ColumnContent>
					</Column>
				))}
			</Grid>
		</Wrapper>
	);
};

export default ProjectStatus;
