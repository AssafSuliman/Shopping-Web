import LoggedInDependencies from './LoggedInDependencies.js'
import '../styles/Header.css'
import {getCategories, getCustomer, checkCustomer} from '../DAL/api.js'
import {useState ,useEffect, CSSProperties} from 'react'
import Homepage from './Homepage.js'
import { Outlet, Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "350px auto",
  borderColor: "red",
};

function Header () {
    let [categories, setCategories] = useState([])
    let [customer, setCustomer] = useState()
    let [loading, setLoading] = useState(true);
    
    async function getData () {
      customer = await checkCustomer()
      categories = await getCategories()
        setLoading(false)
      setCustomer(customer)
      setCategories([...categories])
    } 

    useEffect(() => {
      getData()
    }, [])
    //console.log(customer);
    return(
      <header>
      {loading? <ClipLoader color={'grey'} cssOverride={override} size={150} />:
      <>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="navbar-brand active">Sulitools</Link>
          <div className="container-fluid collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <input id='searchBar' className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {categories.map(category => <li key={category.id}><a className="dropdown-item" href="#"
                  >{category.name}</a></li>)}
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <LoggedInDependencies customer={customer}></LoggedInDependencies>
            </ul>
          </div>
        </div>
      </nav>
    
    <Outlet />
    </>
  }
    </header>
    )
}

export default Header