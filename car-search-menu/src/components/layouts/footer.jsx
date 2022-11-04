import React from 'react'

class footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container"  style={{ marginTop: "100px", marginBottom: "100px",marginLeft: "136px", marginRight: "136px" }}>
              <div className="row">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <p className="text-p-footer">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                      <p className="text-p-footer2">binarcarrental@gmail.com</p>
                      <p className="text-p-footer2">081-233-334-808</p>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <ul>
                          <li className="list-style-footer">Our services</li>
                          <li className="list-style-footer">Why Us</li>
                          <li className="list-style-footer">Testimonial</li>
                          <li className="list-style-footer">FAQ</li>
                      </ul>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <p className="text-p-footer3">Connect with us</p>
                      <img src="../../../assets/img/icon_facebook.png" className="img-footer" alt="icon-facebook"/>
                      <img src="../../../assets/img/icon_instagram.png" className="img-footer" alt="icon-instagram"/>
                      <img src="../../../assets/img/icon_twitter.png" className="img-footer" alt="icon-twitter"/>
                      <img src="../../../assets/img/icon_mail.png" className="img-footer" alt="icon-mail"/>
                      <img src="../../../assets/img/icon_twitch.png" className="img-footer" alt="icon-twitch"/>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <p className="text-p-footer3">Copyright Binar 2022</p>
                      <div className="copyright"></div>
                  </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default footer