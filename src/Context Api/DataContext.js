import React, { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [studentList, setStudentList] = useState([]);
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    role: "",
    email: "",
    phNo: "",
    course: "",
    curStatus: "",
  });
  const [counts, setCounts] = useState([
    { title: "total students", nfs: 0 },
    { title: "placed students", nfs: 0 },
    { title: "unplaced students", nfs: 0 },
  ]);
  return (
    <DataContext.Provider
      value={{
        studentList,
        setStudentList,
        studentDetails,
        setStudentDetails,
        counts,
        setCounts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
