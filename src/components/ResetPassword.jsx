import React from 'react'
import {  useState } from 'react'
import AxiosService from "../common/ApiService";
import { toast } from "react-toastify";


function ResetPassword() {
   
    let [newpassword, setnewpassword] = useState("");
    let [confirmpassword, setconfirmpassword] = useState("");
    

   let SavePassword = async(e)=>{
    e.preventDefault();
    try {
      let res = await AxiosService.post("/user/resetpassword", {
        newpassword,
        confirmpassword
      });
      if (res.status === 200) {
        toast.success(" Password created Successfully");
        sessionStorage.setItem("token", res.data.token);
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
          "Error Occoured!"
      );
    }
  };


  return <>
   <div className="container-fluid ps-md-0">
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-12 col-sm-6 col-lg-4 card py-5 px-4" >
            <h3 className="login-heading mb-4">Reset Password</h3>

            {/* <!-- Sign In Form --> */}
            <form>
              
               <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword1"
                  placeholder="Password"
                  onChange={(e) => setnewpassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">New password</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword2"
                  placeholder="Password"
                  onChange={(e) => setconfirmpassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Confirm password</label>
              </div>



              <div className="d-grid">
                <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" 
                onClick={(e) => SavePassword(e)}>
                 Submit 
                </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default ResetPassword