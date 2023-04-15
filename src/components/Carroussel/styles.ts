import styled from "styled-components";

export const ContainerCenter = styled.div`
	& > .carroussel__background--green {
		height: 420px;
		background-color: var(--green-300);
		width: 280px;
		margin-left: 10px;
		z-index: -1;
		position: absolute;
		border-radius: 10px;
	}
	& > h2 {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 700;
		font-size: 2rem;
		line-height: 110%;
		padding-top: 40px;
		padding-left: 40px;
		color: #ffffff;
	}
	@media screen and (min-width: 500px) {
		& > .carroussel__background--green {
			width: 380px;
			margin: 0;
		}
		& > h2 {
			font-size: 2.5rem;

			padding-left: 80px;
		}
	}
	@media screen and (min-width: 1024px) {
		& > h2 {
			padding-top: 80px;
			font-size: 3rem;
			padding-left: 80px;
		}
		& > .carroussel__background--green {
			width: 620px;
			height: 520px;
		}
	}

	@media screen and (min-width: 1260px) {
		& > .carroussel__background--green {
			width: 1000px;
		}
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;
export const CarrousselContainer = styled.div`
	display: flex;
	padding-top: 40px;
	margin-left: 20px;
	overflow-x: hidden;
	scroll-behavior: smooth;
	max-width: 280px;
	@media screen and (min-width: 500px) {
		margin-left: 80px;
		max-width: 380px;
	}
	@media screen and (min-width: 1024px) {
		max-width: 760px;
	}
	@media screen and (min-width: 1260px) {
		max-width: 1140px;
	}
`;

export const CarrousselIndicators = styled.div`
	gap: 20px;
	justify-content: center;
	display: flex;
	max-width: 1230px;
`;

interface IIndicatorProps {
	isActive: boolean;
}
export const Indicator = styled.button<IIndicatorProps>`
	width: 15px;
	height: 15px;
	border: none;
	background: ${(props) => (props.isActive ? "#4AC959" : "#C4C4C4")};
	border-radius: 100%;
	@media screen and (min-width: 768px) {
		width: 29px;
		height: 29px;
	}
`;
