import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import useTitle from "../../utils/useTitle";
import errorAnimation from "../../assets/Animation - 1748126991659.json";

const ErrorPage = () => {
  useTitle("Error - BotaNest");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px]">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
    </div>
  );
};

export default ErrorPage;
