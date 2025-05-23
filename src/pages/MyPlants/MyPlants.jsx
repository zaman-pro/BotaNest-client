import React, { use, useEffect, useState } from "react";
import useTitle from "../../utils/useTitle";
import { AuthContext } from "../../provider/AuthContext";
import { Link, useLoaderData } from "react-router";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const initialPlants = useLoaderData();
  const [myPlants, setMyPlants] = useState([]);

  useEffect(() => {
    // console.log("Logged in user email:", user?.email);
    // console.log("Initial Plants:", initialPlants);

    if (user?.email && Array.isArray(initialPlants)) {
      const filtered = initialPlants.filter(
        (plant) => plant?.userEmail.toLowerCase() === user.email.toLowerCase()
      );
      setMyPlants(filtered);
    }
  }, [user, initialPlants]);

  console.log("Updated myPlants:", myPlants);

  useTitle("My Plants - BotaNest");
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        My Plants
      </h2>

      {myPlants.length === 0 ? (
        <p className="text-center text-gray-500">No plants added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myPlants.map((plant) => (
            <div
              key={plant._id}
              className="p-4 rounded-xl shadow flex flex-col"
            >
              <img
                src={plant.imageURL}
                alt={plant.plantName}
                className="h-40 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-bold text-green-700">
                {plant.plantName}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {plant.wateringFrequency}
              </p>

              <div className="mt-auto flex justify-between gap-2">
                <Link to={"/addPlant"}>
                  <button className="bg-secondary/90 px-3 py-1 rounded hover:bg-accent text-sm">
                    Update
                  </button>
                </Link>

                <button className="bg-secondary/90 px-3 py-1 rounded hover:bg-accent text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlants;
