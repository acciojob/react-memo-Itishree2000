import React, { useState} from "react";

const App = () => {
  const [todos, setToDo] = useState([]);
  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);
  const [calculationResult, setCalculationResult] = useState("");
  function handleTodo() {
    setToDo([...todos, { id: todos.length + 1, content: "New todo" }]);
  }
  function handleInputValue(event) {
    setInputText(event.target.value);
  }
  function handleCount() {
    setCount((prevCount) => prevCount + 1);
    const result=expensiveCalculation();
    setCalculationResult(result);
  }
  function expensiveCalculation(){
    const result=count*10000000;
    return result;
  }
  
  function handleAddItem() {
    if (inputText.length > 5) {
      setToDo([...todos, { id: todos.length + 1, content: inputText }]);
      setInputText("");
    } else {
      alert("Text should be greater than 5 characters.");
    }
  }

  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <h1>My todos</h1>
      <div>
        <button id="add-todo-btn" onClick={handleTodo}>Add Todo</button>
        <button id="incr-cnt" onClick={handleCount}>Count:{count} +</button>
      </div>
      <div>
        <input id="skill-input"
          type="text"
          placeholder="Enter Skill"
          value={inputText}
          onChange={handleInputValue}
        />
        <button onClick={handleAddItem}>Add Skill</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
