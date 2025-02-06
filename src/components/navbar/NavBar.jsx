import 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'



function NavBar() {
  return (
    <nav id="navBar">
      <ul>
        <li>
          <NavLink to="/cadastro" className={({ isActive }) => isActive ? "active" : ""}>Cadastrar Gastos</NavLink>
        </li>
        <li>
          <NavLink to="/listar" className={({ isActive }) => isActive ? "active" : ""}>Listar Gastos</NavLink>
        </li>
        <li >
          <NavLink to="/grafico" className={({ isActive }) => isActive ? "active" : ""}>Ver Gráfico</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
