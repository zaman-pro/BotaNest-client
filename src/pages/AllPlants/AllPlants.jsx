import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllPlants = () => {
  const initialPlants = useLoaderData();
  const [plants, setPlants] = useState(initialPlants);

  return (
    <div className="p-2 md:p-4">
      <table className="table w-full text-sm md:text-base">
        <thead>
          <tr>
            <th>SN</th>
            <th>Plant Name</th>
            <th className="hidden sm:table-cell">Category</th>
            <th className="hidden lg:table-cell">Watering</th>
            <th className="hidden lg:table-cell">Username</th>
            <th className="hidden lg:table-cell">Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, index) => (
            <tr key={plant._id} className="hover">
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-10 h-10">
                      <img src={plant.imageURL} alt={plant.plantName} />
                    </div>
                  </div>
                  <div className="font-bold">{plant.plantName}</div>
                </div>
              </td>
              <td className="hidden sm:table-cell">{plant.category}</td>
              <td className="hidden lg:table-cell">
                {plant.wateringFrequency}
              </td>
              <td className="hidden lg:table-cell">{plant.userName}</td>
              <td className="hidden lg:table-cell">{plant.userEmail}</td>
              <td>
                <Link to={`/plants/${plant._id}`}>
                  <button className="btn btn-xs bg-secondary/90">
                    Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlants;
