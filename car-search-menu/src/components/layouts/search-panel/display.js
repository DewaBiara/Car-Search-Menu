import React from 'react'

class panel extends React.Component {
    // Constructor 
    constructor(props) {
      super(props);
 
      this.state = {
          cars: [],
          DataisLoaded: false
      };
  }
    componentDidMount() {
      fetch(
  "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  cars: json,
                  DataisLoaded: true
              });
          })
  }
  render() {
    const { cars } = this.state;
    return (
          <div>
            <section className="card border-0 shadow rounded search-cars">
            <div className="card-body">
              <div className="container ">
                <div className="row">
                  <div className="col-md-10 mb-3">
                    <form onSubmit={submitHandler}>
                      <div className="row" style={{ fontSize: "14px" }}>

                        <div className="col-md-3">
                          <label htmlFor="tipe">Tipe Driver</label>
                          <select name="tipe" className="form-select" id="driver">
                            <option selected hidden>Pilih Tipe Driver</option>
                            <option value= "dengan-supir">Dengan Sopir</option>
                            <option value= "tanpa-supir">Tanpa Sopir (Lepas Kunci) </option>
                          </select>
                          
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="tgl">Tanggal</label>
                          <input type="date" name='date' className="form-control" id="date"/>
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="wj">Waktu Jemput / Ambil</label>
                            <select className="form-select" id="time" name='time'>
                                <option hidden>Pilih Waktu</option>
                                <option value="8">08:00 WIB</option>
                                <option value="9">09:00 WIB</option>
                                <option value="10">10:00 WIB</option>
                                <option value="11">11:00 WIB</option>
                                <option value="22">22:00 WIB</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="penumpang">Jumlah Penumpang</label>
                          <input type="number" className="form-control" id="passangers" name='capacity'/>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-2">
                        <div className="span2">
                          <button type="submit" className="btn btn-success btn-block mb-2">Cari Mobil</button>                
                        </div>
                  </div> 
                </div>
              </div>
            </div>
        </section>
        <div className= "container" style={{ marginTop: "150px" }}>
          <div className = "App">
              {
                  cars.map((cars) => ( 
                  <ol key = { cars.id } >
                      <div className="row mb-5" style={{ marginTop:"-70px", marginLeft:"30px" }}>
                        <div className="col-lg-4 mt-3 mb-2">
                          <div className="card" style={{ maxWidth:"500px", maxHeigth:"900px" }}>
                            <picture>
                              <img src={cars.image} className='' alt="" style={{ maxWidth:"350px", maxHeight:"200px" }}/>
                            </picture>
                            <div className="card-body">
                            <p>{cars.manufacture} / {cars.model}</p>
                            <p className='fw-bold fs-4'>Rp. {cars.rentPerDay} / hari</p>
                            <p className='py-3'style={{ width:"300px", height:"100px" }}>{cars.description} / hari</p>
                            <p><i class=""></i> {cars.capacity} Orang</p>
                            <p><i class=""></i> {cars.transmission}</p>
                            <p><i class=""></i> {cars.year} Tahun</p>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-success" type="button" style={{ margin:"-10px 10px 15px 10px" }}>Pilih Mobil</button>
                              </div>
                          </div>
                        </div> 
                    </div>
                      </ol>
                  ))
              }
          </div>
        </div>
      </div>
    );
  }
}

export default panel