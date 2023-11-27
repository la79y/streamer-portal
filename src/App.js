import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routing from "./routers/routing";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routing />
    </>
  );
}
