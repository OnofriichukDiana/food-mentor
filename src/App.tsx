import Header from "./components/Header";
import Goal from "./components/Goal";
import Parameters from "./components/Parameters";
import Behaviors from "./components/Behaviors";
import Exercise from "./components/Exercise";
import { useReducer, useState } from "react";
import "./App.css";
import { reducer, initialState, Action } from "./reducer";

const steps = [
  { name: "goal", Component: Goal },
  { name: "parameters", Component: Parameters },
  { name: "behaviors", Component: Behaviors },
  { name: "exersice", Component: Exercise },
];

const WIDTH = 360;

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [_, dispatch] = useReducer(reducer, initialState);

  const goBack = () => {
    setActiveStep((prev) => (prev < 2 ? 1 : prev - 1));
  };

  const handleChange = (action: Action) => {
    setActiveStep((prev) => (prev >= steps.length ? 1 : prev + 1));
    dispatch(action);
  };

  return (
    <>
      <Header goBack={goBack} />

      <main>
        <ul
          className="inner"
          style={{
            width: WIDTH * steps.length,
            transform: `translateX(-${WIDTH * activeStep}px) translateZ(0)`,
          }}
        >
          {steps.map(({ name, Component }, index) => (
            <li
              key={name}
              className={
                activeStep === index + 1 ? "active-slide slide" : "slide"
              }
              style={{ width: WIDTH, left: WIDTH * (index + 1) }}
            >
              <Component onChange={handleChange} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
