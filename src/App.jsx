import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Page404 from "./components/Page404";

const App = () => {
  return (
    <AuthProvider>
      <div className="flex min-h-screen w-full flex-col bg-slate-200 p-10 text-slate-800 dark:bg-slate-900 dark:text-slate-200">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
