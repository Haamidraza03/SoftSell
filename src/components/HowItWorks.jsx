import { UploadCloud, DollarSign, CheckCircle } from 'react-feather';


export default function HowItWorks() {
  return (
    <section className="bg-white py-5" id="hiw">
      <div className="container">
        <h1 className="text-center mb-4 text-teal-dark fw-bold mb-5" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">How It Works</h1>
        <div className="row justify-content-evenly p-1">
          
          <div className="col-12 col-md-3 mb-4" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <div className="card h-100 border-0 rounded-4 shadow text-center" id="cardss">
              <div className="card-body">
                <div className="mb-3 text-teal">
                  <UploadCloud size={48} />
                </div>
                <h5 className="fw-semibold text-teal">Upload License</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4" data-aos="zoom-in" data-aos-duration="1800" data-aos-easing="ease-in-out">
            <div className="card h-100 border-0 rounded-4 shadow text-center" id="cardss">
              <div className="card-body">
                <div className="mb-3 text-teal">
                  <DollarSign size={48} />
                </div>
                <h5 className="fw-semibold text-teal">Get Valuation</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4" data-aos="zoom-in" data-aos-duration="2000" data-aos-easing="ease-in-out">
            <div className="card h-100 border-0 rounded-4 shadow text-center" id="cardss">
              <div className="card-body">
                <div className="mb-3 text-teal">
                  <CheckCircle size={48} />
                </div>
                <h5 className="fw-semibold text-teal">Receive Payment</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
