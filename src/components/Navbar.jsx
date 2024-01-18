import { useState } from "react";
import "../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion"

export default function NavBar() {
  const [click, setClick] = useState(true)

  const toggleMenu = () => {
    setClick(!click)
  };

  const menuVars = {
    initial:{
      scaleY:0
    },
    animate: {
      scaleY:1,
      transition: {
        duration: 0.5
      }
    },
    exit:{ 
        scaleY:0,
        transition: {
          duration: 0.5
        }
      }
    }

  const content = (
    <>
        <motion.ul variants={menuVars} initial="initial" animate="animate" exit="exit" id="menuOpen" className="md:hidden xs:flex origin-top">
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
        </motion.ul>
    </>
  );

  return (
    <>
      <nav id="menuClosed">
        <div className="pl-10">
          <button className="text-xs py-2 lg:hidden xs:flex transition" onClick={toggleMenu}>
            {click ? <FaBars /> : <FaTimes/>}
            
          </button>
          <p className="text-3xs xs:hidden lg:flex">Menu</p>
        </div>
        <div className="xs:hidden lg:flex">
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
