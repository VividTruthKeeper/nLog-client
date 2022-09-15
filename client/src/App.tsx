// Modules
import { Routes, Route } from "react-router-dom";

// Styles
import "./assets/styles/style.scss";

// Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Post } from "./pages/Post";
import SideBar from "./components/global/SideBar";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </main>
  );
};

export default App;
