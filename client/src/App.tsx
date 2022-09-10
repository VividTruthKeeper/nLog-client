// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "./assets/styles/style.scss";

// Pages
import Login from "./pages/Login";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
