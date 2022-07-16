import React from 'react'

export default function CompleteArea(props) {
  const { todos, completeDeletebtn,completeBack } = props 
  return (
    <div className="complete-area">
      <p className="title">完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => completeDeletebtn(index)}>完了</button>
              <button　onClick={() => completeBack(index)}>未完了</button>
          </div>
          )
        })}
      </ul>
    </div>
  )
}
