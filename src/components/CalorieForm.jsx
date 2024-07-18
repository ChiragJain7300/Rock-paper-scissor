import React, { useState } from "react";

function CalorieForm() {
  const [calorieItems, setCalorieItems] = useState([]);
  return (
    <>
      <div className="w-3/4 bg-white text-black mx-auto p-3">
        <form
          className="grid grid-cols-2 gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            const calorieItem = {
              itemName: e.target.itemName.value,
              calories: e.target.calories.value,
              protein: e.target.protein.value,
              carbs: e.target.carbs.value,
              fats: e.target.fats.value,
            };
            console.log(calorieItem);
          }}
        >
          <input
            type="text"
            name="itemName"
            id="itemName"
            placeholder="Item Name"
            className="py-1 px-2 border rounded-md"
          />
          <input
            type="text"
            name="calories"
            id="calories"
            placeholder="Calories"
            className="py-1 px-2 border rounded-md"
          />
          <input
            type="number"
            name="carbs"
            id="carbs"
            placeholder="Carbs (g)"
            className="py-1 px-2 border rounded-md"
          />
          <input
            type="number"
            name="protein"
            id="protein"
            placeholder="Protein (g)"
            className="py-1 px-2 border rounded-md"
          />
          <input
            type="number"
            name="fats"
            id="fats"
            placeholder="Fats (g)"
            className="py-1 px-2 border rounded-md"
          />
          <div className="col-span-2 grid grid-cols-2 gap-5">
            <button
              className="text-white py-1 px-2 rounded-md bg-green-700"
              type="submit"
            >
              Add Item
            </button>
            <button className="text-white py-1 px-2 rounded-md bg-red-700">
              Delete All Items
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CalorieForm;
