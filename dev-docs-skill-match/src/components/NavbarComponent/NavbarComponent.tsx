// import React from "react";

// const NavbarComponent: React.FC = () => {

//   const liveLink = "http://localhost:3000"
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-section">
//           <div className="navbar-logo">
//             <a href={`${liveLink}`}>
//                 <p>hello</p>
//             </a>
//           </div>
//           <div className="navbar-links">
//             <a href={`${liveLink}/docs/intro`} className="navbar-link navbar-hidden-components">
//               User Docs
//             </a>
//           </div>
//         </div>
//         <div className="navbar-section">
//           <a href="#" className="navbar-link navbar-hidden-components">
//             Submit a ticket
//           </a>
//           <button className="navbar-button-request navbar-hidden-components">Request A Demo</button>
//           <button className="navbar-button-sign-in navbar-hidden-components">Sign in</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarComponent;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const NavbarComponent: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const liveLink = "https://dev-docs-skill-match.vercel.app";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbarr">
      <div className="navbar-container">
        <div className="navbar-section">
          <div className="navbar-logo">
            <a href={liveLink}>
            <svg
              className="logo"
              width="170"
              height="25"
              viewBox="0 0 170 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Main 1">
                <g id="Group">
                  <g id="Group_2">
                    <path
                      id="Vector"
                      d="M45.2149 8.5714C44.5325 7.52745 42.6931 6.53844 40.557 6.53844C37.7978 6.53844 36.4924 7.60986 36.4924 8.95602C36.4924 10.5494 38.5098 10.989 40.8536 11.2362C44.9479 11.7033 48.7454 12.6923 48.7454 17.0329C48.7454 21.0714 44.8886 22.8296 40.4976 22.8296C36.4924 22.8296 33.4069 21.6758 31.9531 18.3791L35.0386 16.8956C35.899 18.9011 38.1835 19.7802 40.557 19.7802C42.8711 19.7802 45.0666 19.0384 45.0666 17.0604C45.0666 15.3571 43.1381 14.6428 40.5273 14.3956C36.5221 13.956 32.8135 12.967 32.8135 8.90107C32.8135 5.16481 36.7891 3.62635 40.4086 3.59888C43.4645 3.59888 46.639 4.39558 48.1224 7.19778L45.2149 8.5714Z"
                      fill="black"
                    />
                    <path
                      id="Vector_2"
                      d="M55.5395 3.70898V14.7529L60.4348 9.34085H64.7367V9.53316L58.803 15.687L65.5674 22.5826V22.8299H61.2358L55.5395 16.731V22.8299H51.9199V3.70898H55.5395Z"
                      fill="black"
                    />
                    <path
                      id="Vector_3"
                      d="M70.8481 5.54897C70.8481 8.15886 66.6055 8.15886 66.6055 5.54897C66.6055 2.93908 70.8481 2.93908 70.8481 5.54897ZM66.9318 9.28523V22.8292H70.5217V9.28523H66.9318Z"
                      fill="black"
                    />
                    <path
                      id="Vector_4"
                      d="M77.0797 3.70898V22.8299H73.5195V3.70898H77.0797Z"
                      fill="black"
                    />
                    <path
                      id="Vector_5"
                      d="M83.5172 3.70898V22.8299H79.957V3.70898H83.5172Z"
                      fill="black"
                    />
                    <path
                      id="Vector_6"
                      d="M105.979 9.24725L99.2443 17.5714H98.4729L91.8866 9.21978V23.1483H88V4H92.4799L98.9476 12.2418L105.415 4H109.866V23.1483H105.979V9.24725Z"
                      fill="black"
                    />
                    <path
                      id="Vector_7"
                      d="M123.51 8.92902H126.952V22.418H123.569L123.391 20.44C122.561 22.0334 120.276 22.8026 118.674 22.8301C114.372 22.8576 111.168 20.3851 111.168 15.6598C111.168 11.0169 114.491 8.57188 118.763 8.59935C120.721 8.59935 122.561 9.451 123.391 10.7972L123.51 8.92902ZM114.758 15.6598C114.758 18.2422 116.686 19.7532 119.06 19.7532C124.726 19.7532 124.726 11.5664 119.06 11.5664C116.686 11.5939 114.758 13.0774 114.758 15.6598Z"
                      fill="black"
                    />
                    <path
                      id="Vector_8"
                      d="M134.161 5.35669V9.17537H138.166V12.06H134.132V17.8842C134.132 19.1754 134.903 19.8072 136.03 19.8072C136.594 19.8072 137.247 19.6424 137.781 19.3952L138.789 22.2523C137.751 22.6369 136.891 22.8017 135.793 22.8292C132.618 22.9391 130.571 21.2633 130.571 17.9116V12.06H127.842V9.20284H130.571V5.71383L134.161 5.35669Z"
                      fill="black"
                    />
                    <path
                      id="Vector_9"
                      d="M153.06 20.6858C151.369 22.2243 149.618 22.8287 147.452 22.8287C143.24 22.8287 139.709 20.466 139.709 15.6858C139.709 10.9056 143.21 8.54297 147.452 8.54297C149.529 8.54297 151.102 9.09242 152.704 10.5485L150.419 12.7737C149.559 12.0595 148.491 11.7023 147.482 11.7023C145.049 11.7023 143.299 13.3507 143.299 15.6858C143.299 18.2682 145.198 19.6144 147.423 19.6144C148.58 19.6144 149.737 19.3122 150.627 18.488L153.06 20.6858Z"
                      fill="black"
                    />
                    <path
                      id="Vector_10"
                      d="M157.955 3.68018V11.1802C159.261 9.61424 160.863 9.14721 162.494 9.14721C166.618 9.14721 168.458 11.7571 168.458 15.7131V22.8285H164.868V15.7406C164.868 13.2681 163.473 12.2516 161.545 12.2516C159.409 12.2516 157.955 13.9274 157.955 15.9329V22.8285H154.365V3.68018H157.955Z"
                      fill="black"
                    />
                  </g>
                  <path
                    id="Vector_11"
                    d="M23.6756 3.59839L17.2079 9.5874H9.4051C9.4051 9.5874 9.37543 9.5874 9.37543 9.61487V16.8127C9.37543 16.8127 9.37543 16.8401 9.34576 16.8401H8.9304C5.01417 16.8401 1.57264 13.8731 1.54297 10.2193C1.54297 8.37861 2.34402 6.73026 3.64943 5.54894C4.95484 4.34015 6.73494 3.59839 8.69306 3.59839H23.6756ZM18.0386 9.5874H17.2079C17.2079 9.5874 17.1782 9.5874 17.1782 9.61487V16.8127C17.1782 16.8127 17.1782 16.8401 17.1486 16.8401H9.4051L2.93738 22.8017V22.8292H18.276C20.2637 22.8292 22.0438 22.0874 23.3196 20.8786C24.625 19.6698 25.426 18.0215 25.426 16.2083C25.426 12.5544 21.9845 9.5874 18.0386 9.5874Z"
                    fill="black"
                  />
                </g>
              </g>
            </svg>
            </a>
          </div>
          <div className="navbar-links">
            <a href={`${liveLink}/docs/intro`} className="navbar-link navbar-hidden-components">
              User Docs
            </a>
          </div>
        </div>
        <div className="navbar-section navbar-hidden-components">
          <a href="#" className="navbar-link">
            Submit a ticket
          </a>
          <button className="navbar-button-request">Request A Demo</button>
          <button className="navbar-button-sign-in">Sign in</button>
        </div>
        <div className="navbar-hamburger" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </div>
      {sidebarOpen && <Sidebar />}
    </nav>
  );
};

export default NavbarComponent;
