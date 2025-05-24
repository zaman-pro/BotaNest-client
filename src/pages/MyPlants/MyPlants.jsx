import React, { use, useEffect, useState } from "react";
import useTitle from "../../utils/useTitle";
import { AuthContext } from "../../provider/AuthContext";
import { Link, useLoaderData } from "react-router";
import PlantsTable from "../../components/PlantsTable/PlantsTable";
import Swal from "sweetalert2";

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

  // console.log("myPlants:", plants);

  useTitle("My Plants - BotaNest");

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://a10-bota-nest-server-side.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your plant has been deleted.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });

              const remainigPlants = plants.filter((plant) => plant._id !== id);
              setPlants(remainigPlants);
            }
          });
      }
    });
  };
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
        <PlantsTable
          plants={plants}
          isMyPlants={true}
          handleDelete={handleDelete}
        ></PlantsTable>
      )}
    </div>
  );
};

export default MyPlants;
