import React from "react";

function LoginModal() {
  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title fw-bold" id="loginModalLabel">
              Login
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
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me */}
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />

               
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Login
              </button>

            </form>

            <div className="text-center mt-3">
              <span>Don't have an account? </span>

              <button
                type="button"
                className="btn btn-link p-0"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Signup
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;