import FormularioCadastro from './FormularioCadastro';
import './Cadastro.css';


function Cadastro({ setGastos }) {
  return (
    <section id="formSection">
      <h2>Cadastro de Gastos</h2>
      <FormularioCadastro setGastos={setGastos} />
    </section>
  );
}

export default Cadastro;
