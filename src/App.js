import React from "react";
import Button from "./components/Button";
import MyScene from "./components/MyScene";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="App h-screen w-screen bg-slate-600 flex flex-col items-center justify-center">
        <Button
          onClick={() => console.log("teste")}
          variant="primario"
          status="default"
        >
          projeto base
        </Button>
        <header className="App-header">
          <h1>My 3D Scene</h1>
        </header>
        <main>
          <MyScene />
        </main>
      </div>
    </>
  );
};

export default App;
