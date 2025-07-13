import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function KeywordMatch() {
  const [keywordMatchScore, setKeywordMatchScore] = useState(0);
  const [keywordMatchFeedback, setKeywordMatchFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchKeywordMatch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/keyword-match-score");
        console.log("Keyword Match score:", response.data.score);
        setKeywordMatchScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch keyword match score:", error);
        setKeywordMatchScore(0);
      }
    };

    const fetchKeywordMatchFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/keyword-match-feedback");
        console.log("Keyword Match feedback:", response.data.comment);
        setKeywordMatchFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch keyword match feedback:", error);
        setKeywordMatchFeedback("Unable to fetch feedback.");
      }
    };

    fetchKeywordMatch();
    fetchKeywordMatchFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Keyword Match"
      percentage={keywordMatchScore}
      feedback={keywordMatchFeedback}
      top="sm:top-[15%] md:top-[20%] xl:top-[120px]"
    />
  );
}

export default KeywordMatch;
