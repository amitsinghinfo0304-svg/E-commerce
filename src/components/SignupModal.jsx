import React from "react";

function SignupModal() {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title fw-bold" id="signupModalLabel">
              Create Account
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">

            <form>

              {/* Name */}
              <div className="mb-3">
                

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
               
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                

                <input
                  type="password"
                  className="form-control"
                  placeholder="Create password"
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                

                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Create Account
              </button>

            </form>

            <div className="text-center mt-3">
              <span>Already have an account? </span>

              <button
                type="button"
                className="btn btn-link p-0"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;