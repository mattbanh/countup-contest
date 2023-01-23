import { useState } from "react";

import vcdLogo from "../assets/vcd-logo.png";
import { CountupEntries } from "../components/CountupEntries/CountupEntries";
import { CountupForm } from "../components/CountupForm/CountupForm";
import { EntryVisual } from "../components/EntryVisual/EntryVisual";

export function AdminPage() {
  const [newEntry, setNewEntry] = useState([]);
  const [unavailable, setUnavailable] = useState([]);

  return (
    <section className="m-4">
      <div className="mb-10">
        <img className="w-48 mx-auto" src={vcdLogo}></img>
      </div>
      <EntryVisual unavailable={unavailable} />
      <CountupEntries newEntry={newEntry} setUnavailable={setUnavailable} />
      <CountupForm setNewEntry={setNewEntry} />
    </section>
  );
}
