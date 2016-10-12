var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = ('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDoApp = require('ToDoApp');

describe('ToDoApp',() =>{
  it('Should exist',()=>{
    expect(ToDoApp).toExist();
  })
})
