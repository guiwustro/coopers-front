import styled from "styled-components";

export const StyledHome = styled.div`
	display: flex;
	max-width: 1440px;
`;

export const CardContainer = styled.div`
	padding-top: 40px;
	padding-bottom: 68px;
	position: relative;
	.to-do__grafismo {
		position: absolute;
		width: 10%;
	}
	@media screen and (min-width: 768px) {
		.to-do__grafismo {
			z-index: -1;
			width: auto;
		}
	}
`;

export const CardList = styled.div`
	display: flex;
	justify-content: center;
	gap: 41px;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: 900px) {
		align-items: flex-start;
		flex-direction: row;
	}
`;
