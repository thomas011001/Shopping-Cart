import styled from "styled-components";
import media from "../themes/media";
import { useState } from "react";
import Button from "./Button.styled";

const StyledProduct = styled.div`
  width: calc((100% - (${({ theme }) => theme.spacing.lg} * 2)) / 3);
  border-radius: ${({ theme }) => theme.spacing.sm};
  border: 1px solid gray;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: 300ms;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-height: 450px;
  &:hover {
    transform: translateY(-20px);
  }
  h4 {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  h3 {
    font-family: serif;
    text-align: center;
  }

  img {
    width: 100px;
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }

  ${media.laptop} {
    width: calc((100% - (${({ theme }) => theme.spacing.lg} * 2)) / 2);
  }

  ${media.mobile} {
    width: 100%;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const Price = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
  font-weight: 700;
  font-size: x-large;
`;

function Product({ item, handleAdding }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <StyledProduct>
      <img src={item.image} />
      <h4>{item.category}</h4>
      <h3>{item.title}</h3>
      <Price>{item.price}$</Price>
      <Buttons>
        <Button onClick={() => setQuantity(quantity - 1)}>-</Button>
        {quantity}
        <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
      </Buttons>
      <Button
        onClick={() => {
          for (let i = 0; i < quantity; i++) {
            handleAdding(item);
          }
          setQuantity(0);
        }}
      >
        Add To Cart
      </Button>
    </StyledProduct>
  );
}

export default Product;
