import Cards from "./Cards";
import Client from "./Client";
import Headset from "./Headsets";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Product from "./Product";
import Values from "./Values";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Cards />
      <Headset />
      <Client />
      <Values />
      <Product />
    </>
  );
}

export default App;
