import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import BehaviorList from './Pages/BehaviorList/BehaviorList';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/behaviors/:behaviorId' element={<BehaviorList></BehaviorList>}></Route>

      </Routes>

    </div>
  );
}

export default App;

