import { useState } from "react";

import vcdLogo from "./assets/vcd-logo.png";
import { CountupEntries } from "./components/CountupEntries/CountupEntries";
import { CountupForm } from "./components/CountupForm/CountupForm";

function App() {
  const [newEntry, setNewEntry] = useState([]);

  return (
    <section className="m-4">
      <div className="mb-10">
        <img className="w-48 mx-auto" src={vcdLogo}></img>
      </div>

      <CountupEntries newEntry={newEntry} />
      <CountupForm setNewEntry={setNewEntry} />
    </section>
  );
}

export default App;
