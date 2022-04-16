import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Users from "./components/Users";
import User from "./components/User";
function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <div>
        <nav className="flex w-full min-h-fit bg-darkgreen p-3 justify-between sticky top-0 z-50">
          <Link to="/">
            <div className="flex items-center justify-between">
              <img
                className="w-10 h-10 bg-slate-200 mr-2 rounded-full"
                src="/assets/Logo.png"
              />
              <h1 className="text-primary text-lg">PlantNow.io</h1>
            </div>
          </Link>
          <Link
            to={"/login"}
            className="bg-yellow px-2 text-sm flex items-center"
          >
            {/* Login ping */}
            {/* <div className="w-2 h-2 self-start relative right-3 bottom-1 rounded-full animate-pulse bg-red-700"></div> */}
            Login/Register
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<User />}></Route>
        <Route path="login/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
