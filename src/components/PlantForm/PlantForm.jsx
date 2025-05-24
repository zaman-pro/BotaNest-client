import React, { use } from "react";
import { AuthContext } from "../../provider/AuthContext";

const PlantForm = ({
  plant,
  handleAddPlant,
  isUpdatePlant,
  handleUpdatePlant,
}) => {
  const { user } = use(AuthContext);
  return (
    <div className="p-3 rounded-2xl border border-secondary/30 shadow-lg lg:w-11/12 mx-auto overflow-hidden">
      {isUpdatePlant ? (
        <h2 className="text-3xl font-bold mb-2 md:mb-6 text-center text-secondary">
          Update Plant
        </h2>
      ) : (
        <h2 className="text-3xl font-bold mb-2 md:mb-6 text-center text-secondary">
          Add New Plant
        </h2>
      )}
      <form
        onSubmit={isUpdatePlant ? handleUpdatePlant : handleAddPlant}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Image</label>
            <input
              type="text"
              name="imageURL"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
              defaultValue={plant?.imageURL}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Plant Name</label>
            <input
              type="text"
              name="plantName"
              placeholder="Plant Name"
              className="input input-bordered w-full"
              required
              defaultValue={plant?.plantName}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              required
              defaultValue={"category"}
            >
              <option defaultValue="">{plant?.category}</option>
              <option value="Succulent">Succulent</option>
              <option value="Fern">Fern</option>
              <option value="Flowering">Flowering</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Care Level</label>
            <select
              name="careLevel"
              className="select select-bordered w-full"
              required
            >
              <option defaultValue="">{plant?.careLevel}</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Last Watered</label>
            <input
              type="date"
              name="lastWatered"
              className="input input-bordered w-full"
              defaultValue={plant?.lastWatered}
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Next Watering</label>
            <input
              type="date"
              name="nextWatering"
              className="input input-bordered w-full"
              defaultValue={plant?.nextWatering}
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Health Status</label>
            <input
              type="text"
              name="healthStatus"
              placeholder="Health Status"
              className="input input-bordered w-full"
              required
              defaultValue={plant?.healthStatus}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">
              Watering Frequency
            </label>
            <input
              type="text"
              name="wateringFrequency"
              placeholder="e.g., every 3 days"
              className="input input-bordered w-full"
              required
              defaultValue={plant?.wateringFrequency}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">User Email</label>
            <input
              type="email"
              name="userEmail"
              placeholder="User Email"
              className="input input-bordered w-full"
              required
              defaultValue={user?.email}
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">User Name</label>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              className="input input-bordered w-full"
              required
              defaultValue={user?.displayName || "Unknown"}
            />
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <label className="label text-xs font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
            defaultValue={plant?.description}
          />
        </fieldset>

        <button type="submit" className="btn bg-secondary/90 text-white w-full">
          {isUpdatePlant ? "Update Plant" : "Add Plant"}
        </button>
      </form>
    </div>
  );
};

export default PlantForm;
