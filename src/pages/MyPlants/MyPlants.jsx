import React, { use, useEffect, useState } from "react";
import useTitle from "../../utils/useTitle";
import { AuthContext } from "../../provider/AuthContext";
import { Link, useLoaderData } from "react-router";
import PlantsTable from "../../components/PlantsTable/PlantsTable";

const MyPlants = () => {
  const { user } = use(AuthContext);
  const initialPlants = useLoaderData();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const filtered = initialPlants.filter(
      (plant) => plant?.userEmail?.toLowerCase() === user.email.toLowerCase()
    );
    setPlants(filtered);
  }, [user, initialPlants]);

  console.log("myPlants:", plants);

  useTitle("My Plants - BotaNest");
  return (
    <div className="p-2 md:p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-2 md:mb-6 text-center text-secondary">
        My Plants
      </h2>

      {plants.length === 0 ? (
        <div className=" flex flex-col items-center gap-5">
          <p className="text-2xl text-gray-500">No plants added yet.</p>

          <Link to="/addPlant" className="btn bg-secondary/90">
            Add Plant
          </Link>
        </div>
      ) : (
        <PlantsTable plants={plants} isMyPlants={true}></PlantsTable>
      )}
    </div>
  );
};

export default MyPlants;
