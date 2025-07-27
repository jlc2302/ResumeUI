import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function Qualification() {
  const [qualificationScore, setQualificationScore] = useState(0);
  const [qualificationFeedback, setQualificationFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchQualificationScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/qualification-score", {
          withCredentials: true
        });
        setQualificationScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch qualification score:", error);
        setQualificationScore(0);
      }
    };

    const fetchQualificationFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/qualification-feedback", {
          withCredentials: true
        });
        setQualificationFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch qualification feedback:", error);
        setQualificationFeedback("Unable to fetch feedback.");
      }
    };

    fetchQualificationScore();
    fetchQualificationFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Qualification"
      percentage={qualificationScore}
      feedback={qualificationFeedback}
      position="top"
    />
  );
}

export default Qualification;
