import React from "react";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <Navbar />
        </div>
        <div className="col-9">
          <h1>hi am in home</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
