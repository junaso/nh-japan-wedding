import { Global, css } from "@emotion/react";
import AppRouter from "./routes";

const globalStyles = css`
  body {
    font-family: "Arial", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    color: #333;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: #ff4081 !important; /* 강제 적용 */
  }
  
  a:hover {
    text-decoration: underline;
  }
`;

export default function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <AppRouter />
    </>
  );
}
