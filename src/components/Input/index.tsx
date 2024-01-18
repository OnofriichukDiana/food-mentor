import { ChangeEvent } from "react";
import "./Input.css";

interface Props {
  name: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  class?: string;
}

export default function Input(props: Props) {
  return (
    <input
      className={`input ${props.class ? props.class : ""}`}
      placeholder={props.placeholder}
      value={props.value || ""}
      name={props.name}
      onChange={props.onChange}
      type="number"
    />
  );
}
