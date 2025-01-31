import FormularioCadastro from './FormularioCadastro';
import './Cadastro.css';


function Cadastro({ setGastos }) {
  return (
    <div>
      <h2>Cadastro de Gastos</h2>
      <FormularioCadastro setGastos={setGastos} />
    </div>
  );
}

export default Cadastro;
