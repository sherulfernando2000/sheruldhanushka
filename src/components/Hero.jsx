import { useEffect, useRef } from "react";
import { HERO } from "../constants"
import Typed from 'typed.js';
import carlImg from "../assets/carl.jpeg"
import MacDoc from "./handmade/MacDoc.jsx"
import DarkVeil from './DarkVeil';

const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current,  {
      strings: ["BACKEND DEVELOPER", "FRONTEND DEVELOPER", "SOFTWARE ENGINEER"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    })

    return () => {
      typed.destroy();
    };
  }, []);


return (
  <section className="relative flex min-h-screen flex-wrap items-center overflow-hidden w-full">
    {/* Hero section Background - positioned absolutely to cover the section */}
    <div className="absolute inset-0 z-0">
      <DarkVeil speed={2} hueShift={27} />
    </div>

    {/* Hero section content - positioned above background */}
    <div className="flex flex-col items-center justify-center z-10 w-full ">
      <p className="p-2 text-2xl md:text-3xl  lg:text-4xl tracking-tighter border border-white bg-white/15 px-4 rounded-full">{HERO.greet}</p>
      <h2 className="my-8 p-1 text-3xl font-bold md:text-5xl lg:text-6xl">
        {HERO.name}
      </h2>
      <h3 className="text-2xl md:text-4xl lg:text-5xl">I'm a <span ref={el} className="text-cyan-300"> </span> </h3>

      <p className="mb-8 pt-7 px-20 text-md md:text-xl lg:text-2xl">{HERO.description}</p>

      <MacDoc />
    </div>


  </section>



)
}

export default Hero
