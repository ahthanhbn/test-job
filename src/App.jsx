import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Header/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
