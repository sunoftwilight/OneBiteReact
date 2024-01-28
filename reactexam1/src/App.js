import React from "react"
// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  };

  return (
    <Container>
      <div>
        <MyHeader/>
        <Counter {...counterProps} />
      </div>
      <h2> hi</h2>
    </Container>
  );
}

export default App;
