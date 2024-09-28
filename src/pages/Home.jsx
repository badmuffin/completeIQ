import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import FaqsList from '../components/FaqsList'
import Testimonial from '../components/Testimonial'
import Feature from '../components/Feature'

const Home = () => {
  return (
    <div>
        <Hero />
        <Feature />
        <Testimonial />
        <Newsletter />
        <FaqsList />
    </div>
  )
}

export default Home
