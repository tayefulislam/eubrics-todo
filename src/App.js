import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Navbar from './Pages/Shared/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;

