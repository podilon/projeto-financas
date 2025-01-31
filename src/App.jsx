import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cadastro from './components/cadastro/Cadastro';
import Grafico from './components/grafico/Grafico';
import ListaDeGastos from './components/lista/ListaDeGastos';
import NavBar from './components/navbar/NavBar';

function App() {
  const [gastos, setGastos] = useState([]);

  return (
    <Router>
      <div className="App">
        {/* Exibindo a NavBar */}
        <NavBar />
        <h1>Controle Financeiro</h1>
        
        {/* Rotas */}
        <Routes>
          <Route path="/cadastro" element={<Cadastro setGastos={setGastos} />} />
          <Route path="/listar" element={<ListaDeGastos gastos={gastos} />} />
          <Route path="/grafico" element={<Grafico gastos={gastos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
