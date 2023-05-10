import React from 'react'
import Link from 'next/link'
import classes from '../src/styles/Components/footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <div>
            <h2>Task 2</h2>
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
    </footer>
  )
}

export default Footer