import React from "react";
import Swal from "sweetalert2";
import PlantForm from "../../components/PlantForm/PlantForm";
import { useLoaderData } from "react-router";
import useTitle from "../../utils/useTitle";

const UpdatePlant = () => {
  useTitle("Update Plant - BotaNest");

  const plant = useLoaderData();

  const handleUpdatePlant = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    fetch(`https://a10-bota-nest-server-side.vercel.app/plants/${plant._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Plant Updated",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          });
        }
      });
  };
  return (
    <div className="min-h-screen px-3 mt-3">
      <PlantForm
        plant={plant}
        handleUpdatePlant={handleUpdatePlant}
        isUpdatePlant={true}
      />
    </div>
  );
};

export default UpdatePlant;
