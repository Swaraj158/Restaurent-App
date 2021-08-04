import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';

export default function Header(){

    return(
        <div className="container">
        <div className="">
            <div className="row justify-content-center titles">
                <div className="col-3">
                  <img src="https://st4.depositphotos.com/13872758/22065/v/450/depositphotos_220657170-stock-illustration-nautical-sea-food-restaurant-logo.jpg" style={{maxHeight:'150px'}}/>
                </div>
                <div className="col-5">
                  <h3 className="display-4">SeaFood Center</h3>
                </div>
            </div>
        </div>
        <header>
          <nav className="row navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/categories">Categories</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/order">Order</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/feedback">FeedBack</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/setPrice">Set Price</a>
                </li>
              </ul>
            </div>
          </nav>
      </header>
      </div>
    )
}