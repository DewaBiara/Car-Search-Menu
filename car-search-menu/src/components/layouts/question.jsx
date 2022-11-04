import React from 'react'

class question extends React.Component {
    render() {
        return (
            <div>
        <section id="faq">
                <div className="container" style={{ marginTop: "100px", paddingLeft: "0px", paddingRight: "0px"}}>
                <div className="row">
                    <div className="col-lg-5"  style={{ paddingLeft: "60px" }}>
                    <h2 className="text-h2-faq">Frequently Asked Question</h2>
                    <p className="text-p-faq">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="col-lg-7" style={{ paddingRight: "60px" }}>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item" style={{ border: "1px solid #D4D4D4", borderRadius: "4px", marginBottom: "16px"}}>
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                        
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item" style={{ border: "1px solid #D4D4D4", borderRadius: "4px", marginBottom: "16px" }}>
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item" style={{ border: "1px solid #D4D4D4", borderRadius: "4px", marginBottom: "16px" }}>
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item" style={{ border: "1px solid #D4D4D4", borderRadius: "4px", marginBottom: "16px" }}>
                                <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Apakah Ada biaya antar-jemput?
                                </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item" style={{ border: "1px solid #D4D4D4", borderRadius: "4px", marginBottom: "16px" }}>
                                <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Bagaimana jika terjadi kecelakaan
                                </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        )
    }
}

export default question