import styled from "styled-components";
import { Row, colors, flexBetween, spacing, typography } from "../../theme";

export const Container = styled(Row)`
	display: flex;
	gap: 1rem;
`;

export const Card = styled.div`
	background-color: ${colors.white};
	border-radius: 0.625rem;
	padding: 0.75rem ${spacing.md} ${spacing.md};
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid ${colors.border};
	flex: 1;
	display: flex;
	align-items: flex-start;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const Value = styled.div`
	font-weight: 700;
	font-size: ${typography.fontSize["3xl"]};
	line-height: 1.5rem;
	color: ${colors.primary};
`;

export const Label = styled.div`
	font-size: 14px;
	font-weight: 500;
	color: ${colors.secondary};

	font-weight: 400;
	font-size: ${typography.fontSize.base};
	line-height: 1rem;
`;

export const IconPlaceholder = styled.img`
	width: 1.5rem;
	height: 1.5rem;
`;
