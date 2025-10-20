import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../Header and Sidebar/Header/DashboardHeader";
import DashboardSidebar from "../../Header and Sidebar/Sidebar/DasboardSidebar";

import LeftArrowIcon from "../../../assets/Arrow left-circle.png";
import RightArrowIcon from "../../../assets/Arrow right-circle.png";

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
<h1
  className="
    fixed top-18 xl:top-16 2xl:top-18 left-1/2 -translate-x-1
    text-[#133970] font-semibold
    text-lg md:text-[21px] xl:text-[24px] 2xl:text-[27px]
  "
>
        Relevance to Job Description
      </h1>
      <KeywordMatch />
      <KeywordSkill />
    </>,
    <>
<h1
  className="
    fixed top-18 xl:top-16 2xl:top-18 right-1/3 -translate-x-5
    text-[#133970] font-semibold
    text-lg md:text-[21px] xl:text-[24px] 2xl:text-[27px]
  "
>
        Experience
      </h1>
      <WorkHistory />
      <WorkHIstorySkill />
    </>,
    <>
<h1
  className="
    fixed top-18 xl:top-16 2xl:top-18 right-1/3 -translate-x-5
    text-[#133970] font-semibold
    text-lg md:text-[21px] xl:text-[24px] 2xl:text-[27px]
  "
>
        Education
      </h1>
      <Qualification />
      <Relevance />
    </>,
    <>
<h1
  className="
    fixed top-18 xl:top-16 2xl:top-18 right-1/4 -translate-x-23
    text-[#133970] font-semibold
    text-lg md:text-[21px] xl:text-[24px] 2xl:text-[27px]
  "
>
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
    <main>
      <DashboardHeader />
      <DashboardSidebar />

      
      <section className="feedback-content">{views[step]}</section>

      <div className="arrow-controls">
        {step > 0 && (
          <img
            src={LeftArrowIcon}
            alt="Previous"
            onClick={handlePrev}
            className="fixed sm:w-[42px] 2xl:w-[45px] sm:top-[30%] md:top-[40%] xl:top-[37rem] 2xl:top-[39.7rem] right-1/3 -translate-x-30 cursor-pointer"
          />
        )}
        <img
          src={RightArrowIcon}
          alt={step < views.length - 1 ? "Next" : "Go to Result"}
          onClick={handleNext}
          className="fixed sm:w-[42px] 2xl:w-[45px] sm:top-[30%] md:top-[40%] xl:top-[37rem] 2xl:top-[39.7rem] right-1/3 -translate-x-15 cursor-pointer"
        />
      </div>
    </main>
  );
}

export default Feedback;
