import { useState } from "react";
import reactLogo from "./assets/react.svg";
import vcdLogo from "./assets/vcd-logo.png";

function App() {
  return (
    <section className="m-4">
      <div className="mb-10">
        <img className="w-48 mx-auto" src={vcdLogo}></img>
      </div>
      <h1 className="mb-4">Countup</h1>
      <form>
        <div className="flex">
          <label>
            <input
              className="px-2 py-1"
              type="input"
              placeholder="Name"
            ></input>
          </label>
          <label>
            <input
              className="px-2 py-1"
              type="input"
              placeholder="Score"
            ></input>
          </label>
        </div>
        <label>
          <input
            className="rounded-sm px-2 py-1"
            type="input"
            placeholder="Name"
          ></input>
        </label>
      </form>
    </section>
  );
}

export default App;
