import DashboardHeader from "../../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../../Header and Sidebar/Sidebar/DasboardSidebar";
import { Link } from "react-router-dom";
import AnalysisChart from "./AnalysisChart";

function Analysis() {
  return (
    <main>
      <DashboardHeader />
      <DashboardSidebar />

      <section>
        <div
          className="fixed top-[6.8rem] sm:top-[6rem] xl:top-[6.8rem] 2xl:top-[7.5rem] 
                     left-1/2 sm:-translate-x-[40%] md:-translate-x-[32%] 2xl:-translate-x-[35%] 
                     sm:w-[66vw] md:w-[54vw] sm:h-[70vh] md:h-[75vh] 2xl:h-[32.3rem]
                     flex flex-col items-center justify-center bg-white border-2 border-[#c2bebe] 
                     rounded-[10px] transition-all duration-500 ease-in-out"
        >
          <p className="text-[#133970] sm:text-[18px] md:text-[15px] xl:text-[18px] 2xl:text-[19px]">
            OVERALL SCORE
          </p>

          <AnalysisChart />

          <div className="flex flex-col gap-1.5 items-center">
            <Link
              to="/feedback"
              className="text-white sm:text-[11px] md:text-[10px] xl:text-[11px] 2xl:text-[12px] 
                         bg-[#133970] rounded-full sm:px-[20px] xl:px-[28px] sm:py-[5px] xl:py-[6px]"
            >
              Proceed to Analytics
            </Link>

            <Link
              to="/upload"
              className="text-white sm:text-[11px] md:text-[10px] xl:text-[11px] 2xl:text-[12px] 
                         bg-[#133970] rounded-full sm:px-[20px] xl:px-[28px] sm:py-[5px] xl:py-[6px]"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Analysis;
