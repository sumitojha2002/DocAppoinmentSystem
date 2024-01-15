import React from "react";
export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold ">
              Doctor Appointment System
            </h5>
            <p className="text-start">
              Here you can use rows and colums to organize yout footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              inventore ratione a nam quam repellat, debitis minus quia
              architecto fuga nemo earum, cum nostrum obcaecati itaque unde sit
              quaerat. Ratione.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase md-4 font-weight-bold">Products</h5>
            <br />
            <p>
              <a href="#" className="text-white text-decoration-none">
                TheProviders
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Creativity
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                SourceFiles
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                bootstrap 5 alpha
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-lx-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase md-4 font-weight-bold ">
              Useful links
            </h5>
            <br />
            <p>
              <a href="#" className="text-white text-decoration-none">
                Your Account
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Become an Affilates
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Shipping Rates
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                Help
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
            <h5 className="text-uppercase md-4 font-weight-bold ">Contact</h5>
            <br />
            <p>
              <i className="fa-solid fa-house"></i> Kathmandu,KTM 2331, NEP
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              theProvider12312@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +977 9867237123
            </p>
            <p>
              <i className="fa-solid fa-print"></i> +01 43123454
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
