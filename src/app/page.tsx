
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


export default function Home() {

  const Router = useRouter()
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary border-bottom border-body" >
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <b><a className="nav-link" href="#"><p className="nav-link">Home</p></a></b>
                <li className="nav-item">
                  <b>
                    <a className="nav-link" href="#"><p className="nav-link" onClick={() => Router.push("/product")}>Product</p>
                    </a>
                  </b>
                </li>
                <li className="nav-item">
                  <b>
                    <a className="nav-link" href="#"><p className="nav-link" onClick={() => Router.push("/rou")}>About</p></a>
                  </b>
                </li>
                <form className="d-flex text-end" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </ul>
            </div>
          </div>
        </nav>
        {/* <Link href="/rou">
          route
        </Link>
        <Link href="/product">
          Go to Product
        </Link> */}
        <div>
          <div id="carouselExample" className="carousel slide ">
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src="https://images.unsplash.com/photo-1647326914535-d14ff13365a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="brige pic" />
              </div>
              <div className="carousel-item ">
                <img src="https://images.unsplash.com/photo-1693491012999-09a3764eab33?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="effiel tower" />
              </div>
              <div className="carousel-item ">
                <img src="https://images.unsplash.com/photo-1717772114043-943fbccf3998?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="train" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
