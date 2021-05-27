import React, { useState } from "react";
import { questions } from "./Data";
import "./Accordion.css";

const Accordion = () => {
  const [value, setValue] = useState(questions);
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>Family information</h2>
      {value.map((info) => {
        return (
          <div>
            <div className="question">
              <h2>{info.question}</h2>
              <p
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "--" : "++"}
              </p>
            </div>
            <h2>{show && info.answer}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
