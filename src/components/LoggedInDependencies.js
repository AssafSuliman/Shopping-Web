import { Outlet, Link } from "react-router-dom";

function LoggedInDependencies ({customer}) {
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
            <a className="nav-link" href="">Cart</a>
        </li>
        <li className="nav-item">
            <a id="first" className="nav-link" href="">Whishlist</a>
        </li>
        </>}
        </>
    )
}

export default LoggedInDependencies