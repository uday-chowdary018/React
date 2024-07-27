import React, {useState} from "react";

// hooks nothing but the function (predefine funtion in react)
//hooks are named export funtion . while import we have desturture
// in react hooks are useding within the component. if we use in function, class, in return block, inline block it give the error
// we can also create custom(userdefine) hooks 
// we can't use hooks in condition statements
//hooks useed in components at top level
function App() {

  useState();
  return (
    //useState() its give error 
    <div className="App">
      <header className="App-header">
       <h1>hello world</h1>
      </header>
    </div>
  );
}

export default App;
