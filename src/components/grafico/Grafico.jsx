import GraficoBarras from './GraficoPizza';
import "./GraficoPizza.css"

// eslint-disable-next-line react/prop-types
function Grafico({ gastos }) {
  console.log(gastos)
  return (
    <div id='chartSection'>
      <h2>Gráfico de Gastos por Categoria</h2>
      {/* Passa os dados de gastos para o componente filho */}
      <GraficoBarras gastos={gastos} />
    </div>
  );
}

export default Grafico;
