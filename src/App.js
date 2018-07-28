
import React, {Component} from 'react' ;
import {TodoList} from './todoList' ;
import {TodoForm} from './todoForm';
import {Header} from './inc/header';

{/*
for the dynamic parts,
to pass data to that parts of the components
PROPS are to react components WHAT PARAMETERS ARE TO FUNCTION
DEĞİŞMEYEN DATALAR İÇİN
*/}

{/*
If sth is defined IN THE RENDER FUNCTION of a Class,
it can’t be accessed from ANOTHER COMPONENT
so that sth need to be stored as a GLOBAL VARIABLE
STATE
states have a default value when defined
/define the initial state of that sth.
this.state = {…}: This is where we define our initial state
DEĞİŞKEN DATALAR İÇİN
*/}

const myTasks = [ ];

class App extends Component {
constructor (){
  super();
  this.state = {myTasks: [  ]};
  this.addTask = this.addTask.bind(this);
  this.doneTask = this.doneTask.bind(this);
  this.removeTask = this.removeTask.bind(this);
}

  addTask(val) {
    let updatedList = this.state.myTasks;
    updatedList.push({text:val, status:"passive"});
    this.setState({myTasks: updatedList});
  }

  doneTask(task_id) {
    task_id = task_id.replace('task_', '');
    let updatedList = this.state.myTasks;
    let newStatus = 'active';
    let currentStatus = updatedList[task_id].status;
    if (currentStatus==='active') {
      newStatus= 'passive';
    }
    updatedList[task_id].status = newStatus;
    this.setState({myTasks: updatedList});
  }

  removeTask (task_id) {
    task_id = task_id.replace('task_', '');
    let updatedList = this.state.myTasks;
    updatedList.splice(task_id, 1);
    this.setState({myTasks: updatedList});
  }


  render () {
    return (
      <div className="content"> {/*css için*/}
        <Header />
        <TodoForm addTasks={this.addTask} />
        <TodoList myTasks={this.state.myTasks} doneTask={this.doneTask}  removeTask={this.removeTask} />  {/*props'un key'i = props'un value'su*/}
      </div>
    );
  }
}

export default App;
