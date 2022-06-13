import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import BehaviorList from './Pages/BehaviorList/BehaviorList';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Update from './Pages/Update/Update';
function App() {

  const [user, loading, error] = useAuthState(auth);
  return (
    <div>

      {
        user && <Navbar></Navbar>
      }



      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/behaviors/:behaviorId' element={<RequireAuth><BehaviorList></BehaviorList></RequireAuth>}></Route>
        <Route path='/update/:taskId' element={<RequireAuth><Update></Update></RequireAuth>}></Route>

      </Routes>

    </div>
  );
}

export default App;

