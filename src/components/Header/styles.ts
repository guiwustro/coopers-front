import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 54px 40px 0;
	& > img {
		width: 150px;
	}
	@media screen and (min-width: 500px) {
		margin: 54px 80px 0;
	}
	@media screen and (min-width: 600px) {
		& > img {
			width: auto;
		}
	}
`;
