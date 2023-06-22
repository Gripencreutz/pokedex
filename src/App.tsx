import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/global.scss'
import './styles/page.scss'

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
import pokemonDetails from './pages/pokémon/pokemonDetails'
import Special from './pages/special';

const App: FC = () => {
  return (
    <div className="App">
    <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" Component={pokemonDetails} />
        <Route path="/gen-I" element={<Gen1 />} />
        <Route path="/gen-II" element={<Gen2 />} />
        <Route path="/gen-III" element={<Gen3 />} />
        <Route path="/gen-IV" element={<Gen4 />} />
        <Route path="/gen-V" element={<Gen5 />} />
        <Route path="/gen-VI" element={<Gen6 />} />
        <Route path="/gen-VII" element={<Gen7 />} />
        <Route path="/gen-VIII" element={<Gen8 />} />
        <Route path="/gen-IX" element={<Gen9 />} />
        <Route path="/special" element={<Special />} />
      </Routes>
      
    {/* <Footer /> */}
    </div>
  );
}

export default App;
