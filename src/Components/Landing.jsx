import styled from "styled-components";
import { Container } from "./Container.styled";
import Button from "./Button.styled";
import { Link } from "react-router-dom";
import returnSvg from "../assets/return.svg";
import media from "../themes/media";

const LandingSection = styled.section``;

const Heading = styled.h1`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  font-size: ${({ theme }) => theme.spacing.xxl};
  font-family: serif;
  span {
    color: ${({ theme }) => theme.colors.primaryVariant};
  }
`;

const Pargraph = styled.p`
  text-align: center;
  max-width: 650px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 auto;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Card = styled.div`
  width: calc((100% - (${({ theme }) => theme.spacing.lg} * 2)) / 3);
  border-radius: ${({ theme }) => theme.spacing.sm};
  border: 1px solid gray;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: 300ms;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 50px;
  }
  h3 {
    font-family: serif;
  }
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ${media.mobile} {
    width: 100%;
  }
`;

function Landing() {
  return (
    <LandingSection>
      <Container>
        <Heading>
          Welcome To <span>Shopping Cart</span>
        </Heading>
        <Pargraph>
          Discover our amazing collection of high-quality products. From
          electronics to fashion, we have something for everyone!
        </Pargraph>
        <Center>
          <Button>
            <Link to="/shop">Shop Now !</Link>
          </Button>
        </Center>
        <Cards>
          <Card>
            <img src={returnSvg} />
            <h3>Easy Returns</h3>
            <p>30-day hassle-free return policy</p>
          </Card>
          <Card>
            <img src={returnSvg} />
            <h3>Easy Returns</h3>
            <p>30-day hassle-free return policy</p>
          </Card>
          <Card>
            <img src={returnSvg} />
            <h3>Easy Returns</h3>
            <p>30-day hassle-free return policy</p>
          </Card>
        </Cards>
      </Container>
    </LandingSection>
  );
}

export default Landing;
