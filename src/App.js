import React, { useState } from "react";
import Mymodel3d from "./components/MyModel3d";
import MyScene from "./components/MyScene";
import MyScenePhone2 from "./components/Myphone2";

import "./index.css";

const App = () => {
  const [activeScene, setActiveScene] = useState(1);

  const handleSceneChange = (sceneNumber) => {
    setActiveScene(sceneNumber);
  };

  return (
    <div className="App min-h-screen h-fit w-screen bg-slate-400 flex flex-col items-center justify-center">
      <div className="absolute top-5 text-4xl">eh o braia</div>
      <main className="flex flex-col items-center justify-center h-full">
        <div style={{ display: activeScene === 1 ? 'block' : 'none' }}>
          <MyScene />
        </div>
        {/* <div style={{ display: activeScene === 2 ? 'block' : 'none' }}>
          <MyScenePhone />
        </div> */}

        <div style={{ display: activeScene === 2 ? 'block' : 'none' }}>
          <Mymodel3d />
        </div> 


        <div style={{ display: activeScene === 3 ? 'block' : 'none' }}>
          <MyScenePhone2 />
        </div>
      </main>
      
      <footer className="flex justify-center items-center w-full absolute bottom-0 bg-gray-800 py-4">
        <button
          className={`mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeScene === 1 ? 'bg-blue-700' : ''}`}
          onClick={() => handleSceneChange(1)}
        >
         cubo
        </button>
         <button
          className={`mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeScene === 2 ? 'bg-blue-700' : ''}`}
          onClick={() => handleSceneChange(2)}
        >
         lovino
        </button> 
        <button
          className={`mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeScene === 3 ? 'bg-blue-700' : ''}`}
          onClick={() => handleSceneChange(3)}
        >
          celular
        </button>
      </footer>
    </div>
  );
};

export default App;
