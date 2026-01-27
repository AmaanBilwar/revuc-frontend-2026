"use client";
import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Clouds from "@/app/sections/Clouds";
import BoardingPass from "@/app/sections/BoardingPass";
import Prizes from "@/app/sections/Tracks";
import Stats from "@/app/sections/Stats";
import Faq from "@/app/sections/FAQ";

const Home = () => {
  return (
    <>
      <Hero />
      <Clouds />
      <About />
      <BoardingPass />
      <Stats />
      <Prizes />
      <Faq />
    </>
  );
};

export default Home;
