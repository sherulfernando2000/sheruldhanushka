import React, { useState } from 'react'
import logo from "../assets/logo1.png"
import { NAVIGATION_LINKS } from '../constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero'); // Set default active section

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offSetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offSetPosition,
        behavior: "smooth"
      })

      setActiveLink(href); // Set clicked link as active
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop menu */}
        <div className="mx-auto hidden max-w-fit items-center justify-center rounded-full border border-stone-50/30 bg-black/20 py-3 px-6 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="#">
                <img src={logo} width={160} height={100} alt="logo" />
              </a>
            </div>
            <div className='flex items-center gap-3'>
              {NAVIGATION_LINKS.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`
                    px-4 py-2 text-sm rounded-full transition-all duration-300
                    hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:shadow-white/5 hover:scale-125
                    hover:border hover:border-white/20
                    ${activeLink === item.href
                      ? 'bg-white/15 backdrop-blur-lg border border-white/30 shadow-lg shadow-white/10 text-purple-600'
                      : 'border border-transparent'
                    }
                  `}
                  onClick={(e) => { handleLinkClick(e, item.href) }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MobileMenu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden px-4 py-2">
          <div className="flex items-center justify-between">
            <a href="#">
              <img src={logo} width={90} alt="logo" className="m-2" />
            </a>
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
              <ul className="flex flex-col gap-2">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className={`
                        block px-3 py-2 rounded-lg text-white transition-all duration-300
                        hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/20 hover:scale-105
                        ${activeLink === item.href
                          ? 'bg-white/15 backdrop-blur-md border border-white/30 text-yellow-400'
                          : 'border border-transparent'
                        }
                      `}
                      onClick={(e) => { handleLinkClick(e, item.href) }}
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