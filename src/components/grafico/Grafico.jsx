import GraficoBarras from './GraficoBarras';

// eslint-disable-next-line react/prop-types
function Grafico({ gastos }) {
  return (
    <div>
      <h2>Gráfico de Gastos por Categoria</h2>
      {/* Passa os dados de gastos para o componente filho */}
      <GraficoBarras gastos={gastos} />
    </div>
  );
}

export default Grafico;
