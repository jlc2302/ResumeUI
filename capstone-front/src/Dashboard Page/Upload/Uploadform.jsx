import { useUpload } from "./useUpload";

function UploadForm() {
  const {
    resumeFile,
    jobDescription,
    resumeFileSelection,
    resumeFileUpload,
    submitResumeUpload,
    setJobDescription,
    fileInputRef,
  } = useUpload();

  return (
    <form onSubmit={submitResumeUpload} className=" flex flex-col items-center my-4 xl:my-9">
      <h5 className="text-[7px] xl:text-[15px] text-[#133970] font-bold my-1 xl:my-3">
        Upload Resume
      </h5>

      <div
        className="w-40 xl:w-90 h-9 xl:h-18 flex items-center justify-center 
                   border border-dashed border-[#868484]
                   rounded-[10px] bg-white cursor-pointer
                   transition-all duration-500 ease-in-out"
        onClick={resumeFileUpload}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          ref={fileInputRef}
          hidden
          onChange={resumeFileSelection}
        />
        <p className="text-[8px] xl:text-[17px] italic text-[#999]">
          {resumeFile ? resumeFile.name : "Drag and Drop your Resume file"}
        </p>
      </div>

      <h5 className="text-[7px] xl:text-[15px] text-[#133970] font-bold my-1 xl:my-3">
        Attach Job Description
      </h5>

      <div
        className="w-40 xl:w-90 h-9 xl:h-18
                   border border-[#868484] rounded-[10px] bg-white
                   transition-all duration-500 ease-in-out"
      >
        <textarea
          placeholder="Copy and paste your desired job description here"
          className="w-full h-full bg-transparent text-center resize-none
                     focus:outline-none focus:border-2 focus:border-[#3b7ce9]
                    text-[8px] xl:text-[15px]
                     placeholder:italic placeholder:text-[#999] cursor-text"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="px-[1.1rem] xl:px-[2.5rem] py-[2px] text-[7px] xl:text-[13px] font-semibold text-white
                   bg-[#133970] rounded-full cursor-pointer mt-2 xl:mt-5
                   transition-all duration-500 ease-in-out"
      >
        Enhancify
      </button>
    </form>
  );
}

export default UploadForm;
