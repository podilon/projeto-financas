import 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'



function NavBar() {
  return (
    <nav>
      <ul className='button'>
        <li>
          <Link to="/cadastro" >Cadastrar Gastos</Link>
        </li>
        <li>
          <Link to="/listar" >Listar Gastos</Link>
        </li>
        <li >
          <Link to="/grafico" >Ver Gráfico</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
