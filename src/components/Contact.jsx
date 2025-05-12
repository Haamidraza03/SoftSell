import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', license: 'Windows', message: ''
  });

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Thank you! We will be in touch shortly.');
  };

  return (
    <section id='contact' className="bg-light-gray py-5">
      <div className="container">
        <h1 className="text-center mb-4 text-gray-dark fw-bold" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">Contact Us</h1>
        <div className="row justify-content-evenly align-items-center">
          <div className="col-md-5" data-aos="slide-right" data-aos-duration="1500" data-aos-easing="ease-in-out">
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-6 mb-2 mb-md-0">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6 mb-2 mb-md-0">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="form-control"
                    value={form.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <select
                    name="license"
                    className="form-select"
                    value={form.license}
                    onChange={handleChange}
                  >
                    <option>Windows</option>
                    <option>Office 365</option>
                    <option>Adobe CC</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  className="form-control"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button className="btn btn-dark px-4 py-2" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-5" data-aos="zoom-in" data-aos-duration="1700" data-aos-easing="ease-in-out">
            <div className="ratio ratio-4x3 mt-5 rounded-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15311293.59004511!2d66.85554718111679!3d20.460724581262774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce57e53509b0f%3A0x36f058a48d1e04b1!2sCredex%20Technology!5e0!3m2!1sen!2sin!4v1747077588624!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Credex Technology Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
