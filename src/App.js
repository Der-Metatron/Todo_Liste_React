import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  /* Funktion die zurückgegeben wird */
  return (
    <div
      className="App1"
      style={{
        textDecoration: todo.isCompleted ? "line-through" : "",
        textDecorationColor: todo.isCompleted
          ? "red"
          : "" /* Durchgestrichener Farbiger Balken */,
      }}
    >
      <h2>Ich muss noch :</h2>
      {todo.text}
      <div>
        <br></br>
        <button onClick={() => completeTodo(index)}>Abgeschlossen</button>{" "}
        {/* Button mit funktion */}
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Muss noch lernen",
      isCompleted: false,
    },
    {
      text: "Muss noch Sport machen",
      isCompleted: false,
    },
    {
      text: "Baue eine Website",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Meine Todo Liste</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <>
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
            <br></br>
          </>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
