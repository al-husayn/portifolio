import React from 'react';
import { About, Footer, Header, Skills, Testimonial, Work, Author, Post, Category } from './container';
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
            <Author />
            <Post />
            <Category />
        </div>
    )
}

export default App;