import "../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function OpenMenu () {
  return (
    <>
    <div id="menuOpen" className="xs:flex md:hidden">
        <ul>
          <Link className="hover:text-gray-50 pt-2">
            <li>Bio</li>
          </Link>

          <Link className="hover:text-gray-50 pt-2">
            <li>Skills</li>
          </Link>

          <Link className="hover:text-gray-50 pt-2">
            <li>Web Design</li>
          </Link>

          <Link className="hover:text-gray-50 pt-2">
            <li>App Development</li>
          </Link>

          <Link className="hover:text-gray-50 pt-2">
            <li>Qualifications</li>
          </Link>

          <Link className="hover:text-gray-50 pt-2">
            <li>Employment History</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
