import React, { useEffect } from "react";
import Layout from "./Layout/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Admissions from "./components/Admissions";
import StudentLife from "./components/StudentLife";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/Image Container (1).png";
import img3 from "./assets/Sub Container.png";
import img4 from "./assets/Items Container.png";
import img5 from "./assets/Sub Container (1).png";
import img6 from "./assets/Container.png";
import img7 from "./assets/Logo (2).png";
import img8 from "./assets/Buttons Container.png";
import img9 from "./assets/Icon (4).png";
import img10 from "./assets/Icon (5).png";
import img11 from "./assets/Icon (6).png";
import img12 from "./assets/Abstract Design.png";
import img13 from "./assets/Sub Container (2).png";
import img14 from "./assets/Sub Containerr (1).png";
import img15 from "./assets/Sub Container (4).png";
import Academics from "./components/Academics";
import img16 from "./assets/Image (5).png";
import { initAOS } from "./config/aos";
import img17 from "./assets/Image (7).png"
import img18 from "./assets/Images Container.png"
import img19 from "./assets/Images Container (1).png"
import img20 from "./assets/Images Container (2).png"
import img21 from "./assets/Images Container (3).png"
import img22 from "./assets/Images Container (4).png"
import img23 from "./assets/Profile Container.png"
import img24 from "./assets/Icon Container.png"
import User from "./components/User";
const App = () => {
  useEffect(() => {
    initAOS();
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout
          img1={img1}
          img7={img7}
          img8={img8}
          img9={img9}
          img10={img10}
          img11={img11}
        />
      ),
      children: [
        {
          index: true,
          element: (
            <Home img2={img2} img3={img3} img4={img4} img5={img5} img6={img6} img23={img23} img24={img24} />
          ),
        },
        {
          path: "aboutus",
          element: (
            <About
              img12={img12}
              img13={img13}
              img14={img14}
              img15={img15}
              img9={img9}
              img24={img24}
            />
          ),
        },
        {
          path: "academics",
          element: <Academics img12={img12} img3={img3} img16={img16} img18={img18} img19={img19} img20={img20} img21={img21} img22={img22} />,

        },
        {
          path: "admissions",
          element: <Admissions  img12={img12} />,
        },
        {
          path: "studentlife",
          element: <StudentLife img17={img17} img3={img3} img12={img12} />,
        },
        {
          path: "user/:id",
          element: <User img12={img12} />
          
        },

      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
