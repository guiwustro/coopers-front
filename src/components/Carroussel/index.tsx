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
import { useEffect, useRef, useState } from "react";

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
	{
		id: 4,
		description: "Image 4.",
		image: ImageCarroussel3,
	},
	{
		id: 5,
		description: "Image 5.",
		image: ImageCarroussel3,
	},
	{
		id: 6,
		description: "Image 6.",
		image: ImageCarroussel3,
	},
	{
		id: 7,
		description: "Image 7.",
		image: ImageCarroussel3,
	},
	{
		id: 8,
		description: "Image 8.",
		image: ImageCarroussel3,
	},
];

const Carroussel = () => {
	const [activeIndicator, setActiveIndicator] = useState(0);
	let indicators = [...CarrousselData];
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current) {
			ref.current.style.transition = "all 0.2s ease-in-out";
			ref.current.scrollLeft = ref.current!.offsetWidth * activeIndicator;
		}
		// ref.current.style.transform = `translateX(-${activeIndicator}00%)`;
	}, [activeIndicator]);

	const actualWidthScreen = document.body.offsetWidth;

	if (actualWidthScreen >= 1024) {
		indicators = indicators.slice(0, CarrousselData.length / 2);
	}
	if (actualWidthScreen >= 1260) {
		indicators = indicators.slice(0, CarrousselData.length / 3 + 1);
	}

	return (
		<Container>
			<ContainerCenter>
				<div className="carroussel__background--green" />
				<h2>good things</h2>
				<CarrousselContainer ref={ref}>
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
