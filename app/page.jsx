import React from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Infoboxes from '@/components/Infoboxes'
import HomeProperties from '@/components/HomeProperties'
import connectDB from '@/config/database';
import FeaturedProperties from '@/components/FeaturedProperties'

const HomePage = () => {
connectDB();
  return (
    <>
    <Hero/>
    <Infoboxes/>
    <FeaturedProperties/>
    <HomeProperties/>
    </>
  )
}

export default HomePage