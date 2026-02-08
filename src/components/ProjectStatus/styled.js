import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, spacing, typography } from "../../theme";

export const Wrapper = styled.div`
	padding: ${spacing.lg} ${spacing.md} ${spacing.lg};
	background-color: ${colors.white};
	border-radius: 0.625rem;
	border: 1px solid ${colors.border};
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: ${spacing.lg};

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

export const Title = styled.h3`
	font-weight: 700;
	font-size: ${typography.fontSize.md};
	line-height: 1;
	color: ${colors.primary};
`;

export const Legend = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.125rem;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${spacing.sm};

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(5, 1fr);
	}

	@media (min-width: 1280px) {
		grid-template-columns: repeat(10, 1fr);
	}

	@media (min-width: 1536px) {
		gap: 20px;
	}
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacing.sm};
`;

export const ColumnHeader = styled.div`
	background: ${colors.primary};
	border-radius: 0.625rem;
	padding: ${spacing.md} 6px 0.75rem;
	min-height: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	h3 {
		color: ${colors.white};
		font-size: ${typography.fontSize.sm};
		font-weight: 700;
		margin-bottom: 8px;
		line-height: 1.2;
		letter-spacing: 0.04em;
		font-weight: 700;
		font-size: ${typography.fontSize.sm};
		line-height: 1.4;
	}
`;

export const PercentageBadge = styled.span`
	background: rgba(255, 255, 255, 0.12);
	color: white;
	font-size: 14px;
	font-weight: 700;
	padding: 4px 12px;
	border-radius: 999px;
`;

export const ColumnContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 100%;
`;

export const CardLink = styled(Link)`
	background: #ffffff;
	border: 1px solid #f1f5f9;
	border-radius: 12px;
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	text-decoration: none;
	transition: border-color 0.2s ease;

	&:hover {
		border-color: #fbbf24;
	}
`;

export const CardTitle = styled.p`
	color: #1e2d4d;
	font-size: 10px;
	font-weight: 600;
	text-align: center;
	line-height: 1.2;
	margin-bottom: 16px;
`;

export const StepsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 8px;
	padding-top: 20px;
`;

export const StepCircle = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 999px;
	background: ${({ bg }) => bg};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	color: white;
`;
