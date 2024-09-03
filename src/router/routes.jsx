import Home from "../pages/Home/Home";
import MeetUs from "../pages/MeetUs/MeetUs";
import Profiflex from "../pages/Profiflex/Profiflex";
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
    path: "/profiflex-sopolirozas",
    element: <Profiflex />,
    title: "Profiflex sópolírozás",
  },
  {
    id: 2,
    path: "/ismerkedes-a-rendelovel",
    element: <MeetUs />,
    title: "Ismerkedés a rendelővel",
  },
  {
    id: 3,
    path: "/barazdazaras",
    element: <FurrowClosure />,
    title: "Ismerkedés a rendelővel",
  },
  {
    id: 4,
    path: "/szajhigienes-tanacsadas",
    element: <Advice />,
    title: "Szájhigiénes tanácsadás",
  },
  {
    id: 5,
    path: "/fognyaki-erzekenyseg-csokkentes",
    element: <SensitivityReduction />,
    title: "Fognyaki érzékenység csökkentés",
  },
  {
    id: 6,
    path: "/fogcsikorgatas-gatlo",
    element: <GrindingPreventer />,
    title: "Fogcsikorgatás gátló",
  },
  {
    id: 7,
    path: "/fogekszer-ragasztas",
    element: <TeethJewelry />,
    title: "Fogékszer ragasztás",
  },
  {
    id: 8,
    path: "/fogfeherites",
    element: <TeethWhitening />,
    title: "Fogfehérítés",
  },
];
