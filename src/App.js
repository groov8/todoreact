import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])
  const [id, setId] = useState(1)
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState("")
  const [detail, setDetail] = useState("")
  const [edittitle, setEdittitle] = useState()
  const [editid, setEditid] = useState()

  const addTodo = () => {
    setTodos([...todos, { id: id, title: title, status: 'notStarted' }])
    setId(id + 1)
    setTitle('')
  }
  const deleteTodo = (target) => {
    setTodos(todos.filter((todo) => todo !== target))
  }
  const editTodo = (target) => {
    setEdittitle(target.title)
    setEditid(target.id)
  }

  const saveTodo = (target) => {
    target.title = edittitle
    setEditid(0)
  }

  const Input = () => {
    <input
      type="text"
      className="regist"
      onChange={(e) => {
        setTitle(e.target.value);
      }}
    />
  };

  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>
      <main>
        <input
          type="text"
          className="regist"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className='button' onClick={addTodo}>作成</button>
        <div>
          <ul>
            {todos.map((todo) => (
              <li className='flex' key={todo.id}>
                {todo.id === editid ?
                  <div>
                    <input
                      type="text"
                      className="regist"
                      value={edittitle}
                      onChange={(e) => {
                        setEdittitle(e.target.value)
                      }}
                    />
                    <button onClick={() => deleteTodo(todo)}>削除</button>
                    <button onClick={() => saveTodo(todo)}> 保存</button>
                  </div>
                  :
                  <div className='flex'>
                    <p className='title'>{todo.title}</p>
                    <button onClick={() => deleteTodo(todo)}>削除</button>
                    <button onClick={() => editTodo(todo)}> 編集</button>
                  </div>
                }
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App;
