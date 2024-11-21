import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import PredictPage from "./Predict";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<PredictPage />} />
      </Routes>
    </Router>
  );
}

export default App;
