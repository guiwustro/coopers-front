import styled from "styled-components";
import font from "../../fonts/SoleilRegular.otf";
export const Container = styled.div`
	position: relative;
	margin-right: 20px;
	width: 260px;
	border-radius: 16px;
	background-color: white;
	box-shadow: rgba(12, 41, 208, 0.16) 10px 9px 13px 0px;
	margin-bottom: 30px;
	.carroussel-card__image {
		height: 180px;
		object-fit: cover;
		border-top-right-radius: 16px;
		border-top-left-radius: 16px;
	}
	.logo_coopers {
		position: absolute;
		right: 10px;
		top: 152px;
	}

	@media screen and (min-width: 500px) {
		.carroussel-card__image {
			height: 200px;
		}
		width: 360px;
		.logo_coopers {
			position: absolute;
			right: 20px;
			top: 170px;
		}
	}
`;

export const CarrousselContainer = styled.div``;
export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	height: 400px;
	@media screen and (min-width: 500px) {
		height: 430px;
	}
`;

export const Description = styled.div`
	@font-face {
		font-family: "Soleil";
		src: url(${font}) format("opentype");
		font-weight: 400;
		font-style: normal;
	}
	display: flex;
	flex-direction: column;
	padding-left: 32px;
	& > span {
		border: 1px solid #9499b3;
		border-radius: 16px;
		padding: 6px 12px;
		gap: 10px;
		font-family: "Soleil";
		font-size: 1rem;
		line-height: 120%;
		width: 86px;
		text-align: center;
		color: #9499b3;
	}
	& > h4 {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 500;
		font-size: 0.9rem;
		line-height: 120%;
		color: #312f4f;
		padding-top: 16px;
		max-width: 296px;
	}
	& > a {
		font-family: "Soleil";
		font-style: normal;
		font-weight: 700;
		font-size: 16px;
		line-height: 150%;
		color: #4ac959;
		position: absolute;
		left: 32px;
		bottom: 23px;
	}

	@media screen and (min-width: 500px) {
		& > h4 {
			font-size: 1.125rem;
		}
	}
`;
