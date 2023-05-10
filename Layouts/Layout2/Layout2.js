import React from 'react'
import Footer from '../../Components/footer'
import Header from '../../Components/header'
import classes from '../../src/styles/layouts/layout2.module.css';

const Layout2 = ({children}) => {
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <div className={classes.pane}>
          <h1>Left Pane</h1>
        </div>
        <div >
          <div className={classes.body}>
            <h3>Pre-Body</h3>
          </div>
          <div className={classes.content}>
          {children}
          </div>
          <div className={classes.body}>
            <h3>Post-Body</h3>
          </div>
        </div>
        <div className={classes.pane}>
          <h1>Right Pane</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout2