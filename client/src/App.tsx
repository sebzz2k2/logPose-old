import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/misc/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import Logo from "./components/Logo";
const App = () => {
  return (
    <>
      <Logo />
      <Routes>
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
