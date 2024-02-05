import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const dummyArray = ['whoop de do', "I've had several quality bowel movements", "Dude where's my cat's cat's cat's car?"]

const URL = `http://localhost:9000/api/todos`

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: dummyArray,
      inputField: '',
      checkedOffToDos: [],
    }
  }

  componentDidMount() {
    fetch(URL)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data.data)
        data.data.forEach((entry, index) => {

          this.setState({ toDoItems: data[index].name })
        })
      })
      .catch((err) => {
        console.log(err + "NOPE IT DIDNT WORK")
      })
  }

  componentDidUpdate(prevProps, prevState) {
  }

  checkToDo = (event) => {
    if (!this.state.checkedOffToDos.includes(event.target.innerText)) {
      this.setState({
        ...this.state,
        checkedOffToDos: [...this.state.checkedOffToDos, event.target.innerText],
      })
    } else {
      this.setState({
        ...this.state,
        checkedOffToDos: this.state.checkedOffToDos.filter(toDo => {
          toDo !== event.target.innerText;
        }),
      })
    }
  }

  changeInputField = (newValue) => {
    newValue.preventDefault();
    this.setState({ inputField: newValue.target.value })
  }

  onSubmit = (e) => {
    console.log("Submitted!")
    e.preventDefault();
    this.setState({
      toDoItems: [...this.state.toDoItems, this.state.inputField],
      inputField: ''
    });
  }

  clearCheckedItems = (event) => {
    console.log("CLEARING CHECKED ITEMS")
    // iterate through dummy array, checking each item
    // if item is in checkedOffTodo array
    // Filter out
    this.setState({
      toDoItems: this.state.toDoItems.filter((toDoItem) => {
        return !this.state.checkedOffToDos.includes(toDoItem)
      })
    })

  }

  render() {
    return (
      <>
        <TodoList
          toDoItems={this.state.toDoItems}
          checkToDo={this.checkToDo}
          checkedOffToDos={this.state.checkedOffToDos}
        />
        <Form
          inputBoxValue={this.state.inputField}
          onChange={this.changeInputField}
          onSubmit={this.onSubmit}
          clearCheckedItems={this.clearCheckedItems}
        />
      </>
    )
  }
}
