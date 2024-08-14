import logo from './logo.svg';
import './App.css';
import AddTodo from './components/Addtodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App bg-black">
        <AddTodo/>
        <Todos/>
    </div>
  );
}

export default App;
