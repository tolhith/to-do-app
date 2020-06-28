import React from "react";
import Navbar from './components/navbar'
import TodoList from './components/todolist'

function App() {
  return (
    <div className="App">
      <main role="main" className="container">
        <Navbar />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
