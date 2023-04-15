import greenRetangle from "../../assets/footer-green-bg.svg";
import greenRetangleMobile from "../../assets/green-line-mobile.svg";
import { ContainerFooter } from "./styles";
const Footer = () => {
	return (
		<ContainerFooter>
			<h5 className="footer__title">Need help?</h5>
			<p className="footer__title footer_email">coopers@coopers.pro</p>
			<p className="footer__copyright">© 2021 Coopers. All rights reserved.</p>
			<img src={greenRetangle} alt="greenRetangle" className="bg_green" />
			<img
				src={greenRetangleMobile}
				alt="greenRetangle"
				className="bg_green_mobile"
			/>
		</ContainerFooter>
	);
};

export default Footer;
