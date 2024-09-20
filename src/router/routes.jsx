import Home from "../pages/Home/Home";
import Profiflex from "../pages/Profiflex/Profiflex";
import TartarRemoval from "../pages/TartarRemoval/TartarRemoval";
import MeetUs from "../pages/MeetUs/MeetUs";
import FurrowClosure from "../pages/FurrowClosure/FurrowClosure";
import Advice from "../pages/Advice/Advice";
import GrindingPreventer from "../pages/GrindingPreventer/GrindingPreventer";
import SensitivityReduction from "../pages/SensitivityReduction/SensitivityReduction";
import TeethJewelry from "../pages/TeethJewelry/TeethJewelry";
import TeethWhitening from "../pages/TeethWhitening/TeethWhitening";

export const routes = [
  { id: 0, path: "/", element: <Home />, title: "Főoldal" },
  {
    id: 1,
    path: "fogko-eltavolitas",
    element: <TartarRemoval />,
    title: "Fogkő eltávolítás",
  },
  {
    id: 2,
    path: "/profiflex-sopolirozas",
    element: <Profiflex />,
    title: "Profiflex sópolírozás",
  },
  {
    id: 3,
    path: "/ismerkedes-a-rendelovel",
    element: <MeetUs />,
    title: "Ismerkedés a rendelővel",
  },
  {
    id: 4,
    path: "/barazdazaras",
    element: <FurrowClosure />,
    title: "Barázdazárás",
  },
  {
    id: 5,
    path: "/szajhigienes-tanacsadas",
    element: <Advice />,
    title: "Szájhigiénes tanácsadás",
  },
  {
    id: 6,
    path: "/fognyaki-erzekenyseg-csokkentes",
    element: <SensitivityReduction />,
    title: "Fognyaki érzékenység csökkentés",
  },
  {
    id: 7,
    path: "/fogcsikorgatas-gatlo",
    element: <GrindingPreventer />,
    title: "Fogcsikorgatás gátló",
  },
  {
    id: 8,
    path: "/fogekszer-ragasztas",
    element: <TeethJewelry />,
    title: "Fogékszer ragasztás",
  },
  {
    id: 9,
    path: "/fogfeherites",
    element: <TeethWhitening />,
    title: "Fogfehérítés",
  },
];
