import React from "react";
import { Routes, Route } from "react-router-dom";
import { DetailRestaurant, ErrorPage, Transaction, Admin } from "../pages";

const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<DetailRestaurant />} />
      <Route path="/transaction-information" element={<Transaction />} />
    
      <Route path="/admin" element={<Admin />} />
       {/*<Route path="/log-in" element={<LoginPage />} />
      <Route path="/detail-post/:postId" element={<DetailPostPage />} /> */}
    </Routes>
  );
};

export default MainRoute;
