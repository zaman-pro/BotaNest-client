import React, { useState, useEffect } from "react";
import useTitle from "../../utils/useTitle";
import PlantsTable from "../../components/PlantsTable/PlantsTable";
import { Link } from "react-router";
import Loading from "../Loading/Loading";

const AllPlants = () => {
  const [plants, setPlants] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = sortBy
      ? `https://a10-bota-nest-server-side.vercel.app/plants?sortBy=${sortBy}`
      : "https://a10-bota-nest-server-side.vercel.app/plants";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [sortBy]);

  useTitle(loading ? "Loading..." : "All Plants - BotaNest");

  if (loading) return <Loading></Loading>;

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-2xl font-bold mb-2 md:mb-6 text-center text-secondary">
        All Plants
      </h2>

      {plants.length === 0 ? (
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl md:text-2xl text-primary border p-5 rounded-2xl">
            No plants added yet.
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
          <PlantsTable plants={plants}></PlantsTable>
        </>
      )}
    </div>
  );
};

export default AllPlants;
