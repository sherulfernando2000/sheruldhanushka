import Bio from "./components/Bio"
import Education from "./components/Education"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Skills from "./components/Skills"
import Services from "./components/Services.jsx"
// import WorkExperience from "./components/WorkExperience"
import MacDoc from "./components/handmade/MacDoc.jsx"
import DarkVeil from './components/DarkVeil';
import carlImg from "./assets/carl.jpeg"
import { HERO } from "./constants"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const App = () => {

  return (
    <div className="relative h-full overflow-y-auto antialiased font-cormorant">
      {/* <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div> */}

      <div className="relative z-20 flex flex-col items-center p-0 space-y-8 container mx-auto">
        {/* Hero Section with Background */}
        <Hero/>
      </div>

      <div className="relative z-20 flex flex-col items-center p-2 pl-12 sm:p-8 sm:pl-20 space-y-8 container mx-auto">
        <Navbar />
        <Bio />
        <Services/>
        <Project />
        
        {/* <WorkExperience /> */}
        <Education />
        <Skills />
      </div>
    </div>

  )
}

export default App
