import React, { useEffect, useState } from "react";
import useTitle from "../../utils/useTitle";
import Slider from "../../components/Slider/Slider";
import PlantCard from "../../components/PlantCard/PlantCard";
import Loading from "../Loading/Loading";
import Lottie from "lottie-react";
import seasonalGuide from "../../assets/Animation - 1748175727528.json";
import lightingTips from "../../assets/Animation - 1748181773721.json";
import "../../components/Slider/slider.css";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://a10-bota-nest-server-side.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data.slice(0, 6)))
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  useTitle(loading ? "Loading..." : "Home - BotaNest");

  if (loading) return <Loading />;

  return (
    <div className="p-4 space-y-5 md:space-y-10 lg:px-10">
      <Slider title="Plant Varieties" plants={plants} />

      <section>
        <h2 className="text-2xl font-bold mb-6 text-secondary text-center">
          New Plants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Seasonal Planting */}
      <section className="bg-base-200 md:py-10 p-5 md:px-12 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px] hidden md:flex">
            <Lottie animationData={seasonalGuide} loop={true} />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-secondary text-center md:text-left">
              Seasonal Planting
            </h2>
            <p className="mb-4">
              Learn which plants thrive best in each season and how to adjust
              your care routine for weather changes.
            </p>
            <ul className="list-disc pl-6">
              <li>Spring: Start repotting and fertilizing</li>
              <li>Summer: Increase watering frequency</li>
              <li>Autumn: Reduce feeding and prepare for dormancy</li>
              <li>Winter: Keep plants warm and reduce watering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Indoor Lighting */}
      <section className="bg-base-200 md:py-10 p-5 md:px-12 rounded-xl">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-secondary text-center md:text-left">
              Indoor Lighting Tips
            </h2>
            <p className="mb-2">
              Light is crucial for healthy plant growth. Here's how to make the
              most of natural and artificial light:
            </p>
            <ul className="list-disc pl-6">
              <li>South-facing windows provide the most sunlight</li>
              <li>Use grow lights for low-light rooms</li>
              <li>Rotate plants regularly to ensure even growth</li>
            </ul>
          </div>

          <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[500px] hidden md:flex">
            <Lottie animationData={lightingTips} loop={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
