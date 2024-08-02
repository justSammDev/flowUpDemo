// NotFound.jsx
import React from "react";
import NavBar from "../utils/NavBar";
import Footer from "../utils/Footer";

function NotFound() {
  return (
    <div className="flex flex-col items-center relative justify-center">
      <NavBar />
      <div className="py-36 px-4 flex flex-col items-center text-center gap-10 justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-8xl">
          404 - Page Not Found
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl">
          The page you're looking for doesn't exist.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
