import logo from '../softsell.png';

export default function Hero() {
  return (
    <section className="bg-light-blue py-5" id='hero'>
      <div className="container">
        <div className="row align-items-center p-2 justify-content-evenly mt-4 flex-wrap-reverse">
          <div className="col-md-5 text-center text-md-start mb-4 mb-md-0" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <h1 className="fw-bold text-teal" style={{ fontSize: '3rem' }}>
              Unlock Value in Your Unused Software Licenses
            </h1>
            <p className="text-teal-dark fs-5">
              Turn idle or surplus licenses into instant cash—secure, fair, and hassle-free.
            </p>
            <a href="#contact"><button className="btn btn-outline-info rounded-pill text-teal-dark px-4 py-2 fs-5">
              Get Your Quote
            </button></a>
          </div>
          <div className="col-md-5 text-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <img src={logo} alt="SoftSell Logo" className="img-fluid rounded-circle" />
          </div>
        </div>
      </div>
    </section>
  );
}
