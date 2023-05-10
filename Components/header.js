import React from 'react'
import Link from 'next/link'
import classes from '../src/styles/Components/header.module.css'

const Header = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <h3 className={classes.title}>Task 2</h3>
      </div>
      <div>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link href="/">Home</Link>
          </li>
          <li className={classes.li}>
            <Link href="/About">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header