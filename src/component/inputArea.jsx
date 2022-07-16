import React, { useState } from 'react'

export default function InputArea (props) {
  const [inputClose, setInputClose] = useState(false)
  const {todoText, onChange, onClick, disabled} = props
  return (
    <div className="input-area">
      <input disabled={disabled} value={todoText} onChange={onChange} type="text" placeholder="TODOを入力" />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
  )
}
