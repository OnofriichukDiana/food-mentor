import "./Goal.css";
import goalOne from "../../assets/goal-one.png";
import goalTwo from "../../assets/goal-two.png";
import goalThree from "../../assets/goal-three.png";
import goalFour from "../../assets/goal-four.png";
import { useState } from "react";
import type { Action } from "../../reducer";

const list = [
  { value: "Lose Weight", icon: goalOne },
  { value: "Gain Muscle", icon: goalTwo },
  { value: "Develop healthy habits", icon: goalThree },
  { value: "Develop healthy", icon: goalFour },
];

export default function Goal({
  onChange,
}: {
  onChange: (action: Action) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <section>
      <h2 className="title">The Goal</h2>

      <p className="description">
        Focus on the health benefits you need. Balanced nutrition will let you
        achieve them
      </p>

      <p className="question">What are your goals?</p>

      <ul className="goal-list">
        {list.map((item) => (
          <li className="goal-list-item" key={item.value}>
            <button
              type="button"
              className="goal-list-button"
              onClick={() => {
                setValue(item.value);
                onChange({ type: "SET_GOAL", payload: item.value });
              }}
              style={{
                borderColor: value === item.value ? "#5FCB39" : "#e1e1e1",
              }}
            >
              <p>{item.value}</p>

              <img src={item.icon} alt={"girl " + item.value} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
