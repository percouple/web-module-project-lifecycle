import React from 'react'

export default class Form extends React.Component {
  render() {

   const {onChange, inputBoxValue, onSubmit, clearCheckedItems} = this.props

    return (
      <>
        <form onSubmit={onSubmit}>
          <input placeholder='Enter Todos here' onChange={onChange} value={inputBoxValue}/>
          <button>Submit</button>
        </form>
        <button onClick={clearCheckedItems}>Clear Checked Items</button>
      </>
    )
  }
}
