import { useUpload } from "./useUpload";
import DashboardHeader from "../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../Header and Sidebar/Sidebar/DasboardSidebar";

function Upload() {
  const {
    resumeFileSelection,
    resumeFileUpload,
    submitResumeUpload,
    jobDescription,
    setJobDescription,
    fileInputRef,
  } = useUpload();

  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />

      <section>
        <div
          className="fixed sm:top-[5.3rem] md:top-[5.3rem] xl:top-[6rem] sm:left-[19%] md:left-[23.8%]
                     w-[70%] h-[79%] 
                     bg-[#eef3fb] border-2 border-[#2979ff] rounded-[10px]
                     flex flex-col items-center justify-center
                     sm:gap-4
                     transition-all duration-500 ease-in-out"
        >

          <h1 className="text-[#133970] sm:text-[22px] xl:text-[27px] font-medium">
            Hello, Jan!
          </h1>
          <h1 className="text-[#133970] sm:text-[22px] xl:text-[27px] font-medium">
            Ready to boost your Resume
          </h1>

          <form
            onSubmit={submitResumeUpload}
            className="flex flex-col items-center sm:pt-6 xl:pt-8"
          >

            <h5 className="text-[12px] sm:text-[12px] xl:text-[15px] text-[#133970] font-bold text-center sm:mb-2">
              Upload Resume
            </h5>

            <div
              className="relative flex items-center justify-center overflow-hidden
                         sm:w-[25vw] xl:w-[22rem]
                         sm:h-[55px] xl:h-[65px]
                         border border-dashed border-[#868484]
                         rounded-[10px] bg-white cursor-pointer
                         transition-all duration-500 ease-in-out"
              onClick={resumeFileUpload}
            >
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={resumeFileSelection}
                ref={fileInputRef}
              />
              <p className="text-[clamp(6px,1.3vw,12px)] italic text-[#999] text-center leading-tight">
                Drag and drop your resume file
                <br />
                here or browse to upload
              </p>
            </div>

            <h5 className="text-[12px] sm:text-[12px] xl:text-[15px] text-[#133970] font-bold text-center sm:mt-5 sm:mb-2">
              Attach Job Description
            </h5>

            <div
              className="sm:w-[25vw] xl:w-[22rem]
                         sm:h-[65px] xl:h-[65px]
                         border border-[#868484] rounded-[10px] bg-white
                         flex
                         transition-all duration-500 ease-in-out"
            >
              <textarea
                placeholder="Copy and paste your desired job description here"
                className="w-full h-full bg-transparent text-center resize-none
                           flex
                           pt-[20px]
                           focus:outline-none focus:border-2 focus:border-[#3b7ce9]
                           placeholder:text-[clamp(7px,1.1vw,13px)]
                           placeholder:italic placeholder:text-[#999] cursor-text"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="sm:mt-5 sm:px-[1.2rem] lg:px-[1.7rem] sm:py-[2px] lg:py-[3px]
                         sm:text-[11px] lg:text-[13px] font-semibold text-white
                         bg-[#133970] rounded-full
                         cursor-pointer transition-all duration-500 ease-in-out"
            >
              Enhancify
            </button>
          </form>

          <div className="sm:text-[10px] xl:text-[13px] italic text-[#a7a7a7] mt-5">
            <p>
              Please note that AI can make mistakes. We recommend verifying the
              information provided.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Upload;
