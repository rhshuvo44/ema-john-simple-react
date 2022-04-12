import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import OrderReviews from "./components/OrderReviews/OrderReviews";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/orderReviews"
          element={<OrderReviews></OrderReviews>}
        ></Route>
        <Route
          path="/manageInventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route
          path="/Login"
          element={<LogIn/>}
        ></Route>
        <Route
          path="/signup"
          element={<SignUp/>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
