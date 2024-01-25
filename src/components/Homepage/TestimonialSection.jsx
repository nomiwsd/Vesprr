import servicebg from "../../assets/servicebg.png";
import servicebg2 from "../../assets/herobg.png";
import avatarimg1 from "../../assets/useravatar.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa6";
const TestimonialSection = () => {
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return <button onClick={() => onClick()} />;
      };
      
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-3">
        <h5 className="text-2xl font-bold text-primarycl">Testimonials</h5>
        <h2 className="text-[#292525] text-5xl font-bold">Our Happy Clients</h2>
      </div>
      <div className="relative h-screen">
        <img
          src={servicebg}
          alt=""
          className="absolute left-0 top-1/4 max-h-80 z-10"
        />
        <img
          src={servicebg2}
          alt=""
          className="absolute right-0 top-1/4 max-h-80 z-10"
        />
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          arrows={true}
          dotListClass="custom-dot-list-style"
          className="mx-40 z-40 my-10"
          itemClass="carousel-item-padding-40-px"
          customRightArrow={<CustomRightArrow />}
       >
          <div className="flex flex-col justify-center items-center bg-[#FDFDFF] shadow-lg border rounded-xl py-5 px-5">
            <p className="text-3xl font-bold">5.0</p>
            <div className="flex gap-2">
              <FaStar className="text-primarycl text-2xl font-bold" />
              <FaStar className="text-primarycl text-2xl font-bold" />
              <FaStar className="text-primarycl text-2xl font-bold" />
              <FaStar className="text-primarycl text-2xl font-bold" />
              <FaStar className="text-primarycl text-2xl font-bold" />
            </div>
            <p className="text-2xl font-medium italic text-center text-[#292525]">
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
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
