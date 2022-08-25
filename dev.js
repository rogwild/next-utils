import React from "react";
import * as ReactDOM from "react-dom/client";

const App = () => {
  console.log(`🚀 ~ App ~ 'test'`);

  return <h1>This is my React app!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
console.log(`🚀 ~ ReactDOM`, root);
