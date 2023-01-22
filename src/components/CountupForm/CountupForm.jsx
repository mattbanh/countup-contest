import axios from "axios";
import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_API_BACKEND_URL;
const PORT = import.meta.env.VITE_API_PORT;

const initialValues = { name: "", score: "" };

export function CountupForm({ setNewEntry }) {
  const [values, setValues] = useState(initialValues);

  const addEntry = (newEntry) => {
    const { name, score } = newEntry;

    axios
      .post(`${URL}${PORT}/entries`, { name, score: parseInt(score) })
      .then((response) => {
        console.log(response);
        setNewEntry(response.data);
        setValues(initialValues);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntry(values);
  };

  return (
    <section className="md:m-4">
      <h2 className="font-bold mb-4">Add Entries</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 mb-4">
          <label>
            <input
              className="rounded-sm px-2 py-1 w-40 text-sm bg-slate-400 text-slate-50 placeholder-slate-300"
              type="input"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            <input
              className="rounded-sm px-2 py-1 w-20 text-sm bg-slate-400 text-slate-50 placeholder-slate-300"
              type="number"
              name="score"
              placeholder="Score"
              value={values.score}
              onChange={handleChange}
            ></input>
          </label>
          <button
            type="submit"
            className="text-xs bg-slate-600 rounded-sm py-1 px-2"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
}
