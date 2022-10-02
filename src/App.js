import "./assets/styles/App.scss";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import Event from "./pages/event";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/event" element={<Event />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
