import { useState } from "react";

const predict_object = {
  10: "lentil",
  6: "cotton",
  14: "mungbean",
  17: "papaya",
  3: "chickpea",
  7: "grapes",
  12: "mango",
  1: "banana",
  16: "orange",
  5: "coffee",
  18: "pigeon peas",
  15: "muskmelon",
  9: "kidney beans",
  11: "maize",
  2: "black gram",
  0: "apple",
  19: "pomegranate",
  20: "rice",
  8: "jute",
  4: "coconut",
  13: "moth beans",
};

function App() {
  const [prediction, setPrediction] = useState(null);
  const [start, setStart] = useState({
    NITROGEN: "",
    PHOSPHORUS: "",
    POTASSIUM: "",
    TEMPERATURE: "",
    HUMIDITY: "",
    PH: "",
    RAINFALL: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setStart({
      ...start,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", start);

    const featureArray = [
      parseFloat(start.NITROGEN),
      parseFloat(start.PHOSPHORUS),
      parseFloat(start.POTASSIUM),
      parseFloat(start.TEMPERATURE),
      parseFloat(start.HUMIDITY),
      parseFloat(start.PH),
      parseFloat(start.RAINFALL),
    ];

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ features: featureArray }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setPrediction("Error fetching prediction");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-teal-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-gray-700 text-4xl font-extrabold mb-6">
        ZenML Model Prediction Deployment
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(start).map((feature, index) => (
            <div key={index} className="flex flex-col">
              <label
                htmlFor={feature}
                className="text-gray-600 font-medium mb-2"
              >
                {feature}:
              </label>
              <input
                type="text"
                name={feature}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={start[feature]}
                onChange={handleInputChange}
                required
                id={feature}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition"
          >
            Predict
          </button>
        </form>
      </div>
      <div className="mt-8 w-full text-center">
        <p className="text-gray-800 text-lg">
          Final Prediction Class:{" "}
          {prediction !== null ? (
            predict_object[prediction] || "Unknown prediction"
          ) : (
            <span className="text-red-500 font-bold">
              Enter Values and Submit for Prediction
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
