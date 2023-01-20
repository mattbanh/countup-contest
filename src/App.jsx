import { useState } from "react";

import vcdLogo from "./assets/vcd-logo.png";

function App() {
  const [values, setValues] = useState({ val: [] });

  function createInputs() {
    return values.val.map((el, i) => (
      <div className="flex gap-3 mb-4" key={i}>
        <label>
          <input
            className="rounded-sm px-2 py-1 w-40 text-sm bg-slate-400 text-slate-50 placeholder-slate-300"
            type="input"
            placeholder="Name"
            value={el || ""}
            onChange={(event) => handleChangeName(event, i)}
          ></input>
        </label>
        <label>
          <input
            className="rounded-sm px-2 py-1 w-20 text-sm bg-slate-400 text-slate-50 placeholder-slate-300"
            type="input"
            placeholder="Score"
            value={el || ""}
            onChange={(event) => handleChangeScore(event, i)}
          ></input>
        </label>
        <input
          className="text-xs"
          type="button"
          value="remove"
          name={i}
          onClick={(event) => removeClick(event, i)}
        />
      </div>
    ));
  }

  function handleChangeName(event, i) {
    let vals = [...values.val];
    vals[i] = event.target.value;
    setValues({ val: vals });
  }

  function handleChangeScore(event, i) {
    let vals = [...values.val];
    vals[i] = event.target.value;
    setValues({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ""] });
  };

  const removeClick = (event) => {
    let vals = [...values.val];
    let index = Number(event.target.name);
    vals.splice(index, 1);
    setValues({ val: vals });
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + values.val.join(", "));
    event.preventDefault();
  };

  return (
    <section className="m-4">
      <div className="mb-10">
        <img className="w-48 mx-auto" src={vcdLogo}></img>
      </div>
      <h1 className="mb-4">Countup</h1>
      <form onSubmit={handleSubmit}>
        {createInputs()}
        <div className="flex gap-4">
          <button
            type="button"
            className="text-sm bg-slate-600 rounded-sm py-1 px-2"
            onClick={addClick}
          >
            Add
          </button>
          <button
            type="submit"
            className="text-sm bg-slate-600 rounded-sm py-1 px-2"
          >
            Submit
          </button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit}>
        <label>
          <input
            className="rounded-sm px-2 py-1 w-40 text-sm"
            type="input"
            placeholder="Name"
          ></input>
        </label>
        <label>
          <input
            className="rounded-sm px-2 py-1 w-20 text-sm"
            type="input"
            placeholder="Score"
          ></input>
        </label>
        <button
          className="text-sm bg-slate-600 rounded-sm py-1 px-2"
          onClick={addClick}
        >
          Add
        </button>
      </form> */}
    </section>
  );
}

export default App;
