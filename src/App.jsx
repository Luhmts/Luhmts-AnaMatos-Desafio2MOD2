/** @format */

import * as S from "./components/Header/header_style.jsx";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;