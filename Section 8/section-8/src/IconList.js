import React, { Component } from "react";

class IconList extends Component {
  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };

  constructor(props) {
    super(props);
    this.state = { icons: ["bone", "cloud"] };
    this.addIcon = this.addIcon.bind(this);
  }

  // How not to do
  // addIcon() {
  //   let idx = Math.floor(Math.random() * this.props.options.length);
  //   let newIcon = this.props.options[idx];
  //   let icons = this.state.icons;
  //   icons.push(newIcon);
  //   this.setState({ icons: icons });
  // }

  // ! Updating state the safe way
  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    this.setState({ icons: [...this.state.icons, newIcon] });
  }

  render() {
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default IconList;

// OR
// completeTodo(id) {

//   // Array.prototype.map returns a new array
//   const newTodos = this.state.todos.map(todo => {
//     if (todo.id === id) {
//       // make a copy of the todo object with done -> true
//       return { ...todo, done: true };
//     }
//     return todo;  // old todos can pass through
//   });

//   this.setState({
//     todos: newTodos // setState to the new array
//   });
// }