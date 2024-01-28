import { Link } from "react-router-dom";
import herobg from "../../assets/herobg.png";
import heroimg from "../../assets/abouthero.png";
import servicebg2 from "../../assets/herobg.png";
import aboutbg from '../../assets/userimg(5).jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { projectsdata } from "../../utils/data";
const Aboutus = () => {
  return (
    <section>
      <div className="relative">
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
                A little bit
                <span className="text-primarycl"> about us</span>
              </h1>
              <p className="text-base font-medium font-dmsans  text-secondarytext">
                Who we are and what we do.
              </p>
              <Link to="/contactus">
                <button className="bg-primarycl text-white text-sm font-medium text-center px-6 py-3 rounded-md">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="" data-aos="fade-left"
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
      </div>
      <div className="bg-secondarybg relative">
        <div className="px-4 md:px-10 lg:px-20 py-20 z-20 relative max-width">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-xl md:text-4xl font-semibold">
              About Us
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-10">
            <div className="flex flex-col gap-4 w-full md:w-3/4" data-aos="fade-left"
              data-aos-duration='1500'
              data-aos-delay='1000'
              data-aos-easing="ease-in">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#181818]">Who We Are</h3>
                <p className="text-base font-normal text-[#7D7D7D]">We are a multi-disciplinary front-end engineer and UI/UX designer based in Rabat, Pakistan.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#181818]">What WE Do</h3>
                <p className="text-base font-normal text-[#7D7D7D]">With two years of invaluable experience in my role at Harmony Technology –– a tech company based here in Rabat, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at Harmony Technology, I had the privilege of collaborating on projects for esteemed clients such as the Ministry of Health, Ministry of Education, and Ministry of Justice. It was an incredibly rewarding experience to develop applications that directly impact the lives of ***** citizens.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-[#181818]">What WE Did</h3>
                <p className="text-base font-normal text-[#7D7D7D]">
                  Before delving into the realm of front end engineering, I spent five years as a graphic designer. This background has equipped me with a keen eye for aesthetics and a deep understanding of user-centered design principles. It enables me to seamlessly blend functionality and visual appeal in every project I undertake.
                </p>
              </div>
              <div>
                <p className="text-base font-normal text-[#7D7D7D]">Feel free to reach out via <a href="" className="text-[#181818] underline">e-mail</a> , or follow me on <a href="" className="text-[#181818] underline">Twitter</a>. Want to see where I’ve worked? Check out my Resume, or Connect with me on <a href="" className="text-[#181818] underline">FIVER.</a></p>
              </div>
            </div>
            <div className="w-full md:w-1/4 flex justify-end">
              <img src={aboutbg} alt="" className="w-full max-w-96 max-h-[550px] object-fill rounded-xl" />
            </div>
          </div>
        </div>
        <img
          src={servicebg2}
          alt=""
          className="absolute right-0 -bottom-1/4 max-h-80 z-0"
        />
      </div>
      <div className="relative">
        <div className="px-4 md:px-10 lg:px-20 py-20 z-20 relative max-width">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-xl font-semibold text-primarycl">
              Portfolio
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-[#474141]">Our Great Work</p>

            <div className="my-10">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                autoplay={
                  {
                    delay: 2500,
                    disableOnInteraction: false,
                  }
                }
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper relative py-20 px-5"
              >
                {projectsdata && projectsdata.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="flex flex-col gap-3 rounded-2xl border-2 border-bordercl bg-white">
                      <div className="relative group">
                        <img
                          src={item.Image}
                          alt="Your Image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className=" flex flex-col gap-1 py-2">
                        <h4 className="text-lg font-bold text-[#474141]">{item.Projectname}</h4>
                        <p className="text-sm font-normal text-[#7D7D7D]">{item.ProjectDesc}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus