import styled from "styled-components";
import { flexBetween } from "../../theme";

export const DashboardContainer = styled.div`
	min-height: 100vh;
	background: linear-gradient(to bottom, #f5f7fa 0%, #f0f2f5 100%);
	padding: 1rem 1.4375rem;
	gap: 1rem;
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		padding: 1rem;
		margin-top: 3.75rem;
	}
`;
