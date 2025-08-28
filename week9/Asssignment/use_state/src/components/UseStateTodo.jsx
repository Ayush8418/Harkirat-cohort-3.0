import { useState } from 'react'

function UseStateTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([{ task: "ddd", done: false }]);

  function handleTodoAdd() {
    const newTask = { task: task.trim(), done: false };
    const todo = todos.find(i => i.task === newTask.task);
    if (task.trim() && !todo) {
      setTodos((prev) => [...prev, newTask]);
      setTask("");
    }
  }

  function handleTodoMark(task) {
    setTodos((prev) =>
      prev.map(item =>
        item.task === task ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <>
      <div>
        <input 
          type="text" 
          onChange={(e) => setTask(e.target.value)} 
          value={task}
        />
        <button onClick={handleTodoAdd}>Add Todo</button>
      </div>

      <div>
        {todos.map((element, index) => (
          <p 
            key={index} 
            className={element.done ? "done" : "notDone"}
            onClick={() => handleTodoMark(element.task)}
          >
            {element.task}
          </p>
        ))}
      </div>
    </>
  )
}

export default UseStateTodo;
