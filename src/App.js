import LineChart from "./pages/LineChart";
import BarChart from "./pages/BarChart";
import React from "react";
import Dmodel from "./pages/Dmodel";
import Tables from "./pages/Tables"
import Menu from './Menu';
import { Routes, Route } from "react-router-dom";
  
const App=()=>{
return (
  <>
    <Menu />

    <Routes>
      <Route exact path="/" element={<BarChart />} />
      <Route path="/LineChart" element={<LineChart />} />
      <Route path="/Dmodel" element={<Dmodel />} />
      <Route path="/Tables" element={<Tables />} />
    </Routes>
  </>
);

}
export default App;


