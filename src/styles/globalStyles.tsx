/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import React from "react"; // React를 명시적으로 import

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        padding: 10px; /* 기본 여백 추가 */
        background-color: #F7F2EC;
        color: #333;
      }

      a {
        text-decoration: none;
        color: rgba(69, 60, 63, 0.57) !important;
      }
      
      a:hover {
        text-decoration: underline;
      }
    `}
  />
);

export default GlobalStyles;
