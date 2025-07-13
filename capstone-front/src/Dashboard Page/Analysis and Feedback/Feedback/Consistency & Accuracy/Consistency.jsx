import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function Consistency() {
  const [consistencyScore, setConsistencyScore] = useState(0);
  const [consistencyFeedback, setConsistencyFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/consistency-score");
        setConsistencyScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch consistency score:", error);
        setConsistencyScore(0);
      }
    };

    const fetchFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/consistency-feedback");
        setConsistencyFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch consistency feedback:", error);
        setConsistencyFeedback("Unable to fetch feedback.");
      }
    };

    fetchScore();
    fetchFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Consistency"
      percentage={consistencyScore}
      feedback={consistencyFeedback}
      top="sm:top-[15%] md:top-[20%] xl:top-[120px]"
    />
  );
}

export default Consistency;
