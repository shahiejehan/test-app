import React from "react";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="text-white m-2">About us</h1>
      <>
        <div className=" container-fluid py-3">
          <div className=" row mb-4">
            <div className="col-md-6 mb-2">
              <div
                className=" card border-0 shadow-sm h-100"
                style={{ backgroundColor: "#122742" }}
              >
                <div className="card-body border">
                  <div
                    className="card-title mb-3"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "2rem",
                      opacity: "1",
                      color: "rgb(232 169 0 )",
                    }}
                  >
                    Our Vision
                  </div>
                  <div className="card-text text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero sed urna consectetur. Fusce auctor,
                    odio at lobortis vehicula.
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda rerum voluptas aliquid ullam laboriosam?
                      Molestias quod error aperiam aut accusamus nemo aliquam ex
                      ipsa nulla.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda rerum voluptas aliquid ullam laboriosam?
                      Molestias quod error aperiam aut accusamus nemo aliquam ex
                      ipsa nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className=" card border-0 shadow-sm h-100"
                style={{ backgroundColor: "#122742" }}
              >
                <div className="card-body border">
                  <div
                    className="card-title mb-3"
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: "2rem",
                      opacity: "1",
                      color: "rgb(232 169 0 )",
                    }}
                  >
                    Our Mission
                  </div>
                  <div className="card-text text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis libero sed urna consectetur. Fusce auctor,
                    odio at lobortis vehicula.
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quas laborum commodi, doloremque sequi consequatur rem
                      cupiditate nostrum earum magnam, quo totam temporibus
                      doloribus labore molestiae.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quas laborum commodi, doloremque sequi consequatur rem
                      cupiditate nostrum earum magnam, quo totam temporibus
                      doloribus labore molestiae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <hr className="text-white my-5" />
            </div>
            <div className="col-md-1"></div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <h1
                  className="text-center f-bold mb-5"
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "3rem",
                    opacity: "1",
                    color: "rgb(232 169 0 )",
                  }}
                >
                  Our Leaders
                </h1>

                <div className=" row mb-4"></div>
              </div>
            </div>
          </div>

          {/*new section  */}
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <hr className="text-white my-5" />
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </>
      );
    </Layout>
  );
};

export default About;
