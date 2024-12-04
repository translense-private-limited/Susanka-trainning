import "./App.css";
import Header from "./components/HeaderComponent/Header";
import CoreConcepts from "./components/CoreComponent/CoreConcepts";
import Examples from "./components/ExamplesComponent/Examples";

function App() {
  return (
    <>
      <div className="App-Container">
        <Header />
        <CoreConcepts />
        <Examples />
      </div>
    </>
  );
}

export default App;
