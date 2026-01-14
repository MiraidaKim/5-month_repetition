import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";

const App = () => {
  const [page, set_page] = useState("register");

  return (
    <>
      {page === "register" && <Register set_page={set_page} />}
      {page === "login" && <Login set_page={set_page} />}
      {page === "products" && <Products set_page={set_page} />}
    </>
  );
};

export default App;
