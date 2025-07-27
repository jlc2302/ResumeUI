import { useEffect, useState } from "react";
import axios from "axios";
import ProgressCircularBar from "../ProgressCircularBar";

function SpellingAndGrammar() {
  const [grammarScore, setGrammarScore] = useState(0);
  const [grammarFeedback, setGrammarFeedback] = useState("Loading...");

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/spelling-grammar-score", {
          withCredentials: true
        });
        setGrammarScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch spelling/grammar score:", error);
        setGrammarScore(0);
      }
    };

    const fetchFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/spelling-grammar-feedback", {
          withCredentials: true
        });
        setGrammarFeedback(response.data.comment || "No feedback provided.");
      } catch (error) {
        console.error("Failed to fetch spelling/grammar feedback:", error);
        setGrammarFeedback("Unable to fetch feedback.");
      }
    };

    fetchScore();
    fetchFeedback();
  }, []);

  return (
    <ProgressCircularBar
      title="Spelling and Grammar"
      percentage={grammarScore}
      feedback={grammarFeedback}
      position="bottom"
    />
  );
}

export default SpellingAndGrammar;
