import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
// import Users from "./components/Users";
import User from "./components/User";
// Redux stuff
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
// import { selectSong } from "./actions";

function App({ songs }) {
  const dispatcher = useDispatch();
  return (
    <BrowserRouter>
      {/* Navbar */}
      <div>
        <nav className="flex w-full min-h-fit bg-darkgreen p-3 justify-between absolute top-0 z-50 flex-wrap">
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
            onClick={() =>
              dispatcher({ type: "SONG_SELECTED", payload: songs })
            }
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

// const mapStateToProps = (state) => {
//   return { song: state.selectedSong, songs: state.songs };
// };

export default App;
