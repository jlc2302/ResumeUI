import { useEffect, useState } from "react";
import axios from "axios";

// Layout and icons
import DashboardHeader from "../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../Header and Sidebar/Sidebar/DasboardSidebar";
import RightArrowIcon from "../../assets/right arrow.png";
import DownloadIcon from "../../assets/Download.png";

function Result() {
  // State for optimized resume and selected format
  const [optimizedResume, setOptimizedResume] = useState("");
  const [format, setFormat] = useState("pdf");

  // Fetch resume content on page load
  useEffect(() => {
    const fetchOptimizedResume = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/result");
        setOptimizedResume(response.data.resume || "No optimized resume found.");
      } catch (error) {
        console.error("Failed to fetch optimized resume:", error);
        setOptimizedResume("Error loading optimized resume.");
      }
    };

    fetchOptimizedResume();
  }, []);

  // This function is called when the user clicks "Download"
  const handleDownload = async () => {
    try {
      // Ask backend for the file with selected format
      const response = await axios.get(
        `http://localhost:3000/api/download?format=${format}`,
        { responseType: "blob" } // we expect a file (binary)
      );

      // Create a file blob and download it
      const blob = new Blob([response.data], {
        type:
          format === "pdf"
            ? "application/pdf"
            : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `optimized_resume.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <main>
      <DashboardHeader />
      <DashboardSidebar />

      <section>
        <div className="fixed top-[105px] left-[290px] bottom-[200px] w-[63rem] h-[32rem] px-[70px] bg-white border-2 border-[#c2bebe] rounded-[10px]">

          {/* Section headers */}
          <div className="flex justify-around relative top-[9px] px-[20px] pl-[50px]">
            <h1 className="text-[14px] text-[#133970]">Original</h1>
            <h1 className="text-[14px] text-[#133970]">Resume Optimize</h1>
          </div>

          {/* Resume preview boxes */}
          <div className="flex items-center relative w-[85%] h-[65%] top-[5px] left-[65px]">
            <div className="bg-[#a6a6a6] w-[30%] h-[85%] mb-[35px] p-[3px] text-[7px] mx-auto overflow-auto">
              <p>Original resume will go here.</p>
            </div>

            <img className="w-[50px]" src={RightArrowIcon} alt="Next Page" />

            <div className="bg-[#a6a6a6] w-[30%] h-[85%] mb-[35px] p-[3px] text-[7px] mx-auto overflow-auto">
              {optimizedResume}
            </div>
          </div>

          {/* Format select */}
          <div className="flex flex-col items-center justify-center relative my-[25px] bottom-[20px]">
            <label className="text-[12px] font-semibold mb-[5px] text-[#1e3a8a]">
              Choose your download format
            </label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="p-[8px] w-[250px] h-[30px] text-[10px] border border-[#ccc] rounded-[6px] bg-[#f9f9f9] text-[#1e3a8a]"
            >
              <option value="pdf">PDF</option>
              <option value="docx">DOCX</option>
            </select>
          </div>

          {/* Download button */}
          <button
            onClick={handleDownload}
            className="flex flex-col items-center justify-center gap-[3px] w-[15%] h-[40px] bg-[#133970] text-white rounded-[10px] absolute left-[427px] font-bold text-[11px] cursor-pointer"
          >
            <img src={DownloadIcon} alt="Download" className="w-[12px]" />
            <span>Download</span>
          </button>
        </div>
      </section>
    </main>
  );
}

export default Result;
