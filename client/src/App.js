import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Header from "./Components/shared/Header";
import NewSecret from "./Components/NewSecret";
import Footer from "./Components/shared/Footer";
import OTP from "./Components/OTP";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/secret" element={<NewSecret />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-login" element={<OTP />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
