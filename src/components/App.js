import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);
  const [calculationResult, setCalculationResult] = useState("");

  function handleTodo() {
    const newTodo = { id: todos.length, content: "New todo" };
    setTodos([...todos, newTodo]);
  }

  function handleInputValue(event) {
    setInputText(event.target.value);
  }

  function handleCount() {
    setCount((prevCount) => prevCount + 1);
    const result = expensiveCalculation();
    setCalculationResult(result);
  }

  function expensiveCalculation() {
    const result = count * 10000000;
    return result;
  }

  function handleAddSkill() {
    if (inputText.length > 0) {
      setTodos([...todos, { id: todos.length, content: inputText }]);
      setInputText("");
    } else {
      alert("Please enter a skill.");
    }
  }

  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <h1>My todos</h1>
      <div>
        <button id="add-todo-btn" onClick={handleTodo}>Add Todo</button>
        <button id="incr-cnt" onClick={handleCount}>Count: {count} +</button>
        <span id="calc">Expensive Calculation: {calculationResult}</span>
      </div>
      <div>
        <input
          id="skill-input"
          type="text"
          placeholder="Enter Skill"
          value={inputText}
          onChange={handleInputValue}
        />
        <button id="skill-btn" onClick={handleAddSkill}>Add Skill</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} id={`todo-${index}`}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

