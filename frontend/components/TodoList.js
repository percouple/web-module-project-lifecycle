import React from 'react'

export default class TodoList extends React.Component {


  render() {

    const { toDoItems, checkToDo, checkedOffToDos } = this.props;

    return (
      <div>
        <h2>Todos:</h2>
        {toDoItems.map((toDo, index) => (
          <div key={index}>
            <p onClick={checkToDo} >{toDo}</p>
            {checkedOffToDos.includes(toDo) && <div>???</div>}
          </div>
        ))}
      </div>
    )
  }
}
