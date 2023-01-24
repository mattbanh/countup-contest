import axios from "axios";
import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_API_BACKEND_URL;

export function EntryVisual({ newEntry }) {
  const [unavailable, setUnavailable] = useState([]);

  const createUnavailable = (entryList) => {
    let unArr = [];
    for (let i = 0; i < entryList.length; i++) {
      unArr.push(entryList[i].score);
    }
    return unArr;
  };

  useEffect(() => {
    axios
      .get(`${URL}/entries`)
      .then((response) => {
        let unArr = createUnavailable(response.data);

        setUnavailable(unArr);
      })
      .catch((error) => console.log(error));
  }, [newEntry]);

  let chartArr = [];
  for (let i = 0; i < 5; i++) {
    chartArr.push([]);
    for (let k = 0; k < 20; k++) {
      chartArr[i].push(501 + i * 20 + k);
    }
  }

  return (
    <section className="md:mx-4 mb-10">
      <div className="flex justify-between md:min-w-[400px] mb-4">
        {chartArr.map((column, j) => (
          <div key={j} className="flex flex-col">
            {chartArr[j].map((entry) => (
              <span
                className={
                  unavailable && unavailable.includes(entry)
                    ? "text-vcdred"
                    : "text-green-500"
                }
                key={entry}
              >
                {entry}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-6">
        <span className="text-green-500 text-xs"># = available</span>
        <span className="text-vcdred text-xs"># = unavailable</span>
      </div>
    </section>
  );
}
