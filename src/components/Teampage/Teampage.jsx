import { Link } from "react-router-dom";
import herobg from "../../assets/herobg.png";
import heroimg from "../../assets/teamimg.png";
import servicebg from "../../assets/servicebg.png";
import servicebg2 from "../../assets/herobg.png";
import { membersdata, teamdata } from "../../utils/data";
import servicevector1 from "../../assets/Vector1.png";
import servicevector2 from "../../assets/Vector2.png";
const Teampage = () => {
  return (
    <section>
      <div className="relative overflow-hidden">
        <img
          src={herobg}
          alt=""
          className="absolute z-20 right-0 hidden md:block md:top-3/4 h-80"
        />
        {/* HeroSection */}
        <div className="bg-primarybg">
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 py-10 max-width">
            <div className="flex flex-col justify-center items-start gap-3" data-aos="fade-right"
              data-aos-duration='750'
              data-aos-easing="ease-in">
              <h1 className="text-2xl md:text-4xl font-semibold">
                The
                <span className="text-primarycl"> Team </span>
              </h1>
              <p className="text-base font-medium font-dmsans  text-secondarytext">
                Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world.
              </p>
              <Link to="/contactus">
                <button className="bg-primarycl text-white text-sm font-medium text-center px-6 py-3 rounded-md">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="" data-aos="fade-left"
              data-aos-duration='750'
              data-aos-easing="ease-in">
              <img
                src={heroimg}
                alt="HeroBg"
                className="w-full relative z-30 max-h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-secondarybg relative">
          <img
            src={servicebg}
            alt=""
            className="absolute left-0 top-0 max-h-80 z-10"
          />
          <div className="px-4 md:px-10 lg:px-20 py-20 z-20 relative max-width">
            <div className="text-center flex flex-col gap-3">
              <h1 className="text-xl md:text-3xl font-semibold">Our Team</h1>
              <p className="text-base font-normal text-secondarytext">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-5 my-10">
              {teamdata &&
                teamdata.map((item) => (
                  <div className="border-2 border-bordercl shadow-lg rounded-lg bg-white transition-all duration-300 delay-100 scale-0 hover:scale-110" 
                  key={item.id} data-aos="fade-right"
                  data-aos-duration={item.duration}
                  data-aos-easing='ease'>
                    <div className="flex flex-col justify-center items-center gap-3 py-4">
                      <div className="w-40 h-40 rounded-full bg-secondarybg">
                        <img src={item.Image} alt="" className="w-full h-full rounded-full object-fill" />
                      </div>
                      <div className="flex flex-col gap-0">
                      <h2 className="text-lg font-semibold text-center">{item.membername}</h2>
                      <p className="text-base font-medium text-center">{item.memberdesignation}</p></div>
                    </div>
                  </div>
                ))}{" "}
            </div>
          </div>
          <img
            src={servicebg2}
            alt=""
            className="absolute right-5 bottom-0 max-h-80 z-10"
          />
        </div>
      </div>
      <div className="bg-servicespecialbg relative flex justify-center items-center w-full">
        <img
          src={servicevector1}
          alt=""
          className="absolute left-0 top-0 z-0 hidden md:block "
        />
        <img
          src={servicevector2}
          alt=""
          className="absolute right-0 bottom-0 hidden md:block z-0"
        />
        <div className="max-width px-4 md:px-10 lg:px-20 py-10 md:py-32 flex justify-center items-center relative z-30">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl md:text-5xl font-bold text-center">
              Interested to work with us ?
            </h2>
            <p className="text-lg md:text-2xl font-normal font-dmsans">
              Send a line here get and update daily
            </p>
            <button className="bg-primarycl text-white text-sm font-medium text-center px-6 py-4 rounded-full ">
              info@vesprr.org
            </button>
          </div>
        </div>
      </div>
      <div className="bg-primarybg my-6">
        <div className="max-width px-4 py-10 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col justify-center items-start gap-3" data-aos="fade-right"
                data-aos-duration='500'
                data-aos-easing='ease'>
              <h1 className="text-xl md:text-3xl font-semibold">
                Helping a local <br />{" "}
                <span className="text-primarycl">business reinvent itself</span>
              </h1>
              <p className="text-base font-normal text-primarylinks">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
              {membersdata &&
                membersdata.map((item) => (
                  <div className="flex gap-2" key={item.id} data-aos="fade-down"
                  data-aos-duration='1000'
                  data-aos-easing='ease'>
                    <img src={item.Image} alt="" className="w-14 h-14" />
                    <div className="flex flex-col items-start">
                      <h2 className="text-[28px] leading-9 font-bold text-primarytext">
                        {item.numberdata}
                      </h2>
                      <p className="text-base font-normal text-secondarytext">
                        {item.detaildata}{" "}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teampage