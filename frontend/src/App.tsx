import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Button from "./components/button";
import MainRoute from "./route";
import LayoutWrapper from "./layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayoutWrapper content={<MainRoute />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
