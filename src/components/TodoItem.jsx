import React from 'react'
import styles from "./TodoItem.module.css"
const TodoItem = ({indItems}) => {

    const [isCompleted, setIsCompleted]=React.useState(indItems.isCompleted)

  return (
    <label htmlFor={indItems.id} className={styles.indi}>{`${indItems.value}`}
    <input id={indItems.id} className={styles.radio_input} type="radio" onChange={(e) => {
        setIsCompleted(e.target.checked)
        console.log(isCompleted)
    }} />

    <div className={styles.radio_radio}></div>
    
    </label>
  )
}

export default TodoItem