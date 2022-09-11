// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "./assets/styles/style.scss";

// Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
