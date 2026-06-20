import { createContext, useReducer } from "react";
import patientReducer from "../reducers/patientReducer";

const HospitalContext = createContext();

export function HospitalProvider({ children }) {
  const [patients, dispatch] = useReducer(patientReducer, []);

  return (
    <HospitalContext.Provider value={{ patients, dispatch }}>
      {children}
    </HospitalContext.Provider>
  );
}

export default HospitalContext;
