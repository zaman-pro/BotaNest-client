import React, { useEffect, useState } from "react";
import useTitle from "../../utils/useTitle";
import Slider from "../../components/Slider/Slider";
import PlantCard from "../../components/PlantCard/PlantCard";
import "../../components/Slider/slider.css";

const Home = () => {
  useTitle("Home - BotaNest");

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://a10-bota-nest-server-side.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data.slice(0, 6)));
  }, []);

  return (
    <div className="p-4 space-y-5 md:space-y-10 lg:px-10">
      {/* Banner/Slider */}

      <Slider title="Plant Varieties" plants={plants} />

      {/* New Plants */}
      <section className="">
        <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">
          New Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Seasonal Planting Guide */}
      <section className="bg-base-200 md:py-10 p-5 md:px-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
          Seasonal Planting Guide
        </h2>
        <p className="mb-4">
          Learn which plants thrive best in each season and how to adjust your
          care routine for weather changes.
        </p>
        <ul className="list-disc pl-6">
          <li>Spring: Start repotting and fertilizing</li>
          <li>Summer: Increase watering frequency</li>
          <li>Autumn: Reduce feeding and prepare for dormancy</li>
          <li>Winter: Keep plants warm and reduce watering</li>
        </ul>
      </section>

      {/* Indoor Lighting Tips */}
      <section className="bg-base-200 md:py-10 p-5 md:px-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-green-800 text-center">
          Indoor Lighting Tips
        </h2>
        <p className="mb-2">
          Light is crucial for healthy plant growth. Here's how to make the most
          of natural and artificial light:
        </p>
        <ul className="list-disc pl-6">
          <li>South-facing windows provide the most sunlight</li>
          <li>Use grow lights for low-light rooms</li>
          <li>Rotate plants regularly to ensure even growth</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
