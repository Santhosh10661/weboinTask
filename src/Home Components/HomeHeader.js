import React from "react";
import BackgroundImg from "../Assets/img/Background Hero.svg";

function HomeHeader() {
  return (
    <header className="headerSection">
      <img src={BackgroundImg} alt="" className="headerSecBgImg" />
      <div className="headerSecConBox">
        <div className="headerSecContent">
          <h1>Learn from the best, be your best..</h1>
          <p>
            Give yourself an upgrade with our inspiring online courses and join
            a global community of learners
          </p>
          <a href="" >get started</a>
        </div>
      </div>
    </header>
  );
}

export default HomeHeader;
