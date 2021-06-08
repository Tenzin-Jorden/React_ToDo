import classes from './Search.module.css'
import { useRef } from 'react'

function Search(props) {
  let value1
  const enteredTodo = useRef()
  function SubmitHandler(e) {
    e.preventDefault()
    value1 = enteredTodo.current.value
    if (value1 === '') {
      alert('Enter your task')
    } else {
      props.search(value1)
    }
  }

  return (
    <div className={classes.search}>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Do Something"
          className={classes.word}
          ref={enteredTodo}
        />
        <button className={classes.button}>Add Todo</button>
      </form>
    </div>
  )
}

export default Search
