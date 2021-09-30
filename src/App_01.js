import Todo_01 from './component/Todo_01.js'
import './App.css';

function App_01() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo_01 text='Learn React'/>
      <Todo_01 text='hello world'/>
      <Todo_01 text='I hate you'/>
    </div>
  );
}

export default App_01;
