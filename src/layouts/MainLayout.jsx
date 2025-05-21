import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <section className="lg:pt-20 pt-16">
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
