import { Link } from "react-router-dom";
import herobg from "../../assets/herobg.png";
import heroimg from "../../assets/Group3.png";
import { cardsdata } from "../../utils/data";
import servicebg from "../../assets/servicebg.png";
import servicevector1 from "../../assets/Vector1.png";
import servicevector2 from "../../assets/Vector2.png";
import servicebg2 from "../../assets/herobg.png";
import scheduleimg from "../../assets/image1.png";
import { CgArrowLongRight } from "react-icons/cg";
const Services = () => {
  return (
    <section>
      <div className="relative overflow-hidden">
        <img
          src={herobg}
          alt=""
          className="absolute z-20 right-0 hidden md:block md:top-[28%] h-80"
        />
        {/* HeroSection */}
        <div className="bg-primarybg">
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 py-10 max-width">
            <div className="flex flex-col justify-center items-start gap-3" data-aos="fade-right"
              data-aos-duration='750'
              data-aos-easing="ease-in">
              <h1 className="text-xl md:text-4xl font-semibold">
                What we can offer your <br />{" "}
                <span className="text-primarycl">Business</span>
              </h1>
              <p className="text-base font-medium font-dmsans  text-secondarytext">
                We have chosen to only collaborate and work with businesses,
                this is because our expertise lies and we know that we can
                provide the most value to our clients. Our team has worked with
                Nordic, European and American tech unicorns.
              </p>
              <Link to="/contactus">
                <button className="bg-primarycl text-white text-sm font-medium text-center px-6 py-3 rounded-md">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className=""data-aos="fade-left"
              data-aos-duration='1000'
              data-aos-easing="ease-in">
              <img
                src={heroimg}
                alt="HeroBg"
                className="w-full relative z-30 max-h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-secondarybg relative">
          <img
            src={servicebg}
            alt=""
            className="absolute left-0 top-0 max-h-80 z-10"
          />
          <div className="px-4 md:px-10 lg:px-20 py-20 z-20 relative max-width">
            <div className="text-center flex flex-col gap-3">
              <h1 className="text-xl md:text-3xl font-semibold">
                Our Services
              </h1>
              <p className="text-base font-normal text-secondarytext">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-around items-center gap-5 my-10">
              {cardsdata &&
                cardsdata.map((item) => (
                  <div className="border-t-2 rounded-lg bg-white transition-all duration-300 delay-100 scale-0 hover:scale-110" 
                  key={item.id} data-aos="fade-right"
                  data-aos-duration={item.duration}
                  data-aos-easing='ease'>
                    <div className="bg-primarycl h-2 w-full rounded-t-lg"></div>
                    <div className="pt-20 px-8 pb-4">
                      <div className="relative">
                        <div className="absolute -left-2 -top-2 w-12 h-12 rounded-full bg-primarycl opacity-20"></div>

                        <div className="flex flex-col gap-4">
                          <img src={item.Image} alt="" className="w-14 h-14" />
                          <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-bold text-[#292525]">
                              {item.servicename}
                            </h2>
                            <p className="text-base font-medium font-dmsans">
                              {item.servicedetail}
                            </p>
                            <p className="text-sm font-bold text-secondarylinks flex items-center gap-2">
                              Read More{" "}
                              <CgArrowLongRight className="text-lg font-bold" />
                            </p>
                          </div>
                        </div>
                      </div>
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
            <h2 className="text-2xl md:text-4xl font-bold text-center">
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
      <div className="relative">
        <img
          src={servicebg}
          alt=""
          className="absolute left-0 -top-60 max-h-80 -z-10"
        />
        <div className="max-width flex flex-col md:flex-row px-4 md:px-10 lg:px-20 py-20">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <h3 className="text-xl md:text-3xl font-bold w-full text-center">
              Establishing online presence
            </h3>
            <div className="flex flex-col gap-3">
              <p className='text-base font-normal font-dmsans text-justify'>
                Every website, regardless of niche, must do one thing
                brilliantly, which is converting visitors into users. At first
                glance, the site should encourage and guide visitors in a smooth
                way towards call-to-actions.{" "}
              </p>
              <p className='text-base font-normal font-dmsans text-justify'>
                This goes hand in hand with a responsive design, meaning it
                needs to be apt for different devices.
              </p>
              <p className='text-base font-normal font-dmsans text-justify'>
                We use a data-driven approach to measure user response when
                developing the site. This method usually makes the site quicker
                to launch, is more cost-effective and more successful in the
                long run.
              </p>
              <p className='text-base font-normal font-dmsans text-justify'>
                The pages need to be search engine optimized (SEO) because it
                lays the foundation for the technical quality, which in turn
                determines how high it will rank among search results. We also
                make sure that your website is indexed properly.
              </p>
              <p className='text-base font-normal font-dmsans text-justify'>
                We audit your audience and get to know your target market to be
                able to speak to them through the website in the best possible
                way. By finding out their consumer behavior we can refine the
                website approach.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h3 className="text-xl md:text-3xl text-primarycl font-bold w-full text-center">
          Schedule a Free Session</h3>
          <div>
            <img src={scheduleimg} alt="" className="w-full h-full object-cover" />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
