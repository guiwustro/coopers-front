import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(12, 12, 12, 0.8);
`;

export const AlertBody = styled.div`
	background-color: white;
	& > h3 {
		font-family: "Montserrat";
		font-size: 1.25rem;
		color: #000000;
		font-weight: 700;
		padding: 1rem;
	}
	& > p {
		padding: 0rem 1rem 1rem 1rem;
	}

	& > .alert__buttons {
		display: flex;
		justify-content: flex-end;
		gap: 10px;
		& > button {
			color: white;
			padding: 0.5rem;
			border-radius: 10px;
			font-family: "Montserrat";
			font-size: 0.8rem;
			font-weight: 700;
		}
		& > .cancel__button {
			background-color: green;
		}

		& > .confirm__button {
			background-color: red;
		}
	}
	width: 300px;
	display: flex;
	flex-direction: column;
	padding: 1rem;

	@media screen and (min-width: 768px) {
		width: 300px;
	}
`;
