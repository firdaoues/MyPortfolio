import React from 'react'

import { About, Header, Footer, Skills, Work, Testimonial } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Header />
        <About />
        <Work />
        <Testimonial />
        <Footer />

    </div>
    

  )
}

export default App