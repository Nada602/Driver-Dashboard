import Sidebar from "./comman/sidebar/Sidebar"
import { useState } from 'react'

import { Routes,Route } from "react-router-dom"
import Drivers from "./pages/Drivers/Drivers"
import Roads from "./pages/Roads/Roads"
import ErorrPage from "./pages/ErorrPage/ErorrPage"
import Index from "."
import Home from "./pages/Home/Home"
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="/roads" element={<Roads/>}/>
          <Route path="drivers" element={<Drivers />} />
        </Route>
        <Route path="*" element={<ErorrPage />} />
      </Routes>
    </>
  );
}

export default App
