import { ChangeEvent, useState } from "react";
import "./Parameters.css";
import Input from "../Input";
import Button from "../Button";
import type { Action } from "../../reducer";

export default function Parameters({
  onChange,
}: {
  onChange: (action: Action) => void;
}) {
  const [system, setSystem] = useState<"IMPERIAL" | "METRIC">("IMPERIAL");
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "height") {
      setHeight(Number(event.target.value));
      return;
    }

    if (event.target.name === "weight") {
      setWeight(Number(event.target.value));
      return;
    }
  };

  return (
    <section>
      <h2 className="title">Measure Yourself</h2>

      <p className="description">What are your height and body weight?</p>

      <div className="parameters-tabs">
        <button
          type="button"
          className="parameters-tabs-button"
          style={{
            background:
              system === "IMPERIAL" ? "rgba(95, 203, 57, .2)" : "transparent",
          }}
          onClick={() => setSystem("IMPERIAL")}
        >
          Imperial
        </button>

        <button
          type="button"
          className="parameters-tabs-button"
          style={{
            background:
              system === "METRIC" ? "rgba(95, 203, 57, .2)" : "transparent",
          }}
          onClick={() => setSystem("METRIC")}
        >
          Metric
        </button>
      </div>

      <Input
        class="parameters-input"
        placeholder={`Height (${system === "IMPERIAL" ? "ft" : "sm"})`}
        name="height"
        onChange={handleChange}
        value={height}
      />

      <Input
        placeholder={`Current Weight (${system === "IMPERIAL" ? "lb" : "kg"})`}
        name="weight"
        onChange={handleChange}
        value={weight}
      />

      <Button
        disabled={height === 0 || weight === 0}
        class="parameters-button"
        onClick={() =>
          onChange({
            type: "SET_PARAMETERS",
            payload: {
              system,
              height,
              weight,
            },
          })
        }
      />
    </section>
  );
}
