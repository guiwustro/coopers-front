import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 24px 40px 0;
	& > .header__buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	& > img {
		width: 150px;
	}
	@media screen and (min-width: 500px) {
		margin: 54px 80px 0;
	}
	@media screen and (min-width: 600px) {
		& > .header__buttons {
			flex-direction: row;
		}
	}
	@media screen and (min-width: 768px) {
		& > img {
			width: auto;
		}
	}
	@media screen and (min-width: 1500px) {
		max-width: 1440px;
		margin: 54px auto 0;
	}
`;
