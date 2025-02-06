import {  PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './GraficoPizza.css'


function GraficoBarras({ gastos }) {
  // Agrupando os dados por categoria
  const dadosAgrupados = gastos.reduce((acc, gasto) => {
    const { categoria, valor } = gasto;
    acc[categoria] = acc[categoria] || 0;
    acc[categoria] += parseFloat(valor);
    return acc;
  }, {});

  // Transformando os dados agrupados em um formato adequado para o gráfico
  const dadosGrafico = Object.keys(dadosAgrupados).map((categoria) => ({
    categoria,
    valor: dadosAgrupados[categoria],
  }));

  const cores = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#097821'];  

  return (
    <ResponsiveContainer width="30%" height={400} id="chartContainer">
      <PieChart width={500} height={500}>
        <Pie
          data={dadosGrafico}
          dataKey="valor"
          nameKey="categoria"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#097821"
          label
        >
          {dadosGrafico.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
          ))}
        </Pie>
        <Tooltip />
    </PieChart>
      {/* <BarChart data={dadosGrafico}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="valor" fill="#8884d8" />
      </BarChart> */}
    </ResponsiveContainer>
  );
}

export default GraficoBarras;
