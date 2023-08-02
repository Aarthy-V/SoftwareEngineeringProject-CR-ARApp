import React from "react";
import '../Styles/LoginStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login(){
    return(
        
    
        <div className="wrapper bg-light d-flex align-items-center justify-content-center w-100">

        
            <div className='login'>
                <h2 className="mb-3">Login Form</h2>
                <form className="need-validation">
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='email' className="form-label">Email Address</label>
                        <input type="email" className="form-control" required></input>
                        <div className="invalid-feedback">
                            Please enter your email
                        </div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='password' className="form-label">Password</label>
                        <input type="password" className="form-control" required></input>
                        <div className="invalid-feedback">
                            Please enter your password
                        </div>
                    </div>
                    <div className='form-group form-check mb-2'>
                        <input type="checkbox" className="form-check-input"></input>
                        <label htmlFor='check' className="form-check-label">Remember me</label>
                    </div>
                    <button type='submit' className='btn btn-success w-100 mt-2'>LOGIN IN</button>
                </form>
            </div>
        </div>
    )
}
export default Login;