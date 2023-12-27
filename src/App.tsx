import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PriceList from "./dashboard/pricelist/Pricelist"
import Terms from "./terms/Terms"
import "./app.scss"
// const Terms: React.FC = () => (
//   <div>
//     <h2>Terms</h2>
//     {/* Your terms content goes here */}
//   </div>
// );

// const PriceList: React.FC = () => (
//   <div>
//     <h2>Price List</h2>
//     {/* Your price list content goes here */}
//   </div>
// );


const App: React.FC = () => (
  <Router>
    <div className="app">

      {/* <Link to="/terms">terms</Link>
      <Link to="/dashboard/pricelist">dashboard/pricelist</Link> */}
      <Routes>
        <Route path="/terms" element={<Terms/>} />
        <Route path="/dashboard/pricelist" element={<PriceList/>} />
      </Routes>
    </div>
  </Router>
);

export default App;
