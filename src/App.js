import { Route, Routes } from "react-router-dom"
import Navbar from "./directives/Navbar";
import VillaList from './Component/VillaList';
import SingleVilla from "./Component/SingleVilla";
import Home from "./Component/Home";

export default function App() {
  return <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/VillaList" element={<VillaList/>}/>
        <Route path="/VillaList/:id" element={<SingleVilla/>}/>
      </Routes>
      
  </>
}