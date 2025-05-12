
export default function CustTest() {
  const reviews = [
    {
      name: 'Alice Johnson',
      role: 'IT Manager, TechCorp',
      text: '“SoftSell helped us clear out hundreds of unused Office 365 seats and recoup over $10,000—effortless and reliable!”',
      image: '/woman.png'
    },
    {
      name: 'Bob Smith',
      role: 'Procurement Lead, SoftSolutions',
      text: '“The valuation was spot on and the payout arrived within hours. Highly recommended for any organization looking to unlock software value.”',
      image: '/man.png'
    }
  ];

  return (
    <section
      className="bg-light-green py-5" id='ct'>
      <div className="container">
        <h1
          className="text-center mb-4 text-green-dark fw-bold mb-5"
         data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">
          What Our Customers Say
        </h1>
        <div className="row justify-content-evenly text-center">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="col-12 col-md-5 mb-4"
             data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
              <div className="p-4 bg-white rounded-4 shadow h-100">
                <img src={r.image} className="img-fluid rounded-circle p-2" width={170} />
                <p className="fst-italic text-teal-dark mb-3" style={{ fontSize: '1.1rem' }}>
                  {r.text}
                </p>
                <p className="fw-semibold mb-0" style={{ color: '#33691E' }}>
                  {r.name}
                </p>
                <p className="text-muted">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
