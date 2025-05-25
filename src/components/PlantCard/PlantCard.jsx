import React from "react";
import { FaDroplet, FaHeart } from "react-icons/fa6"; // Optional icons
import { Link } from "react-router";

const PlantCard = ({ plant, isSlider }) => {
  const {
    _id,
    imageURL,
    plantName,
    category,
    careLevel,
    healthStatus,
    wateringFrequency,
  } = plant;

  return (
    <Link to={`/plants/${_id}`}>
      <div
        className={`p-2 md:p-5 rounded-lg hover:bg-accent/10 transition duration-200 ${
          isSlider
            ? "min-w-[250px] lg:min-w-[400px] flex-shrink-0 bg-secondary/10"
            : "w-full bg-base-200"
        }`}
      >
        <img
          src={imageURL}
          alt={plantName}
          className={`w-full ${
            isSlider ? "md:h-70 mb-2" : "hidden"
          } object-contain rounded-lg md:flex`}
        />
        <div className="flex items-center gap-4 md:mt-4">
          <img
            className="w-16 h-16 rounded-xl shadow-md object-cover md:hidden"
            src={imageURL}
            alt={plantName}
          />
          <div className="flex-grow">
            <h3 className="text-lg font-bold">{plantName}</h3>
            <p className="text-sm">
              {category} • {careLevel}
            </p>
            <div className="flex gap-2 mt-1 text-sm flex-wrap">
              <span>{wateringFrequency}</span>
              <span> • </span>
              <span>{healthStatus}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlantCard;
