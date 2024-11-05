import React, { useEffect } from "react";

function StudentList(props) {
  let { studentList, setStudentList } = props;

  useEffect(() => {
    const getData = async () => {
      let list = await localStorage.getItem("stuDataList");
      setStudentList(await JSON.parse(list));
    };

    getData();
  });
  return (
    <section className="StudentList">
      {studentList.map((stu, index) => {
        return (
          <div className="stuDetails" key={index}>
            <div className="stuName" style={{ display: "flex" }}>
              <span>{stu.name[0]}</span>
              <h3>{stu.name}</h3>
            </div>
            <div>
              <p>
                <strong>Role: </strong>
                {stu.role}
              </p>
              <p>
                <strong>Email: </strong>
                {stu.email}
              </p>
              <p>
                <strong>Phone Number: </strong>
                {stu.phNo}
              </p>
              <p>
                <strong>Course: </strong>
                {stu.course}
              </p>

              <p>
                <strong>Status: </strong>
                {stu.curStatus}
              </p>
            </div>
            <button className="StuListDelBtn">Delete</button>
          </div>
        );
      })}
    </section>
  );
}

export default StudentList;
