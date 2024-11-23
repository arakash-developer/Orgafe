import Image from 'next/image'
import React from 'react'


const page = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navigation-wrap text-primary">
          <div className="container">
            <a className="navbar-brand" href="#">
              {/* <img src="./img/foodimg/logo.png" alt=""/> */}
              {/* <Image src={} /> */}
              Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-lg-0 align-items-center">
                <li className="nav-item">
                  <a className="nav-link active_link" aria-current="page" href="#home"
                  >Home</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#service"
                  >Service</a
                  >
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#offer">Offers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="blog.html">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="product.html">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="contact.html">Contact</a>
                </li>
              </ul>
              <div className="d-flex align-items-center navbar-icon">
                <div className="cart d-flex">
                  <i className="fa-solid fa-user"></i>
                  <i className="ms-2 fa-solid fa-cart-shopping">
                    <a href="#">5</a>
                  </i>
                </div>
                <div className="ms-5 social d-flex align-items-center">
                  <i className="ms-0 mx-2 fa-brands fa-facebook-f"></i>
                  <i className="mx-2 fa-brands fa-twitter"></i>
                  <i className="mx-2 fa-brands fa-linkedin"></i>
                  <i className="mx-2 fa-brands fa-youtube"></i>
                  <i className="me-0 mx-2 fa-brands fa-behance"></i>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default page