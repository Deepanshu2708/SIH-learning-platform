import React, { useState } from "react";

const questions = [
  {
    q: "What should you do first when a flood warning is issued?",
    options: ["Stay indoors", "Move to higher ground", "Call a friend", "Go shopping"],
    answer: "Move to higher ground",
  },
  {
    q: "What item is essential in a flood emergency kit?",
    options: ["Television", "Flashlight", "Gaming console", "Photo album"],
    answer: "Flashlight",
  },
  {
    q: "Is it safe to walk or drive through flood water?",
    options: ["Yes", "No"],
    answer: "No",
  },
];

const FloodQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      {!finished ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">{questions[current].q}</h2>
          <div className="space-y-3">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
          <p className="text-lg">Your Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default FloodQuiz;
