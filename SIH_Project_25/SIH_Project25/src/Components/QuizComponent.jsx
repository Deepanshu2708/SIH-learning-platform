import React, { useState } from "react";

export default function QuizComponent({ quizData, onQuizComplete }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    if (selected === quizData.answer) {
      alert("Correct!");
      onQuizComplete();
    } else {
      alert("Wrong! Try again.");
    }
  };

  return (
    <div>
      <h3 className="mb-4">{quizData.question}</h3>
      <div className="flex flex-col gap-2">
        {quizData.options.map((opt, i) => (
          <label key={i} className="cursor-pointer">
            <input
              type="radio"
              name="quiz"
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
            />{" "}
            {opt}
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!selected || submitted}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}
