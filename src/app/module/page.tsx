import ModuleCard from "./ModuleCard";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const imb_plex_sans_thai = IBM_Plex_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "400", "600"],
});

export default function Module() {
    return (
      <div className="imb_plex_sans_thai">
        <ModuleCard/>
      </div>
    );
  }