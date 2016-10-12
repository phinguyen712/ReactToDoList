var React = require('react');


var AddToDo = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var newToDo = this.refs.newToDo.value
    if (newToDo.length > 0) {
      this.refs.newToDo.value = '';
      //call and use function from ToDoApp
      this.props.onhandleAddToDo(newToDo);
      console.log("1")
    }console.log('3')
  },

  render: function(){
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} >
          <input type="text" ref="newToDo" placeholder="Enter a new To Do "/>
          <button className="button expanded">Add ToDo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddToDo;
