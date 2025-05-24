import React from "react";
import AddPlantForm from "../../components/PlantForm/PlantForm";
import useTitle from "../../utils/useTitle";
import Swal from "sweetalert2";

const AddPlant = () => {
  useTitle("Add Plant - BotaNest");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    // send plantData to the db
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
          console.log("response from db", data);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Plant Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <AddPlantForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddPlant;
