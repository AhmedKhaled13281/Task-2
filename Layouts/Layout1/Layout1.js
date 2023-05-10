import React from 'react'
import Header from '../../Components/header'

const Layout1 = ({children}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default Layout1