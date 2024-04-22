import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Index /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
