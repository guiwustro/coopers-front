import Button from "../Button";
import CarrousselCard from "../CarrousselCard";
import {
	CarrousselContainer,
	CarrousselIndicators,
	Container,
	ContainerCenter,
	Indicator,
} from "./styles";
import ImageCarroussel1 from "../../assets/carrousel-image-1.png";
import ImageCarroussel2 from "../../assets/carrousel-image-2.png";
import ImageCarroussel3 from "../../assets/carrousel-image-3.png";
import { useState } from "react";

const CarrousselData = [
	{
		id: 1,
		description: "Organize your daily job enhance your life performance",
		image: ImageCarroussel1,
	},
	{
		id: 2,
		description:
			"Mark one activity as done makes your brain understands the power of doing.",
		image: ImageCarroussel2,
	},
	{
		id: 3,
		description:
			"Careful with missunderstanding the difference between a list of things and a list of desires.",
		image: ImageCarroussel3,
	},
];

const Carroussel = () => {
	const [activeIndicator, setActiveIndicator] = useState(0);
	const indicators = [0, 1, 2];
	return (
		<Container>
			<ContainerCenter>
				<div className="carroussel__background--green" />
				<h2>good things</h2>
				<CarrousselContainer>
					{CarrousselData.map((item, index) => (
						<CarrousselCard
							key={index}
							imageSrc={item.image}
							description={item.description}
							imageAlt={item.description}
						/>
					))}
				</CarrousselContainer>
				<CarrousselIndicators>
					{indicators.map((_, index) => {
						return (
							<Indicator
								key={index}
								isActive={index === activeIndicator}
								onClick={() => {
									setActiveIndicator(index);
								}}
							></Indicator>
						);
					})}
				</CarrousselIndicators>
			</ContainerCenter>
		</Container>
	);
};

export default Carroussel;
