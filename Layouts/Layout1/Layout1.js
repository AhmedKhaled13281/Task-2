import React from "react";
import Header from "../../Components/header";
import Footer from "../../Components/footer";
import Navigation from "../../Components/navigation";
import SideBar from "../../Components/sideBar";
import classes from "../../src/styles/layouts/layout1.module.css";

const Layout1 = ({ children }) => {
  return (
    <>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.navigation}>
        <Navigation />
      </div>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <SideBar />
        </div>
        <div className={classes.mainContent}>{children}</div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout1;
