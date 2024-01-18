import { useState } from "react";
import "./Behaviors.css";
import behOne from "../../assets/beh-one.svg";
import behTwo from "../../assets/beh-two.svg";
import behThree from "../../assets/beh-three.svg";
import behFour from "../../assets/beh-four.svg";
import behFive from "../../assets/beh-five.svg";
import behSix from "../../assets/beh-six.svg";
import Button from "../Button";
import type { Action } from "../../reducer";

const list = [
  { value: "I don't rest enough", icon: behOne },
  { value: "I have a sweet tooth", icon: behTwo },
  { value: "I have too much soda", icon: behThree },
  { value: "I eat many salty foods", icon: behFour },
  { value: "I enjoy midnight snacks", icon: behFive },
  { value: "None of the above", icon: behSix },
];

export default function Behaviors({
  onChange,
}: {
  onChange: (action: Action) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <section>
      <h2 className="title">Destructive behaviors</h2>

      <p className="description">We all have them! Which are yours?</p>

      <ul className="behavior-list">
        {list.map((item) => (
          <li className="behavior-list-item" key={item.value}>
            <button
              type="button"
              className="behavior-list-button"
              onClick={() => setValue(item.value)}
              style={{
                borderColor: value === item.value ? "#5FCB39" : "#e1e1e1",
              }}
            >
              <img src={item.icon} alt={"icon " + item.value} />
              <p style={{ marginLeft: "15px" }}>{item.value}</p>
            </button>
          </li>
        ))}
      </ul>

      <Button
        disabled={value === ""}
        class="behavior-button"
        onClick={() => onChange({ type: "SET_BEHAVIORS", payload: value })}
      />
    </section>
  );
}
