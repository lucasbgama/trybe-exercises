import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Ler documentação', 'Fazer exercícios', 'Estudar conteúdo adicional', 'Agendar 1:1'];

function App() {
  return (
    <div className="App">
      {tasks.map(t => task(t))}
    </div>
  );
}

export default App;
