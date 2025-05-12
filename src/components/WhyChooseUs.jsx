import { Shield, ThumbsUp, Clock } from 'react-feather';

const reasons = [
  {
    icon: <Shield size={32} />,
    title: 'Secure Transactions',
    desc: 'All payouts encrypted end-to-end for your peace of mind.',
    duration:'1500'
  },
  {
    icon: <ThumbsUp size={32} />,
    title: 'Fair Pricing',
    desc: 'Market-driven valuations ensure you get top dollar.',
    duration:'1800'
  },
  {
    icon: <Clock size={32} />,
    title: 'Fast Processing',
    desc: 'Get paid within 24 hours of accepting our offer.',
    duration:'2000'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-light-green py-5" id='wcu'>
      <div className="container">
        <h1 className="text-center mb-4 text-green-dark fw-bold"data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Why Choose Us</h1>
        <div className="row justify-content-evenly p-3">
          {reasons.map((r, i) => (
            <div key={i} className="col-12 col-md-3 mb-4 text-center shadow rounded-3 p-4 align-intems-center" data-aos="flip-right" data-aos-duration={r.duration} data-aos-easing="ease-in-out">
              <div className="mb-2 text-green">{r.icon}</div>
              <p className="fw-semibold fs-4 m-0 text-green-dark">{r.title}</p>
              <p className="text-green">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
