import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useState } from "react";

function Layout() {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <NavBar />
      <Outlet context={{ cartProducts, setCartProducts }} />
    </>
  );
}

export default Layout;
