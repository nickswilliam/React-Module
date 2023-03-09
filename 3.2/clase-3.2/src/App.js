import logo from './logo.svg';
import './App.css';
import MiTitulo from './components/mi-titulo'; //se importa el modulo con el nombre correcto, y la ruta de el módulo
import { MiContenedor } from './components/mi-contenedor';

function App() {
  return (
    <div className="App">
      <MiContenedor titulo="Home" texto=""/>
    </div>
  );
}

export default App;
