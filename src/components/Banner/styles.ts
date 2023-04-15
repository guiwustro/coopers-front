import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	margin: 0 40px;

	@media screen and (min-width: 500px) {
		margin: 0 80px;
	}

	@media screen and (min-width: 900px) {
		flex-direction: row;
		padding-bottom: 75px;
	}
`;

export const LeftSideContainer = styled.div`
	& > .main__title {
		font-family: "Montserrat";
		font-weight: 700;
		font-size: 3rem;
		display: flex;
		flex-direction: column;
		margin-top: 64px;
		color: var(--black);
		& > .main__title--green {
			color: var(--green-200);
			font-weight: 400;
			font-size: 2.5rem;
		}
	}
	& > h3 {
		padding: 26px 0 44px 0;

		font-family: "Montserrat";
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.5rem;
		color: #000000;
	}
	@media screen and (min-width: 500px) {
		& > .main__title {
			font-size: 5rem;
			line-height: 4rem;
			margin-top: 104px;
			& > .main__title--green {
				font-size: 3.75rem;
			}
		}
		& > h3 {
			padding: 56px 0 44px 0;
		}
	}
`;
