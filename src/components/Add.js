import classes from './Add.module.css'

function Add(props) {
  return (
    <div className={classes.actions}>
      {props.add.map((val, index) => (
        <div>
          <p key={index} className={classes.text}>
            {val}
            <button className={classes.btn} onClick={() => props.dlt(index)}>
              Delete
            </button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default Add
