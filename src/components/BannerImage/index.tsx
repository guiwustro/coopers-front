import { Container } from "./styles";
import RoomImage from "../../assets/foto.png";
import BackGroundLogo from "../../assets/room-group.svg";
import RoomImageBanner from "../../assets/bg-photo.svg";
const BannerImage = () => {
	return (
		<Container>
			<img src={BackGroundLogo} alt="banner" className="container__image" />
		</Container>
		// 	<Container>
		// 	<div className="container__background">
		// 		<img
		// 			src={BackGroundLogo}
		// 			alt="banner-background"
		// 			className="container__background"
		// 		/>
		// 	</div>
		// 	<img src={RoomImage} alt="banner" className="container__image" />
		// </Container>
	);
};

export default BannerImage;
