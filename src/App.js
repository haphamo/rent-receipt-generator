import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import Receipt from "./components/Receipt.js";
import Home from "./components/Home.js";
import CreateProfile from "./components/CreateProfile.js";
import CreateTenant from "./components/CreateTenant.js";

import data from "./fixture/fixture.js";

function App() {
  const [fixture, setFixture] = useState(data);

  return (
    <section>
      <Link to="/">Home</Link>
      <Link to="landlord">Create a new Landlord</Link>
      <Link to="tenant">Tenant</Link>
      <Link to="receipts">Create Receipt</Link>

      <Router>
        <Home path="/"/>
        <CreateProfile path="landlord" setFixture={setFixture} fixture={fixture}/>
        <CreateTenant path="tenant" setFixture={setFixture} fixture={fixture}/>
        <Receipt path="receipts" setFixture={setFixture} fixture={fixture}/>
      </Router>
    </section>
  );
}

export default App;
