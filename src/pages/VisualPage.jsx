import vcdLogo from "../assets/vcd-logo.png";
import { EntryVisual } from "../components/EntryVisual/EntryVisual";

export function VisualPage() {
  return (
    <section className="m-4">
      <div className="mb-10">
        <img className="w-48 mx-auto" src={vcdLogo}></img>
      </div>
      <section className="md:flex md:justify-center">
        <div className="md:flex md:flex-row-reverse md:justify-end md:gap-10">
          <div className="md:w-full">
            <EntryVisual />
          </div>
        </div>
      </section>
    </section>
  );
}
