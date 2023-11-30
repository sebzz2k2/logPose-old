import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/misc/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import Home from "./pages/home";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
