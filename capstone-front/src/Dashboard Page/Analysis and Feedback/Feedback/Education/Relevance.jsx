import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function Relevance() {
  const [relevanceScore, setRelevanceScore] = useState(0);
  const [relevanceFeedback, setRelevanceFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchRelevanceScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/relevance-score");
        setRelevanceScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch relevance score:", error);
        setRelevanceScore(0);
      }
    };

    const fetchRelevanceFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/relevance-feedback");
        setRelevanceFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch relevance feedback:", error);
        setRelevanceFeedback("Unable to fetch feedback.");
      }
    };

    fetchRelevanceScore();
    fetchRelevanceFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Relevance"
      percentage={relevanceScore}
      feedback={relevanceFeedback}
      top="sm:top-[50%] md:top-[60%] xl:top-[380px]"
    />
  );
}

export default Relevance;
