import styled from "styled-components";
import blackBackGround from "../../assets/bg-black-horizontal.png";
import blackBackGroundBigScreen from "../../assets/bg-black-bigscreen.svg";
interface ITaskCardProps {
	borderColor: "orange" | "green";
}

export const ContainerBackGround = styled.div`
	width: 100vw;
	background-image: url(${blackBackGround});
	background-size: cover;
	height: 420px;
	z-index: -3;
	position: relative;

	@media screen and (min-width: 1441px) {
		background-image: url(${blackBackGroundBigScreen});
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	& > p {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 500;
		font-size: 1.3rem;
		line-height: 29px;
		text-align: center;
		max-width: 600px;
		color: #ffffff;
		padding: 32px 20px 0px 20px;
	}
`;
export const Title = styled.div`
	padding-top: 80px;
	padding-top: 125px;
	& > h2 {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 600;
		font-size: 3rem;
		color: #ffffff;
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		& > h2 {
			font-size: 3.75rem;
			line-height: 60px;
		}
		& > p {
			font-size: 1.5rem;
		}
	}
`;
