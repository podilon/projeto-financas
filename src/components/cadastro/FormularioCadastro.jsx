import { useState } from 'react';


function FormularioCadastro({ setGastos }) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoGasto = { nome, valor, data, categoria };

    // Atualiza o estado no componente pai (App)
    setGastos((prevGastos) => [...prevGastos, novoGasto]);

    // Limpa o formulário após o envio
    setNome('');
    setValor('');
    setData('');
    setCategoria('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Descrição</label>
      <input
        type="text"
        placeholder="Descrição da Despesa"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        name='nome'
      />
      <label htmlFor="valor">Valor</label>
      <input
        type="number"
        placeholder="Valor R$"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        name="valor"
      />

      <label htmlFor="data">Data do pagamento</label>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        name="data"
      />

      <label htmlFor="categoria">Categoria</label>
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        name="categoria"
      >
        <option value="">Selecione uma categoria</option>
        <option value="despesas_pessoais">Despesas Pessoais</option>
        <option value="despesas_residenciais">Despesas Residenciais</option>
        <option value="cursos">Cursos</option>
        <option value="alimentacao">Alimentação</option>
      </select>
      <div id="submitBtn">
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}

export default FormularioCadastro;
