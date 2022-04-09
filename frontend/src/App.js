import './App.css';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Users from './components/Users';
import User from './components/User';
function App() {
  return (
      <BrowserRouter>
      <nav className='w-full'>
        <Link to='/'>Uh</Link>
        <Link to={`/user/${Math.round(Math.random()*100)}`}>Ooo user</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:id" element={<User />} >
        </Route>
        <Route path='login/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
