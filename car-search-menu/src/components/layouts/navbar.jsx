import React from 'react'


class navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-nav navbar-expand-lg navbar-dark"  style={{ padding: "0px" }}>
                <div className="logo-BCR" >
                <a role={"button"} className="navbar-brand"  href="/"></a>
                </div>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ marginLeft: "auto" }}>
                    <span className="navbar-toggler-icon" ></span>
                </button>
                <div className="collapse navbar-collapse"  id="navbarNav">
                    <ul className="navbar-nav ms-auto"  style={{ marginRight: "136px", marginTop: "24px" }}>
                        <li className="nav-item" >
                            <a className="nav-link nav-menu1"  href="#our-services">Our Services</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link nav-menu2"  href="#why-us">Why Us</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link nav-menu3"  href="#testimonial">Testimonial</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link nav-menu4"  href="#faq">FAQ</a>
                        </li>
                        <li className="nav-item" >
                            <button type="button" className="btn btn-success button-style" >Register</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
}

export default navbar