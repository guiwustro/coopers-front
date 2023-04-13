import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 80px;
	padding-bottom: 75px;
`;

export const LeftSideContainer = styled.div`
	& > .main__tittle {
		font-family: "Montserrat";
		font-weight: 700;
		font-size: 5rem;
		line-height: 4rem;
		display: flex;
		flex-direction: column;
		line-height: 64px;
		margin-top: 104px;
		color: var(--black);
		& > .main__title--green {
			color: var(--green-200);
			font-weight: 400;
			font-size: 3.75rem;
		}
	}
	& > h3 {
		padding: 56px 0 44px 0;
		font-family: "Montserrat";
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.5rem;
		/* identical to box height, or 100% */

		color: #000000;
	}
`;
