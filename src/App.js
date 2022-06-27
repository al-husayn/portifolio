import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, Blog } from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
            <Blog />

        </div>
    )
}

export default App;