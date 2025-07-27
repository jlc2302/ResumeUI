import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function WorkHistorySkill() {
  const [workSkillScore, setWorkSkillScore] = useState(0);
  const [workSkillFeedback, setWorkSkillFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchWorkSkillScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/work-history-skill-score", {
          withCredentials: true
        });
        setWorkSkillScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch skill score:", error);
        setWorkSkillScore(0);
      }
    };

    const fetchWorkSkillFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/work-history-skill-feedback", {
          withCredentials: true
        });
        setWorkSkillFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch skill feedback:", error);
        setWorkSkillFeedback("Unable to fetch feedback.");
      }
    };

    fetchWorkSkillScore();
    fetchWorkSkillFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Skill Match"
      percentage={workSkillScore}
      feedback={workSkillFeedback}
      position="bottom"
    />
  );
}

export default WorkHistorySkill;
