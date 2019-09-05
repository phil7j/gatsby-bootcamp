import React from 'react'
import Footer from './footer'
import Header from './header'

function Layout({children}) {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
            <Footer ></Footer>
        </div>
    )
}

export default Layout
