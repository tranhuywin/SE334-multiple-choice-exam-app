import React from "react";
import "./sign-in.css"

function SignIn({closeSignInModal}) {
    return(
        <div className="modal-background">
            <div className="container-modal">
                <div className="close-button">
                    <button onClick={() => closeSignInModal(false)}> X </button>
                </div>
                <div className="content-header">
                    <h1>Sign in</h1>
                </div>
                <div className="content-body">
                    <div className="accounts-container">
                        <i class="fas fa-user"></i>
                        <input placeholder="Email"/>
                    </div>
                    <div className="accounts-container">
                        <i class="fas fa-lock"></i>
                        <input placeholder="Password"/>
                    </div>
                </div>
                <div className="forgot-account">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="content-footer">
                    {/* <button onClick={() => closeSignInModal(false)}>Cancel</button> */}
                    <button>Login</button>
                    <div className="register-account">
                        <p>Don't have account? <a href="#">Sign up here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;