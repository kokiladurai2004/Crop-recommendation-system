import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handlePredictRedirect = () => {
    navigate("/predict"); // Redirects to the predict page
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {/* Header Section */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Big Mart Sales Prediction
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Unlock the power of machine learning to predict sales for Big Mart.
          With advanced algorithms and real-world data, you can estimate
          performance and optimize your strategy for better results.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="mt-8">
        <button
          onClick={handlePredictRedirect}
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Get Started with Prediction
        </button>
      </main>

      {/* Footer Section */}
      <footer className="mt-16 text-gray-500">
        © {new Date().getFullYear()} Big Mart Sales Prediction
      </footer>
    </div>
  );
};

export default HomePage;
