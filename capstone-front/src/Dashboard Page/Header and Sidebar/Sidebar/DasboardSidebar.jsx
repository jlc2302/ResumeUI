import { Link } from "react-router-dom";
import UploadIcon from "../../../assets/Upload.png";
import AnalyticsIcon from "../../../assets/Analysis & Feedback.png";
import ResultIcon from "../../../assets/Result.png";

function DashboardSidebar() {
  return (
    <aside>
      <div
        className="fixed z-[100]
                   w-10 xl:w-60
                   h-full bg-[#3b7ce9] text-white
                   flex flex-col items-center
                   pt-[5rem] xl:pt-[6.5rem]
                   transition-all duration-500 ease-in-out"
      >
        <h2
          className="xl:text-[25px] xl:mb-5
                     font-semibold trasition-all duration-500 ease-in-out"
        >
          <span className="hidden md:inline">My Dashboard</span>
        </h2>

        <nav>
          <ul
            className="flex flex-col gap-5 xl:gap-4
                       text-[16px]
                       transition-all duration-400 ease-in-out"
          >
            <li>
              <Link to="/upload" className="flex gap-1">
                <img src={UploadIcon} alt="Upload" className="w-5" />
                <span className="hidden md:inline">Upload</span>
              </Link>
            </li>

            <li>
              <Link to="/analysis" className="flex gap-1">
                <img src={AnalyticsIcon} alt="Analysis" className="w-5" />
                <span className="hidden md:inline">Analysis & Feedback</span>
              </Link>
            </li>

            <li>
              <Link to="/result" className="flex gap-1">
                <img src={ResultIcon} alt="Result" className="w-5" />
                <span className="hidden md:inline">Result</span>
              </Link>
            </li>

            <li>
              <Link to="/history" className="flex gap-1">
                <img src={ResultIcon} alt="History" className="w-5" />
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
