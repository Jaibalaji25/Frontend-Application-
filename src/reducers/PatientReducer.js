import React from "react";

export default function PatientReducer() {
  switch (action.type) {
    case "ADD_PATIENT":
      return [...state, action.payload];
    case "DELETE_PATIENT":
      return state.filter((p) => p.id !== action.payload);
    default:
      return state;
  }
}
