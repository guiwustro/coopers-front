import styled from "styled-components";

export const Container = styled.div`
	margin-top: 55px;
	position: relative;
	width: 100%;
	img {
		width: 100%;
	}
	@media screen and (min-width: 900px) {
		img {
			position: absolute;
			z-index: -1;
			top: -125px;
			right: -80px;
		}
	}
	@media screen and (min-width: 1220px) {
		img {
			width: auto;
			top: -125px;
			right: -80px;
		}
	}
`;
