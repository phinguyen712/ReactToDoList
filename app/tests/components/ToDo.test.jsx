var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = ('jquery');
var TestUtils = require('react-addons-test-utils');

var ToDo = require('ToDo');

describe('Todo',() =>{
  it('Should exist',()=>{
    expect(ToDo).toExist();
  })
})
