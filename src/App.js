import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/configureStore";
import "./App.css";
import Main from "./components/pages/Main/Main.jsx";
import Reg from "./components/pages/Main/Login/Reg";
import Login from "./components/pages/Main/Login/Login";

import Blog from "./components/components/Blog/Blog";

import Profile from "./components/components/profile/Profile";
import ScrollToTop from "./components/components/ScrollToTop";
import About from "./components/pages/About.jsx/About";

import Footer from "./components/components/Footer/Footer";

import EditProfile from "./components/components/profile/EditProfile";
import WeatherApp from "./components/components/profile/Weather/WeatherApp";
import TapePage from "./components/Tape/TapePage";
import MainTapeBlog from "./components/Tape/MainTapeBlog";
<<<<<<< HEAD
import ClosedProfile from "./components/components/profile/ClosedProfile";
=======
import UserProfile from "./components/components/UserProfile/UserProfile";
>>>>>>> 6fa416882168692731f2b8ef81ece6e3ed3fe8cd


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

            <Route path="/blog" element={<Blog />} />

            <Route path="/about" element={<About />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/edit/profile/:id" element={<EditProfile />} />
            <Route path="/weather" element={<WeatherApp/>} />
            
            <Route path='/closed/profile/:id' element={<ClosedProfile />}/>
            <Route path='/footer' element={<Footer />} />


            <Route path="/post" element={<MainTapeBlog />} />
            <Route path="/post/:id" element={<TapePage />} />
            <Route path="/user/:id" element={<UserProfile />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
