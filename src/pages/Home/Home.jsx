import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Szeretettel köszöntöm kedves leendő és meglévő pácienseimet!</h1>
      <div className="home__card-container">
        <div className="card">
          <h2>Kedves Pácienseim!</h2>
          <p>
            Lemondásukat kérem legalább
            <strong> 24 órával előtte jelezzék</strong>. Ellenkező esetben, vagy
            nem megjelenés esetén (24 órán belül) a következő kezelés alkalmával{" "}
            <strong>5000ft</strong> rendelkezésre állási díjat számolok fel.
            Megértésüket köszönöm.
          </p>
        </div>
        <div className="card">
          <h2>Időpont foglalás</h2>
          <strong>06 30/355-8913</strong>
          <small>
            A honlapon szereplő információk tájékoztató jellegűek. Bővebben a
            fenti telefonszámon érdeklődhet.
          </small>
        </div>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.790722695714!2d18.91286527667243!3d47.37700290380368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e3e3d7f28f3d%3A0xb197bd841699bad2!2zw4lyZCwgU3phYmFkc8OhZyB0w6lyIDksIDIwMzA!5e0!3m2!1shu!2shu!4v1725387996079!5m2!1shu!2shu"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
