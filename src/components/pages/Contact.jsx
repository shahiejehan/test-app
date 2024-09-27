import React from "react";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <>
        <h1 className="text-center mt-2 text-white">Let's Get in Touch!</h1>
        <hr />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="container">
                <div className="map my-2" style={{ width: "100%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.951046296!2d76.76356261822156!3d28.644287349748502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1727438475782!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    title="Map of Delhi"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <form
                className="p-5 bg-tarnsparent m-4"
                style={{ border: "1px solid blue", borderRadius: "10px" }}
              >
                <h1 className="text-center mb-5" style={{ color: "white" }}>
                  Contact Us
                </h1>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="user_name" className="form-label">
                          Name*
                        </label>
                        <input
                          type="text"
                          name="user_name"
                          className="form-control"
                          id="user_name"
                          placeholder="Your Name"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="user_phone" className="form-label">
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="user_phone"
                          placeholder="Phone#"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="user_email" className="form-label">
                          Email*
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          className="form-control"
                          id="user_email"
                          placeholder="Your email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="product_name" className="form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="product_name"
                          placeholder="Product"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message*
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Write your message"
                    rows={3}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Contact;
