import styled from "styled-components";
import { borderRadius, colors, spacing, typography } from "../../theme";

export const Wrapper = styled.div`
	padding: ${spacing.sm} ${spacing.md} ${spacing.lg};
	margin-bottom: ${spacing.md};
	background-color: ${colors.white};
	border-radius: 0.625rem;
	border: 1px solid ${colors.border};
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h3`
	font-weight: 700;
	font-size: ${typography.fontSize.lg};
	line-height: 1;
	color: ${colors.primary};
	margin: 0;
`;

export const YearButton = styled.button`
	background-color: ${colors.white};
	border: 1px solid ${colors.border};
	border-radius: 0.625rem;
	padding: ${spacing.sm} ${spacing.md};
	color: ${colors.primary};
	line-height: 1.25;
	display: flex;
	align-items: center;
	gap: 0.875rem;
	cursor: pointer;
`;

export const TimelineContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: ${spacing.lg};
`;

export const ProgressBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 0.875rem;
	background: #ecf0f1;
	z-index: 1;
	border-radius: ${borderRadius.full};
`;

export const ProgressFill = styled.div`
	position: absolute;
	width: 55%;
	height: 0.875rem;
	background-color: ${colors.success};
	z-index: 2;
	border-radius: ${borderRadius.full};
`;

export const StepWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	z-index: 3;
	position: relative;
	width: 120px;
`;

export const StepDot = styled.div`
	width: 0.625rem;
	height: 0.625rem;
	border-radius: ${borderRadius.full};
	background-color: ${({ active }) =>
		active ? colors.white : colors.danger};
	margin: 2px;
`;

export const StepDate = styled.span`
	color: ${colors.textLight};
	margin-bottom: 0.375rem;
	font-weight: 400;
	font-size: ${typography.fontSize.base};
	line-height: 1.2;
	margin-top: 1rem;
`;

export const StepLabel = styled.span`
	color: ${colors.primary};
	font-weight: 500;
	font-size: ${typography.fontSize.base};
	line-height: 1.2;
`;
