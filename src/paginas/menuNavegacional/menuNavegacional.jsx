import { Outlet, Link } from 'react-router-dom';

const MenuNavegacional = () => {
    return (
        <>
        <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/venta">Venta</Link>
            </li>
            <li>
                <Link to="/sobreNosotros">Sobre Nosotros</Link>
            </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
};

export default MenuNavegacional;