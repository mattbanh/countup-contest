import axios from "axios";
import { useState } from "react";

const URL = import.meta.env.VITE_API_BACKEND_URL;

const initialValues = { name: "", score: "" };

export function CountupForm({ setNewEntry, unavailable }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(false);

  const addEntry = (newEntry) => {
    const { name, score } = newEntry;

    axios
      .post(`${URL}/entries`, { name, score: parseInt(score) })
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
    setError(false);
  };

  const formValidation = () => {
    console.log(unavailable, values.score);
    if (!values.name || !values.score) {
      return false;
    }
    if (unavailable.includes(parseInt(values.score))) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValidation()) {
      setError(false);
      addEntry(values);
    } else {
      setError(true);
    }
  };

  return (
    <section className="md:mx-4 mb-10">
      <h2 className="font-bold mb-4">Add Entries</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
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
      <span className="text-xs text-vcdred">
        {error && !values.name
          ? "Please add a name"
          : error && !values.score
          ? "Please add a score"
          : error
          ? "The score already exists"
          : ""}
      </span>
    </section>
  );
}
