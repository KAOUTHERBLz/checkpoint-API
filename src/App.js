
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Admin from './Pages/Admin';
import Errors from './Pages/Errors';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Users from './Pages/Users';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1>WS API</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/user/:id' element={<Profile/>}/>
        <Route path='/*' element={<Errors/>}/>
      </Routes>
    </div>
  );
}

export default App;
