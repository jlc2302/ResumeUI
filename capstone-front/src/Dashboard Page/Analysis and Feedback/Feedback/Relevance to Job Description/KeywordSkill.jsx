import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function KeywordSkill() {
  const [keywordSkillScore, setKeywordSkillScore] = useState(0);
  const [keywordSkillFeedback, setKeywordSkillFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchKeywordSkillScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/keyword-skill-match-score", {
          withCredentials: true
        });
        setKeywordSkillScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch skill match score:", error);
        setKeywordSkillScore(0);
      }
    };

    const fetchKeywordSkillFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/keyword-skill-match-feedback", {
          withCredentials: true
        });
        setKeywordSkillFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch skill match feedback:", error);
        setKeywordSkillFeedback("Unable to fetch feedback.");
      }
    };

    fetchKeywordSkillScore();
    fetchKeywordSkillFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Skill Match"
      percentage={keywordSkillScore}
      feedback={keywordSkillFeedback}
      position="bottom"
    />
  );
}

export default KeywordSkill;
