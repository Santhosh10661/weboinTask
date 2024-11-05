import React, { useContext, useEffect } from "react";
import DataContext from "../Context Api/DataContext";

function Counter() {
  const { counts, studentList } = useContext(DataContext);

  useEffect(() => {
    // const total = studentList.filter(
    //   (stu) => stu.curStatus === "Placed" && stu
    // );
    // console.log(studentList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="counterSection">
      <div className="counterConBox">
        <div className="counterContent">
          <div className="counterHeading">
            <div>
              <h1>
                <p className="counterHeadp1">
                  Empower your future with cutting-edge skills
                </p>
                <span className="counterHeadSpan">
                  New, Embrace innovation, master technology, & shape the
                  digital world
                </span>
                <p className="counterHeadp2">
                  Your journey to success starts here.
                </p>
              </h1>
            </div>
          </div>
          <div className="counterConSec">
            <p className="countersDesc">
              Join our course with a proven track record of success, where
              learning isn't just about gaining skills; it's about growing them.
              Join us, learn with confidence, and watch your skills soar.
            </p>
            <div className="countBox">
              {counts.map((count, index) => {
                return (
                  <div
                    className="count"
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <span className="countTitle">{count.title}</span>
                    <p className="nfc">{count.nfs}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
