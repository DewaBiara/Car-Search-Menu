import React from 'react'


class whyus extends React.Component {
  render() {
    return (
      <div>
        <section id="why-us">
          <div className="container whyus">
              <h2 className="text-h2-whyus">Why Us?</h2>
              <p className="text-p-whyus">Mengapa harus pilih Binar Car Rental?</p>
              <div className="container" style={{ width: "1198px", height: "196px", left: "136px", top: "1244px", padding: "0%", marginTop: "40px",marginLeft: "0px",marginRight: "0px" }}>
                  <div className="box-border">
                      <img src="../../../assets/img/icon_complete.png" className="img-whyus" alt="1s"/>
                      <h6 className="text-h6-whyus" style={{ marginBottom: "0px" }}>Mobil Lengkap</h6>
                      <p className="text-p-whyus2" style={{ marginBottom: "0px" }}>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                  </div>
                  <div className="box-border">
                      <img src="../../../assets/img/icon_price.png" className="img-whyus" alt="1s"/>
                      <h6 className="text-h6-whyus" style={{ marginBottom: "0px" }}>Harga Murah</h6>
                      <p className="text-p-whyus2" style={{ marginBottom: "0px" }}>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                  </div>
                  <div className="box-border">
                      <img src="../../../assets/img/icon_24hrs.png" className="img-whyus" alt="1s"/>
                      <h6 className="text-h6-whyus" style={{ marginBottom: "0px" }}>Layanan 24 Jam</h6>
                      <p className="text-p-whyus2" style={{ marginBottom: "0px" }}>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                  </div>
                  <div className="box-border">
                      <img src="../../../assets/img/icon_professional.png" className="img-whyus" alt="1s"/>
                      <h6 className="text-h6-whyus" style={{ marginBottom: "0px" }}>Sopir Profesional</h6>
                      <p className="text-p-whyus2" style={{ marginBottom: "0px" }}>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                  </div>
              </div>
          </div>
      </section>
      </div>
    )
  }
}

export default whyus