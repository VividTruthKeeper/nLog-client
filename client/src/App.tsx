// Modules
import { Routes, Route } from 'react-router-dom';

// Styles
import './assets/styles/style.scss';

// Pages
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Post } from './pages/Post';
import { useState } from 'react';

const [postText, setPostText] = useState('');
setPostText(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Urna molestie at elementum eu facilisis sed odio morbi. Eget mi proin sed libero enim. Quis varius quam quisque id diam vel quam. Duis at tellus at urna condimentum mattis pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh.',
);

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/post" element={<Post text={postText} />} />
      </Routes>
    </main>
  );
};

export default App;
