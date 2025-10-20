import { useEffect, useState } from "react";
import axios from "axios";
import { useAnalysis } from "./useAnalysis";

function AnalysisChart() {
  const [analysisScore, setAnalysisScore] = useState(0);
  const speed = 10;

  const { bluePercent, redPercent, showRed } = useAnalysis(analysisScore, speed);

  useEffect(() => {
    const fetchAnalysisScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/analysis-score", {
          withCredentials: true,
        });
        const score = response.data.overallScore;
        setAnalysisScore(0);
        setTimeout(() => setAnalysisScore(score), 200);
      } catch (error) {
        console.error("Failed to fetch score:", error);
      }
    };

    fetchAnalysisScore();
  }, []);

  const radius = 115;
  const center = 165;
  const weight = 40;
  const fullCircle = 2 * Math.PI * radius;
  const blueOffset = (1 - bluePercent / 100) * fullCircle;
  const redOffset = (1 - (bluePercent + redPercent) / 100) * fullCircle;

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center">
        <svg
          viewBox="-20-8 350 345"
          className="sm:w-[280px] md:w-[310px] xl:w-[350px] 2xl:w-[380px] 
                     h-auto rotate-[-90deg] origin-center transition-all duration-500 ease-in-out"
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

        <div className="absolute sm:top-[43%] sm:right-[29%] md:right-[30%] xl:right-[27%] 2xl:right-[28%] 
                        text-center text-[#133970] sm:text-[11px] md:text-[12px] xl:text-[16px] 2xl:text-[17px]">
          <p>
            You are <span className="font-bold">{bluePercent}%</span> fit for your
            <br />
            desired job
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisChart;
