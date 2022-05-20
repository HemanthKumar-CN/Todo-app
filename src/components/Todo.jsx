import React from 'react'
import TodoItem from './TodoItem';
import styles from "./TodoItem.module.css"

const Todo = () => {
    const [query, setQuery]=React.useState("");
    const [TodoList,setTodoList]=React.useState([]);

    const handleChange= (e)=> {
        setQuery(e.target.value)
        // console.log(e)
    }

    const handleKey=(e) => {
        // console.log(e.key)
        if(e.key=="Enter")
        {
            setTodoList([...TodoList, {id:Date.now(), value: query, isCompleted:false}])
            setQuery("")
        }
    }
  return (
    <div className={styles.whole}>
        <h1>Todo List</h1>


        {TodoList.map(indItems => {
            return ( <TodoItem  key={indItems.id} indItems={indItems}/>

            )
        })}

        <div className={styles.line}>
        <input className={styles.box} type="text" onKeyDown={handleKey} onChange={handleChange} placeholder='Write Something' value={query} />
        
        <button className={styles.button} onClick={() => {
            setTodoList([...TodoList, {id:Date.now(), value: query, isCompleted:false}])
            setQuery("")
        }}>+</button>

        </div>

    </div>
  )
}

export default Todo