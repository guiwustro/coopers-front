import styled from "styled-components";

export const ContainerCenter = styled.div`
	/* margin-left: 140px; */

	& > .carroussel__background--green {
		height: 520px;
		background-color: var(--green-300);
		width: 1000px;
		z-index: -1;
		position: absolute;
		border-radius: 10px;
	}
	& > h2 {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 700;
		font-size: 3rem;
		line-height: 110%;
		padding-top: 80px;
		padding-left: 80px;
		/* identical to box height, or 53px */
		color: #ffffff;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;
export const CarrousselContainer = styled.div`
	display: flex;
	gap: 20px;
	padding-top: 40px;
	padding-left: 80px;
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
	width: 29px;
	height: 29px;
	border: none;
	background: ${(props) => (props.isActive ? "#4AC959" : "#C4C4C4")};
	border-radius: 100%;
`;
