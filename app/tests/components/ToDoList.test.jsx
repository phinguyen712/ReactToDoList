var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = ('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDoList = require('ToDoList');
var ToDo = require('ToDo');

describe('ToDoList',() =>{
  it('Should exist',()=>{
    expect(ToDoList).toExist();
  });

  it('Should render one ToDo component for every ToDo item',()=>{
    var todos = [{
        id: 1,
        text:'Do something'
      },{
        id:2,
        text:'Do another thing'
      }];
    var todoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,ToDo);

    expect(todosComponents.length).toBe(todos.length);
  });

});
