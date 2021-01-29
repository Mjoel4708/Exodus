import React from 'react'
import { Navbar, Values, Categories, Howitworks, Footer } from '.';
function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <Values />
            <Categories />
            <Howitworks />
            <Footer />
        </React.Fragment>
    )
}

export default Home
