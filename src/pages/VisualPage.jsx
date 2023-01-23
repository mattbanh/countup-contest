import { useState } from "react";

import vcdLogo from "../assets/vcd-logo.png";
import { CountupEntries } from "../components/CountupEntries/CountupEntries";
import { CountupForm } from "../components/CountupForm/CountupForm";
import { EntryVisual } from "../components/EntryVisual/EntryVisual";

export function VisualPage() {
  const [newEntry, setNewEntry] = useState([]);
  const [unavailable, setUnavailable] = useState([]);

  return (
    <section className="m-4">
      <div className="mb-10">
        <img className="w-48 mx-auto" src={vcdLogo}></img>
      </div>
      <section className="mx-auto">
        <div className="md:flex md:flex-row-reverse md:justify-end md:gap-10">
          <div className="md:w-full">
            <EntryVisual unavailable={unavailable} />
          </div>
          <div>
            <CountupForm setNewEntry={setNewEntry} />
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
