import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function WorkHistory() {
  const [workHistoryScore, setWorkHistoryScore] = useState(0);
  const [workHistoryFeedback, setWorkHistoryFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchWorkHistoryScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/work-history-score");
        setWorkHistoryScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch work history score:", error);
        setWorkHistoryScore(0);
      }
    };

    const fetchWorkHistoryFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/work-history-feedback");
        setWorkHistoryFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch work history feedback:", error);
        setWorkHistoryFeedback("Unable to fetch feedback.");
      }
    };

    fetchWorkHistoryScore();
    fetchWorkHistoryFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Work History"
      percentage={workHistoryScore}
      feedback={workHistoryFeedback}
      position="top"
    />
  );
}

export default WorkHistory;
