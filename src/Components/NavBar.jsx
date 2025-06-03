import styled from "styled-components";
import { Container } from "./Container.styled";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button.styled";
import cartSvg from "../assets/cart.svg";
import { useState } from "react";
import media from "../themes/media";

const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h2`
  color: ${({ theme }) => theme.colors.textWhite};
`;

const Buttons = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};

  form {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${media.tablet} {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.secBackground};
    height: 100%;
    width: 100%;
    z-index: 100;
    left: 0;
    top: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.md};
    display: ${(props) => (props.$display ? "flex" : "none")};
  }
`;

const NavBarHeader = styled.nav`
  background-color: ${({ theme }) => theme.colors.secBackground};
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const Cart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = styled.input`
  height: ${({ theme }) => theme.spacing.xl};
  border: 1px white solid;
  background-color: #ffffffc7;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.spacing.sm};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${media.tablet} {
    width: 200px;
  }
`;

const Toggler = styled.button`
  width: 30px;
  height: ${({ theme }) => theme.spacing.lg};
  flex-direction: column;
  display: none;
  gap: 4.8px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  span {
    background-color: white;
    height: 4.8px;
  }

  ${media.tablet} {
    display: flex;
  }
`;

const NavFooter = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: 2px 1rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secBackground};
  a {
    width: calc((100% - 1rem) / 4);
    text-align: center;
    color: ${({ theme }) => theme.colors.textWhite};
    text-decoration: none;
  }

  ${media.mobile} {
    gap: 2px;
    a {
      width: calc((100% - 1rem) / 2);
    }
  }
`;

const Hr = styled.hr`
  background-color: ${({ theme }) => theme.colors.border};
`;

function NavBar() {
  const [search, setSearch] = useState("");
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop/${search}`);
    setSearch("");
  };

  return (
    <>
      <NavBarHeader>
        <NavContainer>
          <Brand>Shopping Cart</Brand>
          <div>
            <Toggler onClick={() => setDisplayMenu(true)}>
              <span></span>
              <span></span>
              <span></span>
            </Toggler>
            <Buttons $display={displayMenu}>
              <Toggler onClick={() => setDisplayMenu(false)}>
                <span></span>
                <span></span>
                <span></span>
              </Toggler>
              <form onSubmit={handleSearch}>
                <Search
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search For a Product"
                />
                <input type="submit" hidden />
              </form>
              <Button
                onClick={() => {
                  navigate("/");
                  setDisplayMenu(false);
                }}
              >
                Home
              </Button>
              <Button
                onClick={() => {
                  navigate("/shop");
                  setDisplayMenu(false);
                }}
              >
                Shop
              </Button>
              <Cart>
                <Link to="/cart">
                  <img src={cartSvg} alt="a" width="32px" />
                </Link>
              </Cart>
            </Buttons>
          </div>
        </NavContainer>
      </NavBarHeader>
      <Hr />
      <NavFooter>
        <Link to="">Electronics</Link>
        <Link to="">Jewelery</Link>
        <Link to="">Women's</Link>
        <Link to="">Men's</Link>
      </NavFooter>
      <Hr></Hr>
    </>
  );
}

export default NavBar;
