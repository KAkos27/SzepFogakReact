import tartarRemovalImage from "../../assets/page-images/tartar-removal-image.jpg";
import "./TartarRemoval.css";

const TartarRemoval = () => {
  return (
    <div className="tartar-removal">
      <div className="card">
        <h1>Fogkő eltávolítás</h1>
        <p>
          Mindkét fogsoron fogkő-eltávolítás és profiflex só polírozás:
          <strong> 25.000.-</strong>
        </p>
        <h2>10 év alatti gyermekek esetében:</h2>
        <p>
          Mindkét fogsoron fogkő eltávolítás és profiflex só polírozás:
          <strong> 20.000.-</strong>
        </p>
      </div>
      <div className="card">
        <p>
          A fogkő rendszeres eltávolításával megelőzhető a fogágy betegségek
          korai kialakulása
          <strong> melynek előjele a fogmosáskor jelentkező ínyvérzés. </strong>
          A beavatkozást a legmodernebb ultrahangos készülékkel végzem. Az
          innovatív ízesített érzéstelenítő zselének köszönhetően töredékére
          csökkenhető a fájdalom érzet. Az Ön személyére szabott szájhigiénés
          tanácsadás egészíti ki a kezelést. Végül polírozom a fogakat a
          tökéletes eredmény elérése érdekében.
        </p>
      </div>
      <div className="tartar-image-container">
        <img
          className="tartar-removal-image"
          src={tartarRemovalImage}
          alt="fogkő eltávolítás"
        />
      </div>
    </div>
  );
};

export default TartarRemoval;
