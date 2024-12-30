import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default Layout;
