import { Link } from "react-router-dom";
import footerbg from "../../assets/footerbg.png";
import logo from "../../assets/logo.png";
import { SiMinutemailer } from "react-icons/si";
import { MdLocalPhone, MdMailOutline, MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primarybg relative z-10">
        <div
          className="flex flex-col md:flex-row justify-between items-center  px-4 py-16 md:px-16 lg:px-20 max-width bg-auto bg-no-repeat bg-left"
          style={{
            backgroundImage: `url(${footerbg})`,
          }}
        >
          <div className="flex flex-col gap-3">
            <div>
              <img src={logo} alt="Logo" className="max-w-28" />
            </div>
            <p className="text-xl font-normal font-dmsans ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              mollitia provident obcaecati accusamus aut, sapiente quia nulla
              temporibus ab, aliquam repellat, modi laborum quas incidunt.
              Voluptate beatae recusandae ipsam voluptatibus!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start  gap-4">
            <div className="flex flex-col items-start md:text-center md:items-center gap-4">
              <h4 className="text-xl font-semibold text-primarylinks">
                Company
              </h4>
              <div className="flex flex-col gap-2">
                <Link to="/about">
                  <p className="text-sm font-normal text-footerlinks">
                    About Us
                  </p>
                </Link>
                <Link to="/services">
                  <p className="text-sm font-normal text-footerlinks">
                    Services
                  </p>
                </Link>
                <Link to="/contactus">
                  <p className="text-sm font-normal text-footerlinks">
                    Contact Us
                  </p>
                </Link>
                <Link to="/">
                  <p className="text-sm font-normal text-footerlinks">
                    Pricing
                  </p>
                </Link>
                <Link to="/teampage">
                  <p className="text-sm font-normal text-footerlinks">
                    Our Team
                  </p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <h4 className="text-xl text-left font-semibold text-primarylinks">
                Stay Up To Date
              </h4>
              <div className="flex flex-col gap-2">
                <div className="bg-[#C2ABDB] flex justify-between items-center rounded-md py-2 px-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="bg-[#C2ABDB] text-black outline-none border-none focus:outline-none placeholder:!text-black"
                  />
                  <SiMinutemailer className="text-primarycl text-lg font-bold" />
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdMailOutline className="text-lg font-bold" />{" "}
                  <p className="text-sm font-normal">info@vesprr.org</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdLocalPhone className="text-lg font-bold" />{" "}
                  <p className="text-sm font-normal">+92(303) 5106242</p>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdWhatsapp className="text-lg font-bold" />{" "}
                  <p className="text-sm font-normal">+92(303) 5106242</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-primarycl py-4">
        <p className="text-white text-sm font-normal">Copyright © 2024 Vesprr All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
