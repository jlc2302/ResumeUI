import { Link } from "react-router-dom";
import UploadIcon from "../../../assets/Upload.png";
import AnalyticsIcon from "../../../assets/Analysis & Feedback.png";
import ResultIcon from "../../../assets/Result.png";

function DashboardSidebar() {
  return (
    <aside>
      <div
        className="fixed top-0 z-[100] 
                   w-15 sm:w-15 md:w-[17vw]
                   h-full bg-[#3b7ce9] text-white 
                   flex flex-col 
                   gap-3 sm:gap-4 md:gap-7 xl:gap-11
                   pt-[2.5rem] sm:pt-[6rem] xl:pt-[6.5rem]
                   pl-[clamp(5px,3vw,25px)] 
                   transition-all duration-500 ease-in-out"
      >
        {/* Title */}
        <h2
          className="text-[1.8vw] xl:text-[1.4em]
                     font-semibold transition-all duration-500 ease-in-out"
        >
          <span className="hidden md:inline">My Dashboard</span>
        </h2>

        {/* Navigation */}
        <nav>
          <ul
            className="flex flex-col 
                       sm:gap-6 md:gap-[2vw] lg:gap-5 xl:gap-6
                       md:text-[1.1vw] lg:text-[12px] xl:text-[15px]
                       transition-all duration-400 ease-in-out"
          >
            <li>
              <Link to="/upload" className="flex items-center gap-[1%]">
                <img src={UploadIcon} alt="Upload" className="w-1 sm:w-[50%] md:w-[10%]" />
                <span className="hidden md:inline">Upload</span>
              </Link>
            </li>

            <li>
              <Link to="/analysis" className="flex items-center gap-[1%]">
                <img src={AnalyticsIcon} alt="Analysis" className="w-1 sm:w-[50%] md:w-[10%]" />
                <span className="hidden md:inline">Analysis & Feedback</span>
              </Link>
            </li>

            <li>
              <Link to="/result" className="flex items-center gap-[1%]">
                <img src={ResultIcon} alt="Result" className="w-1 sm:w-[50%] md:w-[10%] mt-[2px]" />
                <span className="hidden md:inline">Result</span>
              </Link>
            </li>

            <li>
              <Link to="/history" className="flex items-center gap-[1%]">
                <img src={ResultIcon} alt="History" className="w-1 sm:w-[50%] md:w-[10%]" />
                <span className="hidden md:inline">History</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default DashboardSidebar;
