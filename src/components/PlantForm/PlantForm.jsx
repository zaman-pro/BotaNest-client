import React from "react";

const PlantForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const plantData = Object.fromEntries(formData.entries());

    // send plantData to the db
    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(plantData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("response from db", data);
      });
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
              name="imageURL"
              placeholder="Image URL"
              className="input input-bordered w-full"
              required
              defaultValue={"imageURL"}
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
              defaultValue={"plantName"}
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
              <option defaultValue="">Select Category</option>
              <option value="succulent">Succulent</option>
              <option value="fern">Fern</option>
              <option value="flowering">Flowering</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Care Level</label>
            <select
              name="careLevel"
              className="select select-bordered w-full"
              required
            >
              <option defaultValue="">Select Care Level</option>
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
              className="input input-bordered w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label text-xs font-semibold">Next Watering</label>
            <input
              type="date"
              name="nextWatering"
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
              className="input input-bordered w-full"
              required
              defaultValue={"healthStatus"}
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
              defaultValue={"wateringFrequency"}
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
              defaultValue={"user@email"}
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
              defaultValue={"user_name"}
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
            defaultValue={"Description"}
          />
        </fieldset>

        <button type="submit" className="btn bg-secondary/90 w-full">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default PlantForm;
