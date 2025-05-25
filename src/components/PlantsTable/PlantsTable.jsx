import React from "react";
import { Link } from "react-router";

const PlantsTable = ({ plants, isMyPlants, handleDelete }) => {
  //   console.log(isMyPlants);
  return (
    <div>
      <table className="table w-full text-sm md:text-base">
        <thead>
          <tr>
            <th>SN</th>
            <th>Plant Name</th>
            <th className="hidden lg:table-cell">Category</th>
            <th className="hidden md:table-cell">Watering Frequency</th>
            <th className="hidden lg:table-cell">Care Level</th>
            <th className="hidden lg:table-cell">Next Watering</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, index) => (
            <tr key={plant._id} className="hover:bg-accent/10">
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={plant.imageURL} alt={plant.plantName} />
                    </div>
                  </div>
                  <Link to={`/plants/${plant._id}`}>
                    <h1 className="font-bold text-accent">{plant.plantName}</h1>
                  </Link>
                </div>
              </td>
              <td className="hidden lg:table-cell">{plant.category}</td>
              <td className="hidden md:table-cell">
                {plant.wateringFrequency}
              </td>
              <td className="hidden lg:table-cell">{plant.careLevel}</td>
              <td className="hidden lg:table-cell">
                {plant.nextWatering?.split("T")[0]}
              </td>
              <td>
                {isMyPlants ? (
                  <div className="flex flex-col gap-2">
                    <Link
                      to={`/updatePlant/${plant._id}`}
                      className="bg-secondary/80 px-3 py-1 rounded hover:bg-accent text-sm text-center text-white"
                    >
                      Update
                    </Link>

                    <Link
                      onClick={() => handleDelete(plant._id)}
                      className="bg-red-400 px-3 py-1 rounded text-sm text-center text-white hover:bg-red-500"
                    >
                      Delete
                    </Link>
                  </div>
                ) : (
                  <Link
                    className="bg-secondary/80 px-3 py-1 rounded hover:bg-accent text-sm text-center text-white"
                    to={`/plants/${plant._id}`}
                  >
                    Details
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlantsTable;
