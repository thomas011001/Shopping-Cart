import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../Components/Container.styled";

const Heading = styled.h1`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  text-align: left;
  font-size: ${({ theme }) => theme.spacing.xxl};
  font-family: serif;
`;

const StyledCart = styled.div`
  margin-top: 50px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xxl};
  gap: ${({ theme }) => theme.spacing.lg};
  transition: 300ms;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Orders = styled.div`
  display: flex;
  flex-direction: column;
`;

const Total = styled.div`
  text-align: right;
`;

const Order = styled.div``;

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
                  -----
                </>
              );
            })}
          </Orders>
          <Total>
            <h2>199$</h2>
          </Total>
        </StyledCart>
      </Container>
    </section>
  );
}

export default Cart;
