import React from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import TodoMain from "./Components/Main/TodoMain";
import Footer from "./Components/Layout/Footer";

const App = () => {
  return (
    <div id="App" className="flex flex-col container max-w-md mx-auto md:pt-8">
      <section>
        <div className="flex flex-col bg-gray-200 rounded shadow-lg">
          <Header />
          <TodoMain />
        </div>
        <Footer />
      </section>
    </div>
  );
}
export default App;
