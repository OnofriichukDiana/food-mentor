import "./Header.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

export default function Header({ goBack }: { goBack: () => void }) {
  return (
    <header>
      <button type="button" className="header-button" onClick={goBack}>
        <img src={arrow} alt="go back" />
      </button>

      <img src={logo} className="header-logo" alt="logo" />

      <h1 className="header-text">Food Mentor</h1>
    </header>
  );
}
