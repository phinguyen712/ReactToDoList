var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch  = require('ToDoSearch');
var uuid  = require('node-uuid');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted:false,
      searchText:'',
      todos:[
        {
          id:1,
          text:'Clean your car'
        },{
          id:2,
          text:'Cook Dinner'
        }
      ]
    }
  },
  handleAddToDo: function(newToDo){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id:uuid,
          text:newToDo
        }
      ]
    })
  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText
    });
  },
  render: function(){
    var{todos}=this.state

    return(
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={todos}/>
        <AddToDo onhandleAddToDo={this.handleAddToDo}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
