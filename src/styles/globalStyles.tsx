/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import React from "react"; // React를 명시적으로 import

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      body {
      font-family: "Arial", sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #F7F2EC;
      color: #333;
      height: 100vh;
  }

  a {
    text-decoration: none;
    color:rgba(69, 60, 63, 0.57) !important; /* 강제 적용 */
  }
  
  a:hover {
    text-decoration: underline;
  }
    `}
  />
);

export default GlobalStyles;
