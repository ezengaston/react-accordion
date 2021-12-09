import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
          {data.map((question) => (
            <SingleQuestion key={question.id} question={question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
