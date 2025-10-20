import WebsiteHeader from "../Header/WebsiteHeader";
import Background1 from "../../assets/homepage.jpg";
import Websiteicon1 from "../../assets/Website Icon 1.png"

function Website() {

  return(
    <main>
      <WebsiteHeader />
<section>
  <img src={Background1} alt="background" className="fixed -z-10" />

  <div className="w-full h-screen flex justify-around items-center pt-10">
    <div className="space-y-5">
      <h1 className="text-[40px] font-bold text-[#ffff] leading-13 tracking-wide">
        AI-Powered Resume<br></br>Optimization
      </h1>
      <p className="text-[18px] font-light text-[#ffff] leading-6 tracking-wide">
        In todays fast-paced job market, a well-optimized resume is your ticket to<br></br>success.
        Resume Optimizer analyzes, enhances, and refines your resume<br></br>using cutting-edge AI and
        Machine Learning to help you stand out from the<br></br>competition
      </p>
      <p className="text-[18px] font-light text-[#ffff] tracking-wide">Upload Resume & Optimize Now!</p>
      <button
        type="submit"
        className="px-[25px] py-[8px] text-[15px] font-semibold text-white bg-[#133970] cursor-pointer"
      >
        Get Started
      </button>
    </div>

    <img src={Websiteicon1} alt="background" className="w-[500px]" />
  </div>
</section>

<section id=""></section>
    </main>
  )
}

export default Website;