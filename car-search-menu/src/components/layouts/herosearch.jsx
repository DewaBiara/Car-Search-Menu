import React from 'react'

class herosearch extends React.Component {
  render() {
    return (
      <div>
        <section className="home">
            <div className="container" style={{ marginLeft: "0px", marginRight: "0px", paddingLeft: "0px", paddingRight: "0px" }}>
                <div className="row">
                    <div className="col-lg-6 col-style-sewa">
                        <h1 className="text-h1-sewa">Sewa & Rental Mobil Terbaik di kawasan Ubud</h1>
                        <p className="text-p-sewa">Selamat datang di Binar Car Rental. Kami menyediakan mobil 
                            kualitas terbaik dengan harga terjangkau. Selalu siap melayani 
                            kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <a href="/cars" role={"button"} className="btn btn-success">Mulai Sewa Mobil</a>
                    </div>

                    <div className="col-lg-6">
                        <img src="../../../assets/img/img_car.png" className="img-car" alt="img-car"/>
                    </div>
                </div>  
            </div>
        </section>
      </div>
    )
  }
}

export default herosearch