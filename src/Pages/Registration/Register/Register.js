import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Header from "../../Shared/Header/Header";

const Register = () => {
  const { userSignUp } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const history = useHistory();
  const handleFormSubmit = (e) => {
    userSignUp(
      nameRef.current.value,
      emailRef.current.value,
      passRef.current.value,
      history
    );
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <section class="py-20 bg-light overflow-hidden">
        <div class="position-relative container">
          <div class="position-relative mw-4xl mx-auto">
            <div class="position-absolute top-50 start-0 end-0 translate-middle-y bg-info-light ms-n6 me-n6"></div>
            <div class="position-relative py-16 pt-md-32 pb-md-20 px-4 px-sm-8 bg-white">
              <div class="mw-lg mx-auto text-center">
                <a class="d-inline-block h6 mb-14" href="/">
                  <img
                    class="img-fluid"
                    src="yofte-assets/logos/yofte-logo.svg"
                    alt=""
                  />
                </a>
                <h2 class="mb-8">Sign up with Arial is super quick</h2>
                <p class="mb-10 fw-bold">Please, do not hesitate</p>
                <form onSubmit={handleFormSubmit} action="">
                  <input
                    ref={nameRef}
                    class="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="Mr. john"
                  />
                  <input
                    ref={emailRef}
                    class="form-control form-control-lg mb-4"
                    type="email"
                    placeholder="john@example.com"
                  />
                  <input
                    ref={passRef}
                    class="form-control form-control-lg mb-4"
                    type="password"
                    placeholder="Password"
                  />
                  <div class="form-check" for="">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">
                      By singning up, you agree to our Terms, Data Policy and
                      Cookies.
                    </label>
                  </div>
                  <br/>
                  <p class="mb-10 fw-bold">
                    Already Registered ?{" "}
                    <button
                      onClick={() => history.push("/login")}
                      className="text-success border-0"
                    >
                      Login here
                    </button>
                  </p>
                  <button type="submit" class="mt-12 mt-md-16 btn btn-dark">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
