import React, { useContext } from "react";
import "./FormPage.css";
import Form from "./Form";
import StudentList from "./StudentList";
import DataContext from "../Context Api/DataContext";

function FormPage() {
  const { studentList } = useContext(DataContext);
  return (
    <div className="formPage">
      <Form />
      {studentList && <StudentList />}
    </div>
  );
}

export default FormPage;
