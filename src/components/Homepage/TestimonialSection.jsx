import servicebg from "../../assets/servicebg.png";
import servicebg2 from "../../assets/herobg.png";
import avatarimg1 from "../../assets/useravatar.png";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar } from "react-icons/fa6";
const TestimonialSection = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-3">
        <h5 className="text-2xl font-bold text-primarycl">Testimonials</h5>
        <h2 className="text-[#292525] text-2xl md:text-5xl font-bold">Our Happy Clients</h2>
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
    </section>
  );
};

export default TestimonialSection;
