import servicebg from "../../assets/servicebg.png";
import servicebg2 from "../../assets/herobg.png";
import { CgArrowLongRight } from "react-icons/cg";
import { cardsdata, membersdata } from "../../utils/data";
const OurServices = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-secondarybg relative">
        <img
          src={servicebg}
          alt=""
          className="absolute left-0 top-0 max-h-80 z-10"
        />
        <div className="px-4 md:px-10 lg:px-20 py-20 z-20 relative max-width">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-xl md:text-3xl font-semibold">Our Services</h1>
            <p className="text-base font-normal text-secondarytext">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-around items-center gap-5 my-10">
            {cardsdata &&
              cardsdata.map((item) => (
                <div className="border-t-2 rounded-lg bg-white transition-all duration-300 delay-100 scale-0 hover:scale-110"
                  key={item.id} data-aos="fade-right"
                  data-aos-duration={item.duration}
                  data-aos-easing='ease'>
                  <div className="bg-primarycl h-2 w-full rounded-t-lg"></div>
                  <div className="pt-16 px-8 pb-4">
                    <div className="relative">
                      
                    <div className="flex justify-center items-center w-20 h-20 rounded-full absolute -left-4 -top-4 bg-primarycl opacity-20"></div>
                      <div className="flex flex-col gap-4">
                          <img src={item.Image} alt="" className="w-12 h-12" />
                        <div className="flex flex-col gap-2 max-h-52">
                          <h2 className="text-xl font-semibold text-[#292525]">
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
      <div className="bg-primarybg">
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
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6" >
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
  );
};

export default OurServices;
