import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={dadosGrafico}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="valor" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default GraficoBarras;
