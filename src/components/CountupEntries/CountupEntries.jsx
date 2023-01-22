import axios from "axios";
import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_API_BACKEND_URL;
const PORT = import.meta.env.VITE_API_PORT;

export function CountupEntries({ newEntry }) {
  const [entries, setEntries] = useState([]);
  const [del, setDel] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}${PORT}/entries`)
      .then((response) => setEntries(response.data))
      .catch((error) => console.log(error));
  }, [newEntry, del]);

  const deleteEntry = (event) => {
    axios
      .delete(`${URL}${PORT}/entries/${event.target.id}`)
      .then((response) => setDel(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <section className="md:m-4">
      <h2 className="font-bold mb-4">Countup Entries</h2>
      <div className="mb-10">
        {entries.map((entry) => (
          <div key={entry._id}>
            <span className="mr-4">
              {entry.name} - {entry.score}
            </span>
            <button
              id={entry._id}
              className="text-xs px-1 bg-slate-700 rounded-md border-none"
              onClick={deleteEntry}
            >
              ⨉
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
