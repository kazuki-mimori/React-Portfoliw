import React from 'react'

export default function IncompleteArea(props) {
  const { todos, completebtn, deletebtn } = props
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => completebtn(index)}>完了</button>
              <button onClick={() => deletebtn(index)}>削除</button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
