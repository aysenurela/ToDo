import React from 'react';
export class TodoForm extends React.Component {

  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
      const inp = document.getElementById('todoInput');
      const val = inp.value;
      inp.value = '';
      this.props.addTasks(val);
  }

  render () {
    return (
      <div className="todo type1">

        <div>
        <form className="input-wrapper" onSubmit={this.addTask}>
          <input id="todoInput" type="text" className="add-todo" autoComplete="off" placeholder="Write next task" />
        </form>
        </div>

        <button type="button" onClick={this.addTask} className="add-btn"> + </button>

      </div>
    )
  }
}
