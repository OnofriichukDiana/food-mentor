import "./Button.css";

interface Props {
  disabled: boolean;
  onClick: () => void;
  class?: string;
}

export default function Button(props: Props) {
  return (
    <button
      type="button"
      className={`button ${props.class || ""}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Continue
    </button>
  );
}
