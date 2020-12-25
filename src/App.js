import React from "react";
import Accordion from "./Components/Accordion";
import "./styles.css";

const items = [
  {
    title: "What is react?",
    content: "Front end framework"
  },
  {
    title: "What is you name?",
    content: "my name is shubam"
  },
  {
    title: "What is very important in React?",
    content: "Components"
  }
];

export default function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div> //here left items is a prop passed to the accordion
  );
}
