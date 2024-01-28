import { Link } from "react-router-dom";
import herobg from "../../assets/herobg.png";
import heroimg from "../../assets/pana.png";
import heroimg2 from "../../assets/illustration.png";
import servicebg2 from "../../assets/herobg.png";
import servicebg from "../../assets/servicebg.png";
import avatarimg1 from "../../assets/useravatar.png";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";
const Contactus = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={herobg}
          alt=""
          className="absolute z-20 right-0 hidden md:block md:top-3/4 h-80"
        />
        {/* HeroSection */}
        <div className="bg-primarybg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 py-10 max-width">
            <div className="flex flex-col justify-center items-start gap-3" data-aos="fade-right"
              data-aos-duration='750'
              data-aos-easing="ease-in">
              <h1 className="text-2xl md:text-4xl font-semibold">
                Stay In
                <span className="text-primarycl"> Contact </span> <br />with us
              </h1>
              <p className="text-base font-medium font-dmsans  text-secondarytext">
                We take your idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why you want to create a website.
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
            <h1 className="text-xl md:text-3xl font-semibold">
              Get in touch
            </h1>
            <p className="text-base font-normal text-secondarytext">
              Let’s build something awesome.</p>
          </div>
          <div className="flex flex-col gap-3 bg-contactformbg border-2 border-border-cl rounded-xl shadow-lg my-10">
            <div className="py-4 border-b-2 border-bordercl">
              <h2 className="text-xl font-bold text-center">Contact Us</h2>
            </div>
            <div className="px-10 flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-3 border-b-2 border-bordercl px-4 py-2">
                <label htmlFor="Email" className="text-base font-bold w-full  md:w-20">Email:</label>
                <input type="email" name="Email" className="border-none outline-none focus:outline-none bg-transparent w-full" placeholder="Enter Your Email Address" />
              </div>
              <div className="flex flex-col md:flex-row gap-3 border-b-2 border-bordercl px-4 py-2">
                <label htmlFor="Name" className="text-base font-bold w-full  md:w-20">Name:</label>
                <input type="text" name="Name" className="border-none outline-none focus:outline-none bg-transparent w-full" placeholder="Enter Your Name" />
              </div>
              <div className="flex flex-col md:flex-row gap-3 border-b-2 border-bordercl px-4 pt-2 pb-16">
                <label htmlFor="Subject" className="text-base font-bold w-full  md:w-20">Subject:</label>
                <input type="text" name="Subject" className="border-none outline-none focus:outline-none bg-transparent w-full" placeholder="Enter Subject" />
              </div>
              <div className="flex flex-col md:flex-row gap-3 border-b-2 border-bordercl pb-16">
                <textarea name="Message" className="border-none outline-none focus:outline-none rounded-lg px-4 py-4 bg-[#F3F3F3] w-full h-72" placeholder="Write Your Message Here" />
              </div>
              <div className="flex justify-end items-center py-4">
                <button className="bg-primarycl text-white text-sm font-medium text-center w-40 h-12 px-6 py-3 rounded-md">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={servicebg2}
          alt=""
          className="absolute left-0 -bottom-40 max-h-80 z-0"
        />
      </div>
      <div className="relative">
        <img
          src={herobg}
          alt=""
          className="absolute z-20 right-0 hidden md:block md:top-[55%] h-80"
        />
        {/* HeroSection */}
        <div className="bg-primarybg">
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 py-10 max-width">
            <div className="flex flex-col justify-center items-start gap-3" data-aos="fade-right"
              data-aos-duration='750'
              data-aos-easing="ease-in">
              <h1 className="text-xl md:text-3xl font-semibold">
                Lessons and insights  <br />
                <span className="text-primarycl"> from 8 years</span>
              </h1>
              <p className="text-base font-medium  text-secondarytext">
              Where to grow your business as a ***********: site or social media?
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
                src={heroimg2}
                alt="HeroBg"
                className="w-full relative z-30 max-h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
      <div className="flex flex-col justify-center items-center gap-3">
        <h5 className="text-2xl font-bold text-primarycl">Testimonials</h5>
        <h2 className="text-[#292525] text-2xl md:text-4xl font-bold">Our Happy Clients</h2>
      </div>
      <div className="relative">
        <img
          src={servicebg}
          alt=""
          className="absolute left-0 top-1/4 max-h-80 z-0"
        />
        <img
          src={servicebg2}
          alt=""
          className="absolute right-0 top-1/4 max-h-80 z-0"
        />
        <Swiper
          cssMode={true}
          pagination={true}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper max-width px-4 md:px-20 my-20 z-40 flex flex-col justify-center items-center"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-full  bg-[#FDFDFF] border-2 rounded-xl py-5 px-5">
              <p className="text-3xl font-bold">5.0</p>
              <div className="flex gap-2">
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
              </div>
              <p className="text-2xl font-medium italic text-center text-[#292525] h-[430px] md:h-full">
                We tried several agencies before we found daCode. Has been a
                pleasure to work with and will soon start the next project with
                our second brand.
              </p>
              <div className="w-32 h-32 rounded-full">
                <img src={avatarimg1} alt="" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-xl font-bold">Paulus Haverinen</p>
                <p className="text-base font-extralight text-primarycl ">
                  Owner, Ikirakenne Ltd
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-full  bg-[#FDFDFF] border-2 rounded-xl py-5 px-5">
              <p className="text-3xl font-bold">5.0</p>
              <div className="flex gap-2">
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
                <FaStar className="text-primarycl text-2xl font-bold" />
              </div>
              <p className="text-2xl font-medium italic text-center text-[#292525] h-[430px] md:h-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti molestiae obcaecati voluptatibus explicabo. Repellat unde, laudantium alias quos perspiciatis sint dignissimos facere libero. Temporibus dolore quasi fuga odit nihil!
              </p>
              <div className="w-32 h-32 rounded-full">
                <img src={avatarimg1} alt="" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="text-xl font-bold">Paulus Haverinen</p>
                <p className="text-base font-extralight text-primarycl ">
                  Owner, Ikirakenne Ltd
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>



      </div>

      </div>
    </section>
  )
}

export default Contactus