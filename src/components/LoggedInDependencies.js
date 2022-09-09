import { Outlet, Link } from "react-router-dom";
import { logOut } from "../DAL/api";

function LoggedInDependencies ({customer, setCustomer}) {
    return (
        <>
        {!customer?
        <>
        <li className="nav-item">
            <Link to='login' className='nav-link'>Login</Link>
        </li>
        <li className="nav-item">
            <Link to='signup' className='nav-link'>Sign-up</Link>
        </li>
        </>
        :<>
        <li className="nav-item">
            <Link to='user' className="nav-link">User</Link>
        </li>
        <li className="nav-item">
            <Link to='cart' className="nav-link">Cart</Link>
        </li>
        <li className="nav-item">
            <a id="first" className="nav-link" href="">Wishlist</a>
        </li>
        <li className="nav-item">
            <a id="logout" className="nav-link" onClick={logOut}>Logout</a>
        </li>
        </>}
        </>
    )
}

export default LoggedInDependencies