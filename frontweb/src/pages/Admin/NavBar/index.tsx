import './styles.css';

const NavBar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <a href="link" className="admin-nav-item active">
            <p>Produtos</p>
          </a>
        </li>

        <li>
        <a href="link" className="admin-nav-item">
            <p>Categorias</p>
          </a>
        </li>

        <li>
        <a href="link" className="admin-nav-item">
            <p>Usuários</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
