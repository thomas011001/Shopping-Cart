import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../Components/Container.styled";
import media from "../themes/media";

const Heading = styled.h1`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  text-align: left;
  font-size: ${({ theme }) => theme.spacing.xxl};
  font-family: serif;

  ${media.mobile} {
    font-size: ${({ theme }) => theme.spacing.xl};
  }
`;

const StyledCart = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xxl};
  gap: ${({ theme }) => theme.spacing.lg};
  transition: 300ms;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  ${media.mobile} {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const Orders = styled.div`
  display: flex;
  flex-direction: column;
`;

const Total = styled.div`
  text-align: right;
  font-family: serif;
`;

const Order = styled.div`
  margin: 20px 0;
  font-weight: 800;
  font-size: large;
`;

const Hr = styled.hr`
  background-color: gray;
  height: 3px;
`;

function Cart() {
  const { cartProducts } = useOutletContext();

  return (
    <section>
      <Container>
        <StyledCart>
          <Heading>Your Cart</Heading>
          <Orders>
            {cartProducts.map((item) => {
              return (
                <>
                  <Order>{item.title}</Order>
                  <Hr />
                </>
              );
            })}
          </Orders>
          <Total>
            <h2>{cartProducts.reduce((sum, item) => sum + item.price, 0)}$</h2>
          </Total>
        </StyledCart>
      </Container>
    </section>
  );
}

export default Cart;
