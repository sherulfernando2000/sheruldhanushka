import Bio from "./components/Bio"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"
import MacDoc from "./components/handmade/MacDoc.jsx"
import DarkVeil from './components/DarkVeil';
import carlImg from "./assets/carl.jpeg"
import { HERO } from "./constants"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const App = () => {
  const icons = [
  { icon: <FaGithub />, link: "https://github.com/yourusername" },
  { icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter />, link: "https://twitter.com/yourusername" },
  { icon: <FaInstagram />, link: "https://instagram.com/yourusername" },
  { icon: <MdEmail />, link: "mailto:your@email.com" },
];

  return (
    <div className="relative h-full overflow-y-auto antialiased font-cormorant">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>

      <div className="relative z-20 flex flex-col items-center p-0 space-y-8 container mx-auto">
        {/* Hero Section with Background */}
        <section className="relative flex min-h-screen flex-wrap items-center overflow-hidden w-full">
          {/* Hero section Background - positioned absolutely to cover the section */}
          <div className="absolute inset-0 z-0">
            <DarkVeil speed={2} hueShift={27} />
          </div>

          {/* Hero section content - positioned above background */}
          <div className="flex flex-col items-center justify-center z-10 w-full ">
            <p className="p-2 text-3xl tracking-tighter lg:text-4xl bg-white/15 px-4 rounded-full">{HERO.greet}</p>
            <h2 className="my-8 p-1 text-4xl font-bold md:text-5xl lg:text-6xl">
              {HERO.name}
            </h2>
            <h3 className="md:text-4xl lg:text-5xl">Im FrontEnd Developer</h3>

            <p className="mb-8 pt-7 text-xl">{HERO.description}</p>

             <MacDoc/>
          </div>

          {/* <div
            className="
          flex gap-6 px-6 py-3 
          bg-white/20 backdrop-blur-xl
          rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]
          border border-white/10
        "
          >
            {icons.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
              text-white text-3xl 
              transition-transform duration-200 
              hover:scale-150 active:scale-95
            "
              >
                {item.icon}
              </a>
            ))}
          </div> */}

         

        </section>
      </div>

      <div className="relative z-20 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Navbar />
        <Project />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
      </div>
    </div>

  )
}

export default App
