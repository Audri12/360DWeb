import "./About.css";
import video from "../../../assets/about/video.mp4";
const About = () => {
  return (
    <div className="about">
      <div className="container mx-auto py-20">
        <div className=" p-[50px] rounded-md glass grid grid-cols-1 lg:grid-cols-2 gap-5">
          <video src={video} loop muted autoPlay className="rounded-lg"></video>
          <div className=" ml-4">
            <p className="font-[Inter] border-[3px] w-44 font-medium border-[#1d72b8] text-center px-10 py-3 rounded">
              About Us
            </p>
            <h1 className="text-5xl  font-[Inter] flex flex-col my-5">
              <span className="font-bold">360D Soul Limited is a</span>
              <span className="bg-clip-text text-[#0080E5]">Foundational</span>
              <span className="font-bold">Ecosystem</span>
            </h1>
            <p className="text-[#4C4C4C] font-[24px] font-[Inter]">
              Dedicated to igniting growth and innovation in businesses
              worldwide. With a passionate team of experts, we offer strategic
              business development solutions tailored to unlock potential, drive
              success and foster enduring partnerships.
            </p>
            <button className="font-semibold bg-gradient-to-r from-[#013762] via-[#0080E5] to-[#013762] text-white px-10 py-3 mt-3 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
