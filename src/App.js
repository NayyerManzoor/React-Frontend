import './App.css';
// import Navbar from './Components/Navbar';
// import Form from './Components/Form';
import Login from './Component/Login';
import Signup from './Component/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
        {/* <Login />
        <Signup /> */}
      </div>
    </>
  );
}

export default App;
