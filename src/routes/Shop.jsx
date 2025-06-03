import styled from "styled-components";
import { useOutletContext, useParams } from "react-router-dom";
import { Container } from "../Components/Container.styled";
import Product from "../Components/Product";
import useProducts from "../hooks/useProducts";

const Heading = styled.h1`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.xxl} 0;
  font-size: ${({ theme }) => theme.spacing.xxl};
  font-family: serif;
`;

const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.lg};
`;

function Shop() {
  const { data, loading, err } = useProducts();
  const { cartProducts, setCartProducts } = useOutletContext();
  let products;

  const categories = ["men", "women", "jeweley", "electronics"];

  const { filter } = useParams();

  if (!filter) {
    products = data;
  } else if (categories.includes(filter)) {
    const category =
      filter == "men"
        ? "men's clothing"
        : filter == "women"
        ? "women's clothing"
        : filter;

    products = data.filter((item) => item.category == category);
  } else {
    products = data.filter((item) =>
      item.title.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }

  const handleAdding = (item) => {
    const newArray = cartProducts;
    newArray.push(item);
    setCartProducts(newArray);
  };

  if (loading) return "loading";
  if (err) return "err";
  return (
    <section>
      <Container>
        <Heading>Our Products</Heading>
        <Products>
          {products.map((product) => (
            <Product
              item={product}
              key={product.id}
              handleAdding={handleAdding}
            />
          ))}
        </Products>
      </Container>
    </section>
  );
}

export default Shop;
