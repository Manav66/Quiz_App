import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Header from "./Header";
import Keyboard from "./Keyboard";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Error from "./Error";
import Combine from "./Combine";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Combine />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Keyboard /> */}
    </div>
  );
}

export default App;
