import { useState } from "react";
import "./App.css";
import UseStateTodo from "./components/UseStateTodo";
import ChildrenCard from "./components/Card";
import UseEffectCount from "./components/UseEffectCount";
import List from "./components/List";
import ErrorBoundary from "./components/ErrorBoundaryCode";

function App() {
  return (
    <div>
      {/* ----------------------------useState */}
      {/* <UseStateTodo /> */}

      {/* ----------------------------useEffect */}
      {/* <UseEffectCount/> */}

      {/* ----------------------------props and children  */}
      {/* <ChildrenCard>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </ChildrenCard>
      <ChildrenCard children={
        <>
          <h2>Another Card</h2>
          <p>This card has different content!</p>
        </>
      }/> */}

      {/* ----------------------------rendering List */}
      {/* <List/> */}

      {/* ---------------------------- error boundary demo */}
      <h1>Hello world</h1>
      <div style={{border:"10px solid skyBlue"}}>
        content:
        <ErrorBoundary>
          <BuggyComponent/>
        </ErrorBoundary>
      </div>
      <div>
        Footer @copiright 2025
      </div>
      
    </div>
  );
}

const BuggyComponent = () => {
    throw new Error("I crashed!");
};

export default App;
