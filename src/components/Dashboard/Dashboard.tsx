import { useEffect, useState } from "react";
import FirstPage from "../../pages/FirstPage/FirstPage";
import SecondPage from "../../pages/SecondPage/SecondPage";
import ThirdPage from "../../pages/ThirdPage/ThirdPage";

import "./Dashboard.css";
import FourthPage from "../../pages/FourthPage/FourthPage";
import FifthPage from "../../pages/FifthPage/FifthPage";
import SixthPage from "../../pages/SixthPage/SixthPage";
import Footer from "../Footer/Footer";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
