import { Link } from "react-router-dom";
import DashboardHeader from "../../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../../Header and Sidebar/Sidebar/DasboardSidebar";

function Analysis() {
  const radius = 110;
  const center = 165;
  const weight = 40;
  const fullCircle = 2 * Math.PI * radius;

  const bluePercent = 70;
  const redPercent = 30;
  const showRed = true;

  const blueOffset = (1 - bluePercent / 100) * fullCircle;
  const redOffset = (1 - (bluePercent + redPercent) / 100) * fullCircle;

  return (
    <main>
      <DashboardHeader />
      <DashboardSidebar />

      <section>
        <div
          className="fixed top-[6.8rem] sm:top-[7rem] xl:top-[7rem] sm:left-[21%] md:left-[32%] sm:w-[66vw] md:w-[54vw] sm:h-[70vh] md:h-[75vh] 
                     flex flex-col items-center justify-center bg-white border-2 border-[#c2bebe] rounded-[10px] transition-all duration-500 ease-in-out"
        >
          <p className="text-[#133970] sm:text-[18px] md:text-[15px] xl:text-[18px]">OVERALL SCORE</p>

          <div className="flex flex-col items-center">
            <div className="relative flex justify-center items-center">
              <svg
                viewBox="-20-8 350 345"
                className="sm:w-[280px] md:w-[310px] xl:w-[350px] h-auto rotate-[-90deg] origin-center transition-all duration-500 ease-in-out"

              >
                <circle
                  stroke="#ddd"
                  strokeWidth={weight}
                  fill="transparent"
                  r={radius}
                  cx={center}
                  cy={center}
                />
                {showRed && (
                  <circle
                    stroke="#e74c3c"
                    strokeWidth={weight}
                    fill="transparent"
                    r={radius}
                    cx={center}
                    cy={center}
                    strokeDasharray={fullCircle}
                    strokeDashoffset={redOffset}
                    className="transition-[stroke-dashoffset] duration-500 ease-out"
                  />
                )}
                <circle
                  stroke="#3b7ce9"
                  strokeWidth={weight}
                  fill="transparent"
                  r={radius}
                  cx={center}
                  cy={center}
                  strokeDasharray={fullCircle}
                  strokeDashoffset={blueOffset}
                  className="transition-[stroke-dashoffset] duration-500 ease-out"
                />
              </svg>

              <div className="absolute sm:top-[43%] sm:right-[29%] md:right-[30%] xl:right-[27%] text-center text-[#133970] sm:text-[11px] md:text-[12px] xl:text-[15px]">
                <p>
                  You are <span className="font-bold">{bluePercent}%</span> fit for your
                  <br />
                  desired job
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 items-center">
              <Link
                to="/feedback"
                className="text-white sm:text-[11px] md:text-[10px] xl:text-[11px] bg-[#133970] rounded-full sm:px-[20px] xl:px-[28px] sm:py-[5px] xl:py-[6px]"
              >
                Proceed to Analytics
              </Link>
              <Link
                to="/upload"
                className="text-white sm:text-[11px] md:text-[10px] xl:text-[11px] bg-[#133970] rounded-full sm:px-[20px] xl:px-[28px] sm:py-[5px] xl:py-[6px]"
              >
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Analysis;
