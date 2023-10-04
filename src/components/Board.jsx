import { useState } from "react";
import otazky from "./questions.js";
import questions from "./questions.js";

function Main() {
  console.log(questions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    if (answer.isCorrect)  {
      setScore(score + 1);
    } else setScore(score - 1);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  
  return (
    <>
      <div className="bg-[#3AAFA9]  h-screen w-full flex justify-center items-center">
        <div className="text-center">
          <p className="text-3xl font-semibold mb-4 text-neutral-950 ">
            Otázka : {currentQuestion + 1} z {otazky.length}
          </p>
          <h1 className="text-3xl font-semibold mb-4 text-neutral-950 ">
            {otazky[currentQuestion].questionText}
          </h1>
          <div className="flex flex-col space-y-2">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                onClick={() => handleAnswerOptionClick(answer)}
              >
                {answer.answerText}
              </button>
            ))}
            <p className="text-3xl font-semibold mb-4 text-neutral-950 ">
            Tvoje skóre : {score} 
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
