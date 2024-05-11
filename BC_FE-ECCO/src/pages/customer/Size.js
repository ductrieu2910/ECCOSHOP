import React from "react";
import Header from "../../components/customer/Header/Header";
import Footer from "../../components/customer/Footer/Footer";
import size from "../../assets/customer/images/size2.webp";

export default function Size() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "100px" }} className="container">
        <h1 style={{display:"flex",justifyContent:"center"}}>BẢNG SIZE</h1>
        <img src={size} width={"100%"} alt="" />
      </div>
      <Footer />
    </>
  );
}
