import 'react';
import './ListaDeGastos.css'

function ListaDeGastos({ gastos }) {
    
   

  return (
    <div id="listaSection">
      <h2>Lista de Gastos</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
        {gastos.map((gasto, index) => (
          <tr key={index}>
            <td><strong>{gasto.data.split('-').reverse().join("/")}</strong></td> 
            <td>Gasto com {gasto.nome}({gasto.categoria}) com valor de  R${gasto.valor}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaDeGastos;
