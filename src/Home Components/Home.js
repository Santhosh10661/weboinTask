import React, { useContext } from "react";
import HomeHeader from "./HomeHeader";
import "./Home.css";
import About from "./About";
import Benifits from "./Benifits";
import Counter from "./Counter";
import DataContext from "../Context Api/DataContext";

function Home() {
  const { studentList } = useContext(DataContext);
  return (
    <div>
      <HomeHeader />
      <About />
      <Benifits />
      {studentList && <Counter />}
    </div>
  );
}

export default Home;
