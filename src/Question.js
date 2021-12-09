import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [revealed, setReveal] = useState(false);

  function revealAnswer() {
    setReveal(!revealed);
  }

  return (
    <article className="question">
      <header>
        <h4>{question.title}</h4>
        <button onClick={() => revealAnswer()} className="btn">
          {revealed ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{revealed ? question.info : ""}</p>
    </article>
  );
};

export default Question;
