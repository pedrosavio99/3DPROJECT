import React from "react";
import MyScene from "./components/MyScene";
import MyScenePhone from "./components/Myphone";
import MyScenePhone2 from "./components/Myphone2";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="App min-h-screen h-fit w-screen bg-slate-600 flex flex-col items-center justify-center">
        <main>
          <MyScene />
          <MyScenePhone />
          <MyScenePhone2 />
        </main>
      </div>
    </>
  );
};

export default App;
