import "./Exercise.css";
import girl from "../../assets/exercise.png";
import { useState } from "react";
import type { Action } from "../../reducer";

const list = [
  "Hardly at all",
  "Fitness 1-2 times a week",
  "Fitness 3-5 times a week",
  "Fitness 5-7 times a week",
];

export default function Exercise({
  onChange,
}: {
  onChange: (action: Action) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <section>
      <h2 className="title">Physical exercise</h2>

      <p className="description">
        Physical exercise means a lot for a woman who wants to lose kilos and
        works at the office
      </p>

      <p className="question">How active are you during the day?</p>

      <div className="exercise-active">
        <img src={girl} alt="active girl" />

        <ul className="axercise-list">
          {list.map((item) => (
            <li key={item} className="axercise-list-item">
              <button
                type="button"
                className="axercise-list-button"
                style={{
                  borderColor: value === item ? "#5FCB39" : "#e1e1e1",
                }}
                onClick={() => {
                  setValue(item);
                  onChange({ type: "SET_EXERSICE", payload: item });
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
