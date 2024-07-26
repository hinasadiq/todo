import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>TODO App</h1>
    </header>
    <main>
      <TodoApp />
    </main>
    <footer>
      <p>Footer content here</p>
    </footer>
  </div>
  
  );
}

export default App;
