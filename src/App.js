import { useContext, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import FormPage from "./Form Components/FormPage";
import Header from "./Header";
import Home from "./Home Components/Home";
import { Route, Routes } from "react-router-dom";
import stuData from "./Form Components/stuData.json";
import DataContext from "./Context Api/DataContext";

function App() {
  const { setStudentList, setCounts } = useContext(DataContext);
  useEffect(() => {
    const storeData = async () => {
      let storedData = await localStorage.getItem("stuDataList");

      const updateCount = (list) => {
        let pS = list.filter((stu) => stu.curStatus === "Placed");
        let uS = list.filter((stu) => stu.curStatus === "Unplaced");

        let tempCounts = {
          totalStudents: list.length,
          placedStudents: pS.length,
          unplacedStudents: uS.length,
        };

        setCounts(tempCounts);
      };

      if (!storedData) {
        localStorage.setItem("stuDataList", JSON.stringify(stuData));
        let data = localStorage.getItem("stuDataList");
        let stuList = await JSON.parse(data);
        setStudentList(stuList);
        // console.log("stuList", stuList);
        updateCount(stuList);
      } else {
        let stuList = await JSON.parse(storedData);
        setStudentList(stuList);
        // console.log("sd", stuList);
        updateCount(stuList);
      }
    };

    storeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
