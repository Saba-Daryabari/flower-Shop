import React from 'react'
import Collection from "../Components/Collection";
import Banner from "../Components/Banner";
import Intro from "../Components/Intro";
import Introduction from "../Components/Introduction";
import Slider from "../Components/Slider";
import CTA from "../Components/CTA";

export default function Home() {
  return (
    <>      
      <Banner />
      <Collection limit={8} />
      <Intro />
      <Introduction />
      <CTA />
      <Slider />
    </>
  )
}
