import UserOrLogin from './Navbar-User.js'
import Cart from './Navbar-Cart.js'
import '../styles/Header.css'
import {getCategories} from '../DAL/api.js'
import {useState ,useEffect} from 'react'
import Homepage from './Homepage.js'
function Header () {
    let [categories, setCategories] = useState([])
    useEffect(() => 
      async () => {
        categories = await getCategories()
        setCategories([...categories])
      }  
    , [])
    return(
    
    <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand active" href="#">Sulitools</a>
          <div className="container-fluid collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a id="first" className="nav-link" href="">Whishlist</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {categories.map(category => <li key={category.id}><a className="dropdown-item" href="#"
                  onClick={<Homepage></Homepage>}>{category.name}</a></li>)}
                  {/* <li><a className="dropdown-item" href="#">Saws</a></li>
                  <li><a className="dropdown-item" href="#">Cordless and Electric Tools</a></li>
                  <li><a className="dropdown-item" href="#">Hand Tools</a></li>
                  <li><a className="dropdown-item" href="#">Measuring Tools</a></li>
                  <li><a className="dropdown-item" href="#">Gardening Tools</a></li> */}
                </ul>
              </li>
              <form className="d-flex" role="search">
                <input id='searchBar' className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <UserOrLogin></UserOrLogin>
              <Cart></Cart>
            </ul>
          </div>
        </div>
      </nav>
    </header>
   
    )
}

export default Header