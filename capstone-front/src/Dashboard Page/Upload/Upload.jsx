import DashboardHeader from "../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../Header and Sidebar/Sidebar/DasboardSidebar";

function Upload() {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />

      <section>
        <div
          className="fixed top-[5.3rem] left-[19%] md:left-[23.8%]
                     w-[70vw] h-[79vh] md:h-[79vh]
                     bg-[#eef3fb] border-2 border-[#2979ff] rounded-[10px]
                     flex flex-col items-center justify-center gap-[3vh] sm:gap-[2vh] md:gap-[3vh]
                     transition-all duration-500 ease-in-out"
        >
          {/* Upload Title */}
          <h1 className="text-[#133970] text-[clamp(20px,2vw,23px)] font-[500] tracking-wider">
            Hello, Jan!
          </h1>
          <h1 className="text-[#133970] text-[clamp(20px,2vw,23px)] font-[500] tracking-wider">
            Ready to boost your Resume
          </h1>

          {/* Upload Form */}
          <form className="flex flex-col items-center gap-[2.5vh] pt-5">
            {/* Resume Label */}
            <h5 className="text-[clamp(10px,1.2vw,11px)] text-[#133970] font-bold text-center">
              Upload Resume
            </h5>

            {/* Resume Upload Box */}
            <div
              className="flex items-center justify-center relative overflow-hidden
                         w-[370px] sm:w-[290px]
                         h-[60px] sm:h-[55px]
                         border border-dashed border-[#868484]
                         rounded-[10px] bg-white cursor-pointer
                         transition-all duration-500 ease-in-out"
            >
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <p className="text-[clamp(10px,1.2vw,11px)] italic text-[#999] text-center leading-tight px-2">
                Drag and drop your resume file<br />here or browse to upload
              </p>
            </div>

            {/* Job Description Label */}
            <h5 className="text-[clamp(10px,1.2vw,11px)] text-[#133970] font-bold text-center">
              Attach Job Description
            </h5>

            {/* Job Description Input */}
            <div
              className="w-[370px] sm:w-[290px]
                         h-[60px] sm:h-[55px]
                         border border-[#868484] rounded-[10px] bg-white
                         flex items-center justify-center transition-all duration-500 ease-in-out"
            >
              <input
                type="text"
                placeholder="Copy and paste your desired job description here"
                className="w-full h-full px-[1vw] bg-transparent outline-none text-center
                           focus:border-2 focus:border-[#3b7ce9]
                           placeholder:text-[clamp(11px,1.2vw,13px)] placeholder:italic placeholder:text-[#999] cursor-pointer"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 px-[clamp(20px,2.5vw,35px)] py-[clamp(2px,0.5vw,2px)]
                         text-[clamp(10px,0.85vw,15px)] font-bold text-white
                         bg-[#133970] border-2 border-[#133970] rounded-full
                         cursor-pointer transition-all duration-500 ease-in-out"
            >
              Enhancify
            </button>
          </form>

          {/* Bottom Note */}
          <div className="text-[clamp(12px,1vw,14px)] italic text-[#a7a7a7] text-center max-w-[90%] mt-[15px] sm:mt-[25px] md:mt-[15px]">
            <p>
              Please note that AI can make mistakes. We recommend verifying the information provided.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Upload;
