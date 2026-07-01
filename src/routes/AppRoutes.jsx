import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoutes";
import { PATHS } from "./paths";

// Replace these with your real page components
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home";
import Products from "../pages/catalog/Products";
import ProductDetail from "../pages/catalog/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import Profile from "../pages/account/Profile";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public-only routes: logged-in users get bounced away from these */}
      <Route element={<PublicRoute />}>
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.REGISTER} element={<Register />} />
      </Route>

      {/* Everything else requires auth */}
      <Route element={<ProtectedRoutes />}>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.PRODUCTS} element={<Products />} />
        <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={PATHS.CART} element={<Cart />} />
        <Route path={PATHS.CHECKOUT} element={<Checkout />} />
        <Route path={PATHS.ORDERS} element={<Orders />} />
        <Route path={PATHS.PROFILE} element={<Profile />} />
      </Route>

      {/* Catch-all: unauthenticated users get sent to login, not a dead end */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
