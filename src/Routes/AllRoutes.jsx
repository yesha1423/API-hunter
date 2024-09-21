import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SingleProductPage from "./SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute";
import { Routes,Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} ></Route>
        <Route path="/products/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
