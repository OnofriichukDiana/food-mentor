export type ParametersState = {
  system: "IMPERIAL" | "METRIC";
  height: number;
  weight: number;
};

export type AppState = {
  goal: string;
  parameters: ParametersState;
  behaviors: string;
  exersice: string;
};

export type Action =
  | { type: "SET_GOAL"; payload: string }
  | { type: "SET_PARAMETERS"; payload: ParametersState }
  | { type: "SET_BEHAVIORS"; payload: string }
  | { type: "SET_EXERSICE"; payload: string };

export const initialState: AppState = {
  goal: "",
  parameters: {
    system: "IMPERIAL",
    height: 0,
    weight: 0,
  },
  behaviors: "",
  exersice: "",
};

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_GOAL":
      return { ...state, goal: action.payload };
    case "SET_PARAMETERS":
      return { ...state, parameters: action.payload };
    case "SET_BEHAVIORS":
      return { ...state, behaviors: action.payload };
    case "SET_EXERSICE":
      return { ...state, exersice: action.payload };
    default:
      return state;
  }
}
