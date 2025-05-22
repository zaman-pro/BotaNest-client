import React from "react";
import AddPlantForm from "../../components/PlantForm/PlantForm";
import useTitle from "../../utils/useTitle";

const AddPlant = () => {
  useTitle("Add Plant - BotaNest");
  return (
    <div className="min-h-screen flex justify-center items-center">
      <AddPlantForm />
    </div>
  );
};

export default AddPlant;
