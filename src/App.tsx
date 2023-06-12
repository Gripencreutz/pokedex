import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Gen1 from './pages/gen1'
import Gen2 from './pages/gen2'
import Gen3 from './pages/gen3'
import Gen4 from './pages/gen4'
import Gen5 from './pages/gen5'
import Gen6 from './pages/gen6'
import Gen7 from './pages/gen7'
import Gen8 from './pages/gen8'
import Gen9 from './pages/gen9'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App: FC = () => {
  return (
    <div className="App">
    <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gen-1" element={<Gen1 />} />
        <Route path="/gen-2" element={<Gen2 />} />
        <Route path="/gen-3" element={<Gen3 />} />
        <Route path="/gen-4" element={<Gen4 />} />
        <Route path="/gen-5" element={<Gen5 />} />
        <Route path="/gen-6" element={<Gen6 />} />
        <Route path="/gen-7" element={<Gen7 />} />
        <Route path="/gen-8" element={<Gen8 />} />
        <Route path="/gen-9" element={<Gen9 />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
