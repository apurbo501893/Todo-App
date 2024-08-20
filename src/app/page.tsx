import React from "react";
import InputForm from "./components/InputForm";
import Footer from "./components/Footer";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 flex flex-col items-center py-5 px-2 md:px-4">
      <div
        className="w-full max-w-screen-md bg-bodyColor p-4 md:p-2
      lg:p-10 rounded-md flex flex-col gap-5"
      >
        <InputForm />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
