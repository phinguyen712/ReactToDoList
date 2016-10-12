var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var AddToDo = require('AddToDo');

describe('AddTodo',() =>{
  it('Should call onhandleAddToDo if exists',()=>{
    var spy = expect.createSpy();
    var NewToDo = TestUtils.renderIntoDocument(<AddToDo onhandleAddToDo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(NewToDo));

    NewToDo.refs.newToDo.value = 'Cook Dinner';
    //pull element out from DOM
    TestUtils.Simulate.submit(NewToDo.refs.form);

    expect(spy).toHaveBeenCalledWith('Cook Dinner');

  })
})
