import React, { useState } from "react";
import "./FormPage.css";
import Form from "./Form";
import StudentList from "./StudentList";

function FormPage() {
  const [studentList, setStudentList] = useState([]);
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    role: "",
    email: "",
    phNo: "",
    course: "",
    curstatus: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;

    setStudentDetails((curDetails) => {
      return { ...curDetails, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentList((curList) => {
      return [...curList, studentDetails];
    });
    setStudentDetails({
      name: "",
      role: "",
      email: "",
      phNo: "",
      course: "",
      curstatus: "",
    });
  };

  return (
    <div className="formPage">
      <Form
        studentDetails={studentDetails}
        setStudentDetails={setStudentDetails}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <StudentList studentList={studentList} setStudentList={setStudentList} />
    </div>
  );
}

export default FormPage;
