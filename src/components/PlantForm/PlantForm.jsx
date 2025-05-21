import React, { useState } from "react";

const AddPlantForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // send coffee data to the db
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-xl p-6 rounded-2xl shadow-md border border-secondary/30 my-4">
      <h2 className="text-3xl font-bold text-center text-secondary mb-6">
        Add a New Plant
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Image</label>

            <input
              type="text"
              name="image"
              placeholder="Image"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Plant Name</label>

            <input
              type="text"
              name="plantName"
              placeholder="Plant Name"
              value={formData.plantName}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Select Category
              </option>
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Care Level</label>

            <select
              name="careLevel"
              value={formData.careLevel}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option disabled value="">
                Select Care Level
              </option>
              <option value="easy">Easy</option>
              <option value="moderate">Moderate</option>
              <option value="difficult">Difficult</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Last Watered</label>

            <input
              type="date"
              name="lastWatered"
              value={formData.lastWatered}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Next Watering</label>

            <input
              type="date"
              name="nextWatering"
              value={formData.nextWatering}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Health Status</label>

            <input
              type="text"
              name="healthStatus"
              placeholder="Health Status"
              value={formData.healthStatus}
              onChange={handleChange}
              className="input input-bordered w-full"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">
              Watering Frequency
            </label>
            <input
              type="text"
              name="wateringFrequency"
              placeholder="Watering Frequency"
              value={formData.wateringFrequency}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">User Email</label>

            <input
              type="email"
              name="userEmail"
              placeholder="User Email"
              value={formData.userEmail}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">User Name</label>

            <input
              type="text"
              name="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <label className="label text-xs font-semibold">Description</label>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
        </fieldset>

        <button type="submit" className="btn bg-secondary/90 w-full">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlantForm;
