import styled from "styled-components";

export const Container = styled.div`
	margin-top: 55px;
	position: relative;
	.container__image {
		position: relative;
		z-index: -1;
	}
	.container__background {
		img {
			position: absolute;
			top: -125px;
			right: -80px;
			z-index: -2;
		}
	}
`;
