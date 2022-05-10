import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/configureStore";
import "./App.css";
import Main from "./components/pages/Main/Main.jsx";
import Reg from "./components/pages/Main/Login/Reg";
import Login from "./components/pages/Main/Login/Login";
import Profile from "./components/components/profile/Profile";
import ScrollToTop from "./components/components/ScrollToTop";
import About from "./components/pages/About.jsx/About";
import EditProfile from "./components/components/profile/EditProfile";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/reg" element={<Reg />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/edit/profile/:id" element={<EditProfile />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;




