import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import FindDoctor from "./pages/FindDoctor";

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <NavBar />
          <Routes>
            <Route exact path="Login" element={<Login />} />
            <Route index element={<MainPage />} />
            <Route exact path="FindDoctor" element={<FindDoctor />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
