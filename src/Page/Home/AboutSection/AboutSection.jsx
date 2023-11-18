import "./AboutSection.css"
import AboutImg from "../../../imgs/abotmeImg.jfif"
const AboutSection = () => {
  return (
    <div className="AboutSection w-full  flex flex-col md:flex-row items-center gap-2 pt-[50px] pb-[50px]">
      <div className=" md:w-1/2 p-[20px]">
        <span className="text-[32px] md:text-[64px] font-[300] text-white bg-[#292F36] border-2 border-[#12F7D6] p-[20px] rounded-tl-[50px] rounded-br-[50px] ">About Me</span>
        <div className="h-[35px]"></div>
        <h1 className="px-[40px] py-[10px] rounded-lg bg-[#292F36]">
          <span className="text-[#98FAEC]">&lt;p&gt;</span>
          <br/>
          <span className="text-[#12F7D6] text-[32px] SpecialFont">Hello!</span>
          <br/>
          <span className="SpecialFont">
          I'm <span className="text-[#12F7D6]">Jobayer Rahman Ohee</span>, a soon-to-be graduate in Computer Technology from Feni Polytechnic Institute. I'm a proficient MERN stack developer. My journey into technology has been fueled by a year-long exploration of React. Although I lack formal work experience, I've excelled in freelancing, earning the title of a top-rated freelancer. I also received recognition during a government training program, where I was awarded a laptop. These experiences have motivated me to pursue a career in front-end development. I'm eager to apply my skills and passion to meaningful web development projects in this ever-evolving field.
          </span>
          <br/>
          <span className="text-[#98FAEC]">&lt;p/&gt;</span>
        </h1>
      </div>
      <div className=" md:w-1/2 p-[20px]">
        <img className="rounded-lg md:w-1/2 mx-auto" src={AboutImg} />
      </div>
    </div>
  )
}

export default AboutSection
