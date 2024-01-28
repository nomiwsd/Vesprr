import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HiMiniBars3, HiXMark } from "react-icons/hi2";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className="flex bg-primarybg sticky top-0 z-50 w-full shadow-2xl max-width2">
      <div className="flex w-full justify-between items-center px-4 md:px-10 lg:px-20">
        <div>   
        <Link to='/'><img src={logo} alt="Logo" className="max-w-28" /></Link> 
        </div>
        <nav className="flex justify-between items-center gap-5">
          <ul
            className={`hidden md:flex flex-row justify-center items-center gap-8`}
          >
            <li className="group hover:border-b-2 hover:border-b-primarycl pt-7 pb-5 h-20">
              <Link to="/">
                {" "}
                <p className="text-primarylinks text-base font-medium leading-6 group-hover:text-primarycl">
                  Home
                </p>{" "}
              </Link>
            </li>
            <li className="group hover:border-b-2 hover:border-b-primarycl pt-7 pb-5 h-20">
              <Link to="/service">
                {" "}
                <p className="text-primarylinks text-base font-medium leading-6 group-hover:text-primarycl">
                  Services
                </p>{" "}
              </Link>
            </li>
            <li className="group hover:border-b-2 hover:border-b-primarycl pt-7 pb-5 h-20">
              <Link to="/about">
                {" "}
                <p className="text-primarylinks text-base font-medium leading-6 group-hover:text-primarycl">
                  About
                </p>{" "}
              </Link>
            </li>
            <li className="group hover:border-b-2 hover:border-b-primarycl pt-7 pb-5 h-20">
              <Link to="/teampage">
                {" "}
                <p className="text-primarylinks text-base font-medium leading-6 group-hover:text-primarycl">
                  Our Team
                </p>{" "}
              </Link>
            </li>
          </ul>
          <Link to="/contactus">
            <button className="hidden md:block bg-primarycl text-white text-sm font-medium text-center px-3 py-2 rounded-md">
              Contact Us
            </button>
          </Link>
        </nav>
      </div>
      <div className="flex md:hidden justify-center items-center gap-2 px-4">
        <HiMiniBars3 onClick={toggleMenu} className="text-lg font-bold" />
      </div>
      {/* Full Screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bg-primarybg z-50 h-screen lg:hidden">
          <div className="flex justify-between py-3 px-4">
            <div>
             <Link to='/'><img src={logo} alt="Logo" className="max-w-28" /></Link> 
            </div>
            <button
              className="text-xl font-extrabold bg-primarycl w-8 h-8 flex justify-center items-center text-white rounded-md"
              onClick={closeMenu}
            >
              <HiXMark />
            </button>
          </div>
          <nav className="flex flex-col justify-center items-center gap-4 pt-1">
            <ul>
              <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                <Link to="/" onClick={closeMenu}>
                  <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                    Home
                  </p>
                </Link>
              </li>
              <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                <Link to="/service" onClick={closeMenu}>
                  <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                    Services
                  </p>
                </Link>
              </li>
              <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                <Link to="/about" onClick={closeMenu}>
                  <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                    About Us
                  </p>
                </Link>
              </li>
              <li className="group hover:border-b-2 hover:border-b-primarycl pt-4 pb-4">
                <Link to="/teampage" onClick={closeMenu}>
                  <p className="text-base font-medium text-center leading-6 group-hover:text-primarycl">
                    Our Team
                  </p>
                </Link>
              </li>
            </ul>
            <Link to="/contactus" onClick={closeMenu}>
              <button className="block md:hiiden bg-primarycl text-white text-sm font-medium text-center px-3 py-2 rounded-md">
                Contact Us
              </button>
            </Link>
          </nav>
          
        </div>
      )}
    </header>
  );
};

export default Header;
