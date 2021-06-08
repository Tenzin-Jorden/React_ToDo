import classes from './Containers.module.css'
import Search from './Search'
import { useState } from 'react'
import Add from './Add'

function Container() {
  const [state, setstate] = useState({
    item: [],
  })

  function stateHandle(values) {
    let valuess = state.item.concat(values)
    setstate({
      item: valuess,
    })
  }
  function dlt(index1) {
    const val = state.item.filter((item, index) => index1 !== index)
    setstate({
      item: val,
    })
  }
  return (
    <div className={classes.container}>
      <h3 className={classes.head}>What's the Plan for Today</h3>
      <Search search={stateHandle} />
      <Add add={state.item} dlt={dlt} />
    </div>
  )
}

export default Container
