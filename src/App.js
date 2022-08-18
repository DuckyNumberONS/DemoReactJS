import React from "react";
import "./App.css";
import Header from "./Components/Header";
import CaughtUp from "./Components/Main/CaughtUp";
import CheckList from "./Components/Main/CheckList";
import Footer from "./Components/Footer";

function App() {
  return (
    <div id="App" className="flex flex-col container max-w-md mx-auto md:pt-8">
      <section>
        <div className="flex flex-col bg-gray-200 rounded shadow-lg">
          <Header />
          <CaughtUp />
          <CheckList />
        </div>
        <Footer />
      </section>
    </div>
  );
}
export default App;
