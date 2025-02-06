import 'react';
import './ListaDeGastos.css'

function ListaDeGastos({ gastos }) {
    
   

  return (
    <div id="listaSection">
      <h2>Lista de Gastos</h2>
      <table>
        <thead>
          <th>Data</th>
          <th>Descrição</th>
        </thead>
        <tbody>
        {gastos.map((gasto, index) => (
          <>
            <td><strong>{gasto.data}</strong></td> 
            <td>Gasto com {gasto.nome}({gasto.categoria}) com valor de  R${gasto.valor}</td>
          </>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaDeGastos;
