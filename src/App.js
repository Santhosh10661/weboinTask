import { useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import FormPage from "./Form Components/FormPage";
import Header from "./Header";
import Home from "./Home Components/Home";
import { Route, Routes } from "react-router-dom";
import stuData from "./Form Components/stuData.json";

function App() {
  useEffect(() => {
    const storeData = async () => {
      let storedData = await localStorage.getItem("stuDataList");
      if (!storedData) {
        localStorage.setItem("stuDataList", JSON.stringify(stuData));
      }
      // let filter = JSON.parse(storedData).filter(
      //   (stu) => stu.curStatus === "Placed"
      // );

      // console.log(filter);
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
