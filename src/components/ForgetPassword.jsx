import React, { useEffect, useState } from 'react'
import AxiosService from "../common/ApiService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function ForgetPassword() {

    let [email, setEmail] = useState("");
    let [code, setverificationCode] = useState("");

    let navigate = useNavigate();

    let validatePassword = async (e) => {
    e.preventDefault();
    try {
      let res = await AxiosService.post("/user/forgetpassword", {
          email,
          code
      });
      if (res.status === 200) {
        toast.success(" Code Verified Successfully");
        sessionStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
          "Error Occoured! Invalid Password"
      );
    }
  };
  return (
    <> 
     <div className="container-fluid ps-md-0">
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-12 col-sm-6 col-lg-4 card py-5 px-4" >
            <h3 className="login-heading mb-4">Forget Password</h3>
             <p>Please check your email for Verification Code</p>

            {/* <!-- Sign In Form --> */}
            <form>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingInput">Enter your Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setverificationCode(e.target.value)}
                />
                <label htmlFor="floatingPassword">Verification Code</label>
              </div>

              <div className="d-grid">
                <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" 
                onClick={(e) => validatePassword(e)}>
                 Submit 
                </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default ForgetPassword