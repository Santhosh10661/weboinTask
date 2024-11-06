import React from "react";
import "./FormPage.css";
import Form from "./Form";
import StudentList from "./StudentList";

function FormPage() {
  return (
    <div className="formPage">
      <Form />
      <StudentList />
    </div>
  );
}

export default FormPage;
