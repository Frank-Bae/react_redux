import React from 'react';
import Footer from './footer';
import AddTodo from '../containers/addTodo';
import VisibleTodoList from '../containers/visibileTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
