import React from 'react'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import FaqsList from '../components/FaqsList'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <div>
        <Hero />
        <Testimonial />
        <Newsletter />
        <FaqsList />
    </div>
  )
}

export default Home
