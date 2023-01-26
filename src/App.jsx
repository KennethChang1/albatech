import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState(null);
  console.log(data)
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login setLogin={setLogin} setData={setData}></Login>}></Route>
          <Route path="/profile" element={<Profile login={login} data={data}></Profile>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
