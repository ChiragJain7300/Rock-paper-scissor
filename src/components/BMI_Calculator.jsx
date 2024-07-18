import React, { useState } from "react";

function BMI_Calculator() {
  const [bmi, setBmi] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmi);

      let message = "";
      if (bmi < 18.5) {
        message = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        message = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        message = "You are Overweight";
      } else {
        message = "You are Obese";
      }
      setResult(message);
    } else {
      setBmi("");
      setResult("");
    }
  };
  return (
    <div>
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBmi}>
        <div className="mb-2 flex flex-col items-start">
          <label htmlFor="height">Enter Your Height (in cm):</label>
          <input
            type="number"
            id="height"
            placeholder="0"
            value={height}
            className="px-2 py-1 w-full border"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="mb-2 flex flex-col items-start">
          <label htmlFor="height">Enter Your Weight (in kg):</label>
          <input
            type="number"
            id="weight"
            placeholder="0"
            value={weight}
            className="px-2 py-1 w-full border"
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <button
          className="w-full p-2 bg-blue-600 text-white rounded-md"
          type="submit"
        >
          Calculate BMI
        </button>
      </form>
      {bmi && result && (
        <div className="p-2 w-1/2 mx-auto mt-2 bg-gray-500 text-white">
          <h2>Your BMI is: {bmi}</h2>
          <h2>Result: You are {result}</h2>
        </div>
      )}
    </div>
  );
}

export default BMI_Calculator;
