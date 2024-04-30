import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Page from "./components/Page";
import Designer2 from "./assets/designer2.jpg";
import Designer3 from "./assets/designer3.jpg";
import Designer4 from "./assets/designer4.jpg";
import Designer5 from "./assets/designer5.jpg";
import Last from "./components/Last";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Page image={Designer2}/>
      <Page image={Designer3}/>
      <Page image={Designer4}/>
      <Page image={Designer5}/>
      <Last />
      <Footer />
    </div>
  );
}

export default App;
