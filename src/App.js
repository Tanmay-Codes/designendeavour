import './App.css';
import React from 'react';
import Hero from './components/landing/Hero'
import About from './components/about/About'
import Section from './components/section/Section.jsx'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial';
import Quote from './components/quote/Quote';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Services/>
      <About/>
      <Section/>
      <Testimonial/>
      <Quote/>
      <Footer/>
    </div>
  );
}

export default App;
