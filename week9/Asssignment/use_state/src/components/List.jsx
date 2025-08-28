import React from 'react'

const List = () => {

  const todos = [
    {description: "go to gym.", done: false},
    {description: "eat food.", done: false},
    {description: "do leetcode.", done: false}
  ]

  const renderedList = todos.map((task, ind)=>
    <TodoItem key={ind} description={task.description} done={task.done}/>
  )

  return (
    <div>
      {renderedList}
    </div>
  )
}

const TodoItem = ({description, done}) => {
    return (
        <div style={{padding: 10, margin: 5, border: 1, borderRadius: 10, borderColor:'black', backgroundColor: "pink"}}>
            <b>{description}</b>
            {done}
        </div>
    )
}

export default List
