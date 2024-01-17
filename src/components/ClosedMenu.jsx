import "../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function ClosedMenu (open = {}) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open)();
  };
  return (
    <>
    <nav id="menuClosed">
        <div className="pl-20">
          <button className="text-xs py-2 lg:hidden xs:flex" onClick={toggleMenu}>
            <FaBars />
          </button>
          <p className="text-3xs sm:hidden lg:flex">Menu</p>
        </div>
        <div className="sm:hidden lg:flex">
          <ul id="navItems">
            <Link className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Bio</li>
            </Link>

            <Link className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Skills</li>
            </Link>

            <Link className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Web Design</li>
            </Link>

            <Link className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>App Development</li>
            </Link>

            <Link className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Qualifications</li>
            </Link>

            <Link className="hover:text-gray-50 pt-2 cursor-pointer">
              <li>Employment History</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
