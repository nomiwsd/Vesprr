import ideaimg from "../../assets/Group3.png";
import servicebg2 from "../../assets/herobg.png";
import { LuSendHorizonal } from "react-icons/lu";
const IdeaSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="bg-white max-width py-20 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col justify-center items-start gap-3" data-aos="fade-left"
                data-aos-duration='1000'
                data-aos-easing='ease-in'>
          <h1 className="text-lg md:text-2xl font-semibold">
            Your idea into <span className="text-primarycl">reality</span>
          </h1>
          <p className="text-lg font-medium font-dmsans text-[#555] max-w-[990px]">
            We start every web development project with a project manager from
            Vesprr interviewing you about the goal with the project. This is for
            us to be able to come up with a solution for your business, estimate
            a timeline, and come up with a budget.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between my-10">
          <div className="flex flex-col gap-5 w-full md:w-3/4">
            <div className="flex flex-col md:flex-row gap-3 w-full" data-aos="fade-up"
                data-aos-duration='400'
                data-aos-easing='ease'>
              <div>
                {" "}
                <div className="bg-white hidden  text-primarycl rounded-full w-24 h-24 md:flex justify-center items-center shadow-lg">
                  <p className="text-3xl font-black text-center">1</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 py-4">
                <h3 className="text-2xl font-bold text-primarycl flex gap-2"><span className="flex md:hidden">1.</span> Your Idea</h3>
                <p className="text-base font-medium font-dmsans text-[#555]">
                  In order for us at Vesprr to know that we are a good fit for
                  your project we always start with screening questions in order
                  to make sure that we are a suitable match for your company.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row  gap-3 w-full" data-aos="fade-up"
                data-aos-duration='700'
                data-aos-easing='ease'>
              <div>
                {" "}
                <div className="bg-white text-primarycl rounded-full w-24 h-24 hidden md:flex justify-center items-center shadow-lg">
                  <p className="text-3xl font-black text-center">2</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 py-4">
                <h3 className="text-2xl font-bold text-primarycl flex gap-2">
                  <span className="flex md:hidden">2.</span>   Strategy Meeting
                </h3>
                <p className="text-base font-medium font-dmsans text-[#555]">
                  This meeting will be a meeting where we together go over our
                  proposed strategy on how we can reach your website goals. Here
                  we will establish a project update system where you will be
                  able to follow the whole process from start to finish.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full" data-aos="fade-up"
                data-aos-duration='1000'
                
                data-aos-easing='ease'>
              <div>
                <div className="bg-white text-primarycl rounded-full w-24 h-24 hidden md:flex justify-center items-center shadow-lg">
                  <p className="text-3xl font-black text-center">3</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 py-4">
                <h3 className="text-2xl font-bold text-primarycl flex gap-2">
                  <span className="flex md:hidden">3.</span>   Agile and Scrum framework
                </h3>
                <p className="text-base font-medium font-dmsans text-[#555]">
                  In this step we will have a team meeting with the project
                  manager and the lead developer and designer. Then we will be
                  working using and agile and scrum framework in order to make
                  sure to deliver your project on time and within budget.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full" data-aos="fade-up"
                data-aos-duration='1300'
                
                data-aos-easing='ease'>
              <div>
                {" "}
                <div className="bg-white text-primarycl rounded-full w-24 h-24 hidden md:flex justify-center items-center shadow-lg">
                  <p className="text-3xl font-black text-center">4</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 py-4">
                <h3 className="text-2xl font-bold text-primarycl flex gap-2">
                  <span className="flex md:hidden">4.</span> Your Website Goes Live
                </h3>
                <p className="text-base font-medium font-dmsans text-[#555]">
                  The final checks of the website will happen, we will make sure
                  that all tracking pixels, links and user interface is
                  compatible with all different devices. We will also perform a
                  few different tests to make sure that the website is optimised
                  for user experience.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full md:w-1/4">
            <img
              src={ideaimg}
              alt=""
              className="w-full max-h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative mb-10">
        <img src={servicebg2} alt="" className="absolute right-0 bottom-0 max-h-80 z-10" />
        <div className="px-4 md:px-10 lg:px-20 relative z-30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 px-4 bg-secondarybg  max-width rounded-md">
            <div className="flex flex-col">
              <h2 className="text-lg md:text-2xl font-bold text-[#181818]">Let’s work together</h2>
              <p className="text-sm md:text-base font-normal text-[#808080]">Want to discuss an opportunity to create something great? I’m ready when you are.</p>
            </div>
            <div>

              <button className=" flex items-center gap-2 bg-primarycl text-white text-sm font-medium text-center px-6 py-3 rounded-md">
                <LuSendHorizonal className="text-lg font-bold" />  Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default IdeaSection;
