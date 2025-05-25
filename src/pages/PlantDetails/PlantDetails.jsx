import React from "react";
import { useLoaderData } from "react-router";
import useTitle from "../../utils/useTitle";

const PlantDetails = () => {
  const plant = useLoaderData();
  useTitle(`${plant.plantName} - BotaNest`);

  return (
    <div className="min-h-screen px-3 mt-3">
      <div className="rounded-2xl shadow-lg lg:w-11/12 mx-auto overflow-hidden">
        <div className="flex justify-center p-3">
          <img
            src={plant.imageURL}
            alt={plant.plantName}
            className="w-40 h-40 object-contain rounded-2xl"
          />
        </div>

        <div className="p-3 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-accent mb-1">
            {plant.plantName}
          </h2>
          <p className="text-sm text-gray-500 mb-4 italic">{plant.userEmail}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-3 rounded-xl">
              <p className="text-sm text-gray-700 font-semibold">Category</p>
              <p className="text-sm text-gray-600">{plant.category}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">
              <p className="text-sm text-gray-700 font-semibold">Care Level</p>
              <p className="text-sm text-gray-600">{plant.careLevel}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">
              <p className="text-sm text-gray-700 font-semibold">
                Last Watered
              </p>
              <p className="text-sm text-gray-600">
                {plant.lastWatered?.split("T")[0]}
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">
              <p className="text-sm text-gray-700 font-semibold">
                Next Watering
              </p>
              <p className="text-sm text-gray-600">
                {plant.nextWatering?.split("T")[0]}
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">
              <p className="text-sm text-gray-700 font-semibold">
                Health Status
              </p>
              <p className="text-sm text-gray-600">{plant.healthStatus}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-xl">
              <p className="text-sm text-gray-700 font-semibold">
                Watering Frequency
              </p>
              <p className="text-sm text-gray-600">{plant.wateringFrequency}</p>
            </div>
          </div>

          <div className="bg-green-50 p-3 rounded-xl mb-4">
            <p className="text-gray-600 text-sm">{plant.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
