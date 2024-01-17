import { useState } from "react";
import "../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion"

export default function NavBar() {
  const [click, setClick] = useState(true)
  const [open, setOpen] = useState('menuClosed');

  const toggleMenu = () => {
    setClick(!click)
    setOpen(!open);
  };

  const content = (
    <>
      <div id="menuOpen" className="xs:flex xs:gap-5 md:hidden">
        <ul className="gap-1">
          <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2">
            <li>Bio</li>
          </Link>

          <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2">
            <li>Skills</li>
          </Link>

          <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2">
            <li>Web Design</li>
          </Link>

          <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2">
            <li>App Development</li>
          </Link>

          <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2">
            <li>Qualifications</li>
          </Link>

          <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2">
            <li>Employment History</li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <>
      <nav id="menuClosed">
        <div className="pl-20">
          <button className="text-xs py-2 lg:hidden xs:flex transition" onClick={toggleMenu}>
            {click ? <FaBars /> : <FaTimes/>}
            
          </button>
          <p className="text-3xs sm:hidden lg:flex">Menu</p>
        </div>
        <div className="sm:hidden lg:flex">
          <ul id="navItems">
            <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Bio</li>
            </Link>

            <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Skills</li>
            </Link>

            <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Web Design</li>
            </Link>

            <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>App Development</li>
            </Link>

            <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Qualifications</li>
            </Link>

            <Link spy={true} smooth={true} className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Employment History</li>
            </Link>
          </ul>
        </div>
      </nav>
      <div>
        {!click && content}
      </div>
    </>
  );
}
