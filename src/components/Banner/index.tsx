import BannerImage from "../BannerImage";
import Button from "../Button";
import { Container, LeftSideContainer } from "./styles";

const Banner = () => {
	return (
		<Container>
			<LeftSideContainer>
				<h1 className="main__tittle">
					<span className="main__title--black">Organize</span>
					<span className="main__title--green">your daily jobs</span>
				</h1>
				<h3>The only way to get things done</h3>
				<Button
					title="Go to To-do list"
					backgroundColor="green"
					width={300}
					height={64}
					padding="17px 59px 18px 55px"
					fontSize="1.5rem"
					borderRadius="10px"
				/>
			</LeftSideContainer>
			<BannerImage />
		</Container>
	);
};

export default Banner;