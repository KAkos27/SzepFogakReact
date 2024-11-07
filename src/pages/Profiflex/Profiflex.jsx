import profiflexImage from "../../assets/page-images/profiflex.jpg";
import "./Profiflex.css";

const Profiflex = () => {
  return (
    <div className="profiflex">
      <div className="card--wide">
        <div className="profiflex__image-container">
          <img className="profiflex__image" src={profiflexImage} />
        </div>
        <div className="card__description">
          <h2>Profiflex sópolírozás</h2>
          <ul>
            <li>
              Felső fogsor : <strong>3000.-</strong>
            </li>
            <li>
              Alsó fogsor: <strong>3000.-</strong>
            </li>
            <li>
              A fogkő eltávolítás után közvetlenül profiflex só polírozást kér,
              akkor a kettő együtt <strong>25.000.-</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="card--wide">
        <p>
          <strong>Egy professzionális fogtisztítás.</strong> Magas nyomáson
          finom szemcséjű anyagot fújok egy eszközzel a fogakra, beleértve a
          nehezen elérhető területeket is. Ezzel érem el a lehető legsimább
          felszínt így{" "}
          <strong>megakadályozva a lepedék újbóli lerakodását</strong> és
          késleltetve a fogkő képződését. Hatékonyan távolítja el, a kávé,
          dohányzás, ételfesték stb. okozta elszíneződéseket ez által fehérebbé
          teszi a fogakat.
        </p>
      </div>
    </div>
  );
};

export default Profiflex;
