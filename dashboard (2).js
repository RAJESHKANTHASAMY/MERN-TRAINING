import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import Header from "./header";

function Dashboard() {
  const [input, setInput] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a helpful health assistant. Based on symptoms, give possible health advice in simple language.",
            },
            {
              role: "user",
              content: `The user has the following symptoms: ${input}`,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "Talktor",
          },
        }
      );

      setAdvice(response.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
      setAdvice("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="dash-body"
      style={{
        backgroundImage: 'url("/bg1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <Header />
        <div className="logo">TALKTOR</div>
        <h1>What symptoms are you experiencing?</h1>

        <div className="input-wrapper">
          <textarea
            ref={textareaRef}
            placeholder="Describe your symptoms..."
            value={input}
            onChange={handleInputChange}
            rows={1}
          />
          <button className="get-advice-btn-center" onClick={handleSubmit}>
            {loading ? "Loading..." : "Get Advice"}
          </button>
        </div>

        {advice && (
          <div className="modal-overlay" onClick={() => setAdvice("")}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setAdvice("")}>
                ×
              </button>
              <h2>Health Advice</h2>
              <p>{advice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
