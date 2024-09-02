import { BrowserRouter } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Router from "./router/Router";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
