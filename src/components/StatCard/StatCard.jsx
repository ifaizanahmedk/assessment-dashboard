import React from "react";
import {
	Container,
	Card,
	TextWrapper,
	Value,
	Label,
	IconPlaceholder,
} from "./styled";

const StatCard = ({ items }) => {
	return (
		<Container>
			{items.map((item, index) => (
				<Card key={index}>
					<TextWrapper>
						<Value>{item.value}</Value>
						<Label>{item.label}</Label>
					</TextWrapper>
					<IconPlaceholder src={item.icon} />
				</Card>
			))}
		</Container>
	);
};

export default StatCard;
