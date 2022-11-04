import React from 'react'
import Navbar from '../layouts/navbar'
import Hero from '../layouts/hero';
import Service from '../layouts/service'
import Whyus from '../layouts/whyus';
import Testimonial from '../layouts/testimonial';
import Banner from '../layouts/banner';
import Question from '../layouts/question'
import Footer from '../layouts/footer'

const landing = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <Whyus/> 
      <Testimonial/>
      <Banner/>
      <Question/>
      <Footer/>
    </div>
  )
}

export default landing