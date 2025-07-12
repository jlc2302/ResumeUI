import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../../Header and Sidebar/Sidebar/DasboardSidebar";

import LeftArrowIcon from "../../../assets/Arrow left-circle.png";
import RightArrowIcon from "../../../assets/Arrow right-circle.png";

// Feedback Sections
import KeywordMatch from "./Relevance to Job Description/KeywordMatch";
import KeywordSkill from "./Relevance to Job Description/KeywordSkill";
import WorkHistory from "./Experience/workHistory";
import WorkHIstorySkill from "./Experience/WorkHistorySkill";
import Qualification from "./Education/Qualification";
import Relevance from "./Education/Relevance";
import Consistency from "./Consistency & Accuracy/Consistency";
import SpellingAndGrammar from "./Consistency & Accuracy/SpellingAndGrammar";

function Feedback() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const views = [
    <>
      <h1 className="fixed text-[#133970] font-semibold md:text-[21px] xl:text-[24px] md:top-[10.5%] xl:top-[75px] md:left-[51%] xl:left-[690px]">
        Relevance to Job Description
      </h1>
      <KeywordMatch />
      <KeywordSkill />
    </>,
    <>
      <h1 className="fixed text-[#133970] font-semibold md:text-[21px] xl:text-[24px] md:top-[10.5%] xl:top-[75px] md:left-[57%] xl:left-[780px]">
        Experience
      </h1>
      <WorkHistory />
      <WorkHIstorySkill />
    </>,
    <>
      <h1 className="fixed text-[#133970] font-semibold md:text-[21px] xl:text-[24px] md:top-[10.5%] xl:top-[75px] md:left-[57%] xl:left-[780px]">
        Education
      </h1>
      <Qualification />
      <Relevance />
    </>,
    <>
      <h1 className="fixed text-[#133970] font-semibold md:text-[21px] xl:text-[24px] md:top-[10.5%] xl:top-[75px] md:left-[52%] xl:left-[690px]">
        Consistency & Accuracy
      </h1>
      <Consistency />
      <SpellingAndGrammar />
    </>,
  ];

  const handleNext = () => {
    if (step < views.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <main className="relative">
      <DashboardHeader />
      <DashboardSidebar />
      
      <section className="feedback-content">{views[step]}</section>

      <div className="arrow-controls">
        {step > 0 && (
          <img
            src={LeftArrowIcon}
            alt="Previous"
            onClick={handlePrev}
            className="fixed w-[35px] md:top-[38%] xl:top-[50%] md:left-[47%] xl:left-[660px] translate-x-[120px] translate-y-[280px]"
          />
        )}
        <img
          src={RightArrowIcon}
          alt={step < views.length - 1 ? "Next" : "Go to Result"}
          onClick={handleNext}
          className="fixed w-[35px] md:top-[38%] xl:top-[50%] md:left-[47%] xl:left-[660px] translate-x-[170px] translate-y-[280px]"
        />
      </div>
    </main>
  );
}

export default Feedback;
