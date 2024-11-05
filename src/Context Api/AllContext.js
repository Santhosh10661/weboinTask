import React, { createContext } from "react";
import { DataProvider } from "./DataContext";

const AllContext = createContext({});

export const AllContextProvider = ({ children }) => {
  return <DataProvider>{children}</DataProvider>;
};

export default AllContext;
