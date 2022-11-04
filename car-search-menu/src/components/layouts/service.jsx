import React from 'react'

class service extends React.Component {
  render() {
    return (
      <div>
        <section id="our-services">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6" style={{ paddingLeft: "130px" }}>
                      <img src="../../../assets/img/img_service.png" className="img-service" alt="img-service"/>
                  </div>
                  <div className="col-lg-6" style={{ paddingLeft: "50px" }}>
                      <h2 className="text-h2-service">Best Car Rental for any kind of trip in Ubud!</h2>
                      <p className="text-p-service">Sewa mobil di Ubud bersama Binar Car Rental jaminan 
                          harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta 
                          kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, 
                          meeting, dll.
                      </p>
                      <ul className="list-style-0">
                          <li className="list-style-1">
                              <img src="../../../assets/img/Group_53.png" alt="Group_53"/>
                          </li>
                          <li className="list-style-1">
                              <p className="text-p-service2">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                          </li >
                          <li className="list-style-1">
                              <img src="../../../assets/img/Group_53.png" alt="Group_53"/>
                          </li>
                          <li className="list-style-1">
                              <p className="text-p-service2">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                          </li >
                          <li className="list-style-1">
                              <img src="../../../assets/img/Group_53.png" alt="Group_53"/>
                          </li>
                          <li className="list-style-1">
                              <p className="text-p-service2">Sewa Mobil Jangka Panjang Bulanan</p>
                          </li >
                          <li className="list-style-1">
                              <img src="../../../assets/img/Group_53.png" alt="Group_53"/>
                          </li>
                          <li className="list-style-1">
                              <p className="text-p-service2">Gratis Antar - Jemput Mobil di Bandara</p>
                          </li >
                          <li className="list-style-1">
                              <img src="../../../assets/img/Group_53.png" alt="Group_53"/>
                          </li>
                          <li className="list-style-1">
                              <p className="text-p-service2">Layanan Airport Transfer / Drop In Out</p>
                          </li >
                      </ul>
                  </div>
              </div>
          </div>
      </section>
      </div>
    )
  }
}

export default service