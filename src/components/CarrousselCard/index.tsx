import { Link } from "react-router-dom";
import IconCoopers from "../../assets/icone-coopers.svg";
import { CardContainer, Container, Description } from "./styles";
interface ICarrousselCard {
	description: string;
	imageSrc: string;
	imageAlt: string;
}

const CarrousselCard = ({
	imageSrc,
	description,
	imageAlt,
}: ICarrousselCard) => {
	return (
		<Container>
			<img src={IconCoopers} alt="Logo coopers" className="logo_coopers" />
			<CardContainer>
				<img src={imageSrc} alt={imageAlt} className="carroussel-card__image" />
				<Description>
					<span>function</span>
					<h4>{description}</h4>
					<Link to="#">read more</Link>
				</Description>
			</CardContainer>
		</Container>
	);
};

export default CarrousselCard;
