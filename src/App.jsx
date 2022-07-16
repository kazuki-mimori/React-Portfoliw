import { useState } from 'react';
import './App.css';
import CompleteArea from './component/CompleteArea';
import IncompleteArea from './component/IncompleteArea';
import InputArea from './component/inputArea';
import './styles.css'

export const App = () => {
  const [todoText, setTodoText] = useState()
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState(['あああああ'])
  const onChangeTodoText = (e) => setTodoText(e.target.value)
  
  //入力欄の処理
  const addbtn = () => {
    if (todoText === "" ) return
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos)
    setTodoText('')
  };

  //未完了エリアの削除ボタンが押された場合の処理
  const deletebtn = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  };
  //未完了エリアの完了ボタンが押された場合の処理
  const completebtn = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  ///完了エリアの完了ボタンが押された場合の処理
  const completeDeletebtn = (index) => {
    const deletecomplete = [...completeTodos];
    deletecomplete.splice(index, 1)
    setCompleteTodos(deletecomplete)
  }

  const completeBack = (index) => {
    const completeBack = [...completeTodos]
    completeBack.splice(index, 1)
    const newCompleteback = [...incompleteTodos,completeTodos[index]]
    setCompleteTodos(completeBack)
    setIncompleteTodos(newCompleteback)
  }

  return (
    <>
    <InputArea 
      todoText={todoText} 
      onChange={onChangeTodoText} 
      onClick={addbtn}
      disabled={incompleteTodos.length >= 5}
    />
    {incompleteTodos.length >= 5 && (<p style={{color: 'red'}}>登録できるTODOは５個までです</p>)}
    <IncompleteArea
     todos={incompleteTodos}
     completebtn={completebtn}
     deletebtn={deletebtn}
     />
    <CompleteArea 
      todos={completeTodos}
      completeDeletebtn={completeDeletebtn}
      completeBack={completeBack}
    />
    </>
  );
}

export default App;
