import axios from "axios";
import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_API_BACKEND_URL;
const PORT = import.meta.env.VITE_API_PORT;

export function CountupEntries({ newEntry, setUnavailable }) {
  const [entries, setEntries] = useState([]);
  const [del, setDel] = useState([]);

  // create array of unavailable numbers
  const createUnavailable = (entryList) => {
    let unArr = [];
    for (let i = 0; i < entryList.length; i++) {
      unArr.push(entryList[i].score);
    }
    return unArr;
  };

  useEffect(() => {
    axios
      .get(`${URL}${PORT}/entries`)
      .then((response) => {
        setEntries(response.data);
        let unArr = createUnavailable(response.data);
        setUnavailable(unArr);
      })
      .catch((error) => console.log(error));
  }, [newEntry, del]);

  const deleteEntry = (event) => {
    axios
      .delete(`${URL}${PORT}/entries/${event.target.id}`)
      .then((response) => setDel(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <section className="md:mx-4 mb-10">
      <h2 className="font-bold mb-4">Countup Entries</h2>
      <div>
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
