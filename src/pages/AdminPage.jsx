import { useState } from "react";

import vcdLogo from "../assets/vcd-logo.png";
import { CountupEntries } from "../components/CountupEntries/CountupEntries";
import { CountupForm } from "../components/CountupForm/CountupForm";
import { EntryVisual } from "../components/EntryVisual/EntryVisual";

export function AdminPage() {
  const [newEntry, setNewEntry] = useState([]);
  const [randomNumber, setRandomNumber] = useState("");
  const [unavailable, setUnavailable] = useState([]);

  const randomize = () => {
    setRandomNumber(Math.round(Math.random() * 100 + 500));
  };

  return (
    <section className="m-4">
      <div className="mb-10">
        <img className="w-48 mx-auto" src={vcdLogo}></img>
      </div>
      <section className="md:flex md:flex-col md:items-center mb-16">
        {randomNumber !== "" && <h2 className="font-bold mb-4">WINNER</h2>}
        <span className="text-7xl font-bold">{randomNumber}</span>
        {randomNumber === "" && <button onClick={randomize}>GAME ON</button>}
      </section>
      <section className="md:flex md:justify-center">
        <div className="md:flex md:flex-row-reverse md:justify-end md:gap-10">
          <div className="md:w-full">
            <EntryVisual newEntry={newEntry} />
          </div>
          <div>
            <CountupForm setNewEntry={setNewEntry} unavailable={unavailable} />
            <CountupEntries
              newEntry={newEntry}
              setUnavailable={setUnavailable}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
