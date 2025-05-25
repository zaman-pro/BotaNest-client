import React from "react";
import PlantForm from "../../components/PlantForm/PlantForm";
import useTitle from "../../utils/useTitle";
import Swal from "sweetalert2";

const AddPlant = () => {
  useTitle("Add Plant - BotaNest");

  const handleAddPlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    fetch("https://a10-bota-nest-server-side.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Plant Added",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div className="min-h-screen px-3 my-3">
      <PlantForm handleAddPlant={handleAddPlant} />
    </div>
  );
};

export default AddPlant;
