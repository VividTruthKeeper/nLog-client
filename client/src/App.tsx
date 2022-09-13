// Modules
import { Routes, Route } from 'react-router-dom';

// Styles
import './assets/styles/style.scss';

// Pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Post } from './pages/Post';

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </main>
  );
};

export default App;
