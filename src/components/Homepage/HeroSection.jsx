import { Link } from "react-router-dom";
import herobg from "../../assets/herobg.png";
import heroimg from "../../assets/illustration.png";
import heroimg2 from "../../assets/Frame35.png";
const HeroSection = () => {
  return (
    <div className="relative">
    
    <div className="relative">
        <img src={herobg} alt=""  className="absolute z-20 right-0 top-[35%] h-80"/>
      {/* HeroSection */}
      <div className="bg-primarybg">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 lg:px-20 py-10 max-width">
          <div className="flex flex-col justify-center items-start gap-3">
            <h1 className="text-3xl md:text-5xl font-semibold">
              Lessons and insights <br />{" "}
              <span className="text-primarycl">from 8 years</span>
            </h1>
            <p className="text-base font-normal text-secondarytext">
              Where to grow your business as a ***********: site or social
              media?
            </p>
            <Link to="/contactus">
              <button className="bg-primarycl text-white text-sm font-medium text-center px-6 py-3 rounded-md">
                Contact Us
              </button>
            </Link>
          </div>
          <div className="">
            <img
              src={heroimg}
              alt="HeroBg"
              className="w-full max-h-[500px] object-fill"
            />
          </div>
        </div>
      </div>

      <div className="bg-white grid grid-cols-1 md:grid-cols-2 py-20 px-4 md:px-10 lg:px-20 max-width">
        <div>
          <img src={heroimg2} alt="" className="w-full max-h-[400px] object-cover" />
        </div>
        <div className="flex flex-col justify-center items-start gap-3">
          <h1 className="text-xl md:text-4xl font-semibold">
            The unseen of spending three years at *******
          </h1>
          <p className="text-base font-normal text-secondarytext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>

          <button className="bg-primarycl text-white text-sm font-medium text-center px-6 py-3 rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
