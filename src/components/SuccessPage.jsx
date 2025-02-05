import React from "react";
import success_img from "../assets/Success_img.png";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate()

  const goToStep1=()=>{
    navigate("/")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <img
          src={success_img}
          alt="Success"
          className="mx-auto mb-4 w-20 h-20 object-cover"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Thank you for choosing us!
        </h2>
        <button
          onClick={goToStep1}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
