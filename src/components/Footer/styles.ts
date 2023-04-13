import styled from "styled-components";
import blackBackGround from "../../assets/bg-black-horizontal.png";
export const ContainerFooter = styled.footer`
	width: 100vw;
	background-image: url(${blackBackGround});
	background-size: cover;
	height: 246px;
	margin-top: 38px;
	/* z-index: -3; */
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-direction: column;
	color: #ffffff;
	gap: 18px;

	& > .footer__copyright {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 1.0625rem;
	}
	& > .footer_email {
		padding-top: 10px;
	}
	& > .footer__title {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.125rem;
		/* identical to box height, or 75% */

		color: #ffffff;
	}
`;
