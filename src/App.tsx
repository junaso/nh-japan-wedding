import { Global, css } from "@emotion/react";
import AppRouter from "./routes";

const globalStyles = css`
  body {
    font-family: "Arial", sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
  }
  a {
    text-decoration: none;
    color: #ff4081;
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
