import React from "react";
import "./sign-in.css"
import { useState } from "react";

function SignIn({closeSignInModal}) {
    const [emailAcc, setEmailAcc] = useState("");
    const [passAcc, setPassAcc] = useState("");
    const [showPass, setShowPass] = useState(false);
    return(
        <div className="modal-background">
            <div className="container-modal">
                <div className="close-button">
                    <button onClick={() => closeSignInModal(false)}> X </button>
                </div>
                <div className="content-header">
                    <h1>Đăng nhập</h1>
                </div>
                <div className="content-body">
                    <div className="accounts-container">
                        <i class="fas fa-user"></i>
                        <input placeholder="Email" onChange={e => setEmailAcc(e.target.value)}/>
                    </div>
                    <div className="accounts-container">
                        <i class="fas fa-lock"></i>
                        <input placeholder="Password" type={showPass ? "text" : "password"} onChange={e => setPassAcc(e.target.value)}/>
                        {showPass ? <i className="fas fa-eye i-account-container" onClick={() => setShowPass(!showPass)}></i> : <i className="fas fa-eye-slash i-account-container" onClick={() => setShowPass(!showPass)}></i>}
                    </div>
                </div>
                <div className="forgot-account">
                    <a href="#">Quên mật khẩu</a>
                </div>
                <div className="content-footer">
                    <button>Đăng nhập</button>
                    <div className="register-account">
                        <p>Chưa có tài khoản? <a href="#">Đăng ký</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;