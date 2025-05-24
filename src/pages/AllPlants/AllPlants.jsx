import React from "react";
import { useLoaderData } from "react-router";
import useTitle from "../../utils/useTitle";
import PlantsTable from "../../components/PlantsTable/PlantsTable";

const AllPlants = () => {
  useTitle("All Plants - BotaNest");
  const plants = useLoaderData();

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-2xl font-bold mb-2 md:mb-6 text-center text-secondary">
        All Plants
      </h2>
      <PlantsTable plants={plants}></PlantsTable>
    </div>
  );
};

export default AllPlants;
