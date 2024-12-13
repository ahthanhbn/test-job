import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/body/Main";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState(null);
  // const [huyen, setHuyen] = useState(null);

  // useEffect(() => {
  //   // Giả lập việc gọi API
  //   const getTinh = async () => {
  //     const url = "https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1";
  //     try {
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       setData(result?.data.data || []);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // }
  //   getTinh();
  // }, []);


  // useEffect(() => {
  //   // Giả lập việc gọi API
  //   const getHuyen = async (code) => {
  //     const url = `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`;
  //     try {
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       setHuyen(result?.data.data || []);
  //     } catch (error) {
  //       console.error(error);
  //     }
  // }
  //   getHuyen(code);
  // }, []);


  return (
    <>
      <Header/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
