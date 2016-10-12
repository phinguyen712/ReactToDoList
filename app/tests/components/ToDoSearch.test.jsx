var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDoSearch = require('ToDoSearch');

describe('ToDoSearch',() =>{
  it('Should exist',()=>{
    expect(ToDoSearch).toExist();
  });

  it('should call onSearch with entered input text',() =>{
    var spy = expect.createSpy();
    var TodoSearch  = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    TodoSearch.refs.searchText.value = "Dog";
    TestUtils.Simulate.change(TodoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false,'Dog');
  });

  it('should call onSearch with proper checked value',() =>{
    var spy = expect.createSpy();
    var TodoSearch  = TestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>);

    TodoSearch.refs.showCompleted.checked='true';
    TestUtils.Simulate.change(TodoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true,'');
  });
});
