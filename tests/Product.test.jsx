import { vi, describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "../src/Components/Product";
import themes from "../src/themes/themes";
import { ThemeProvider } from "styled-components";
describe("Product component", () => {
  const mockItem = {
    image: "https://example.com/image.png",
    category: "Electronics",
    title: "Wireless Headphones",
    price: 99.99,
  };

  const mockHandleAdding = vi.fn();

  beforeEach(() => {
    render(
      <ThemeProvider theme={themes}>
        <Product item={mockItem} handleAdding={mockHandleAdding} />
      </ThemeProvider>
    );
    mockHandleAdding.mockClear();
  });

  it("renders product details", () => {
    expect(screen.getByRole("img")).toHaveAttribute("src", mockItem.image);
    expect(screen.getByText(mockItem.category)).toBeInTheDocument();
    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockItem.price}$`)).toBeInTheDocument();
  });

  it("increases and decreases quantity correctly", () => {
    const plusButton = screen.getByText("+");
    const minusButton = screen.getByText("-");

    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(plusButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    fireEvent.click(minusButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("calls handleAdding the correct number of times when 'Add To Cart' is clicked", () => {
    const plusButton = screen.getByText("+");
    const addToCartButton = screen.getByText(/add to cart/i);

    fireEvent.click(plusButton);
    fireEvent.click(plusButton); // quantity = 3

    fireEvent.click(addToCartButton);

    expect(mockHandleAdding).toHaveBeenCalledTimes(3);
    expect(mockHandleAdding).toHaveBeenCalledWith(mockItem);
  });

  it("resets quantity to 0 after adding to cart", () => {
    const plusButton = screen.getByText("+");
    const addToCartButton = screen.getByText(/add to cart/i);

    fireEvent.click(plusButton);
    fireEvent.click(addToCartButton);

    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
