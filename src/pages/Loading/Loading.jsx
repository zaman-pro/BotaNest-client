import React from "react";
// import useTitle from "../utils/useTitle";

const Loading = () => {
  //   useTitle("Loading...");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <span className="loading loading-spinner text-secondary"></span>
    </div>
  );
};

export default Loading;
