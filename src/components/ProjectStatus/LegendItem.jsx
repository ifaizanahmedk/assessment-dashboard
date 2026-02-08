import styled from "styled-components";
import { borderRadius, colors, spacing, typography } from "@/theme";

const Item = styled.div`
	display: flex;
	align-items: center;
	gap: ${spacing.xs};
	font-weight: 400;
	font-size: ${typography.fontSize.base};
	line-height: 1.2;
	color: ${colors.primary};
`;

const Dot = styled.span`
	width: 0.5rem;
	height: 0.5rem;
	border-radius: ${borderRadius.full};
	background: ${({ color }) => color};
`;

const LegendItem = ({ color, label }) => (
	<Item>
		<Dot color={color} />
		<span>{label}</span>
	</Item>
);

export default LegendItem;
