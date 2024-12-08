import React, { useState } from "react";

const AiAgent = () => {
  const [suggestion, setSuggestion] = useState("");

  const fetchSuggestion = async () => {
    try {
      const response = await fetch("http://localhost:5000/ai/strategy");
      const data = await response.json();
      setSuggestion(data.suggestion);
    } catch (error) {
      console.error("Failed to fetch AI suggestion:", error);
    }
  };

  return (
    <div>
      <h2>AI Agent Suggestion</h2>
      <button onClick={fetchSuggestion}>Get Strategy Suggestion</button>
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default AiAgent;
