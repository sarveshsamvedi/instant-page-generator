import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import CreateCreative from "./components/pages/CreateCreative";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-creative" element={<CreateCreative />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
