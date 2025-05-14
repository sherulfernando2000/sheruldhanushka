import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';


const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement  = document.querySelector(href);
        if (targetElement) {
            const offset = -85
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offSetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offSetPosition,
                behavior: "smooth"
            })

            setIsMobileMenuOpen(false);
        }
    }


  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
            {/* Desktop menu */}
            <div className="mx-auto hidden items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
                <div className="flex item-center justify-between gap-6">
                    <div>
                        <a href="#">
                            <img src={logo} width={150} alt="logo" />
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        {NAVIGATION_LINKS.map((item,index)=>(
                            <ul key={index}>
                                <a href={item.href} className="text-sm hover:text-yellow-400" onClick={(e)=>{handleLinkClick(e, item.href)}}>{item.label}</a>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>

            {/* MobileMenu */}
            <div className="rounded-lg backdrop-blur-md lg:hidden px-4 py-2">
  <div className="flex items-center justify-between">
    {/* Logo on the left */}
    <a href="#">
      <img src={logo} width={90} alt="logo" className="m-2" />
    </a>

    {/* Menu Toggle Button on the right */}
    <button className="focus:outline-none" onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? (
        <FaTimes className="m-2 h-6 w-6" />
      ) : (
        <FaBars className="m-2 h-6 w-6" />
      )}
    </button>
  </div>

  {/* Slide-in Mobile Menu */}
  {isMobileMenuOpen && (
    <div className="absolute right-4 top-16 z-50 w-48 rounded-lg bg-black/70 p-4 backdrop-blur-md shadow-lg">
      <ul className="flex flex-col gap-4">
        {NAVIGATION_LINKS.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="block text-white hover:text-yellow-400"
              onClick={(e) => {
                handleLinkClick(e, item.href);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

      </nav>
    </div>
  )
}

export default Navbar

