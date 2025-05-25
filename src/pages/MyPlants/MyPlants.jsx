import React, { useEffect, useState, useContext } from "react";
import useTitle from "../../utils/useTitle";
import { AuthContext } from "../../provider/AuthContext";
import { Link } from "react-router";
import PlantsTable from "../../components/PlantsTable/PlantsTable";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const MyPlants = () => {
  const { user } = useContext(AuthContext);
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);

    const url = sortBy
      ? `https://a10-bota-nest-server-side.vercel.app/plants?sortBy=${sortBy}`
      : "https://a10-bota-nest-server-side.vercel.app/plants";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (plant) => plant.userEmail.toLowerCase() === user.email.toLowerCase()
        );
        setPlants(filtered);
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [user, sortBy]);

  useTitle(loading ? "Loading..." : "My Plants - BotaNest");

  if (loading) return <Loading></Loading>;

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

              const remainingPlants = plants.filter(
                (plant) => plant._id !== id
              );
              setPlants(remainingPlants);
            }
          });
      }
    });
  };

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-2xl font-bold mb-2 md:mb-6 text-center text-secondary">
        My Plants
      </h2>

      {plants.length === 0 ? (
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl md:text-2xl text-primary border p-5 rounded-2xl">
            Add a plant to begin.
          </p>

          <Link to="/addPlant" className="btn bg-secondary/90 text-white">
            Add Plant
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-4 text-center">
            <label className="mr-2 font-semibold">Sort By :</label>
            <select
              className="border p-1 rounded border-secondary/30"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Default</option>
              <option value="careLevel">Care Level</option>
              <option value="nextWatering">Next Watering</option>
            </select>
          </div>

          <PlantsTable
            plants={plants}
            isMyPlants={true}
            handleDelete={handleDelete}
          ></PlantsTable>
        </>
      )}
    </div>
  );
};

export default MyPlants;
