import React, { useContext } from "react";
import DataContext from "../Context Api/DataContext";

function StudentList() {
  const { studentList } = useContext(DataContext);

  // useEffect(() => {
  //   const getData = async () => {
  //     let list = localStorage.getItem("stuDataList");
  //     setStudentList(await JSON.parse(list));
  //   };

  //   getData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
                {stu.phoneNumber}
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
