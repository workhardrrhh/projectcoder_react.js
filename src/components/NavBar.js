import './NavBar.css';
import CartWidget from'./CartWidget';

const Navbar = () => {
    return (
        <div className="nav">
        <h2>WH RRHH</h2>
        <button>Servicios</button>
        <button>Cursos</button>
        <button>Plantillas</button>
        <button>E-books</button>
        <CartWidget/>
        </div>
)};

export default Navbar;