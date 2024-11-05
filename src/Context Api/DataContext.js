import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    role: "",
    email: "",
    phNo: "",
    course: "",
    curstatus: "",
  });
  const [studentList, setStudentList] = useState([]);

  return (
    <DataContext.Provider
      value={{ studentDetails, setStudentDetails, studentList, setStudentList }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
