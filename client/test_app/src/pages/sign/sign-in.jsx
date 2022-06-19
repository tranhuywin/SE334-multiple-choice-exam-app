import React from "react";
import "./sign-in.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SignApi from "../../api/signApi";

function SignIn() {
    let navigate = useNavigate();

    const [emailAcc, setEmailAcc] = useState("");
    const [passAcc, setPassAcc] = useState("");
    const [showPass, setShowPass] = useState(false);

    const params = {
        email: emailAcc,
        password: passAcc,
    };

    const handleSignIn = async () => {
        
        await SignApi.login(params)
            .then((res) => {
                if(res !== null) {
                    navigate("/user");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return(
        <div className="modal-background">
            <div className="container-modal">
                <div className="content-header">
                    <h1>Đăng nhập</h1>
                </div>
                <div className="content-body">
                    <div className="accounts-container">
                        <i className="fas fa-user"></i>
                        <input placeholder="Email" onChange={e => setEmailAcc(e.target.value)}/>
                    </div>
                    <div className="accounts-container">
                        <i className="fas fa-lock"></i>
                        <input placeholder="Password" type={showPass ? "text" : "password"} onChange={e => setPassAcc(e.target.value)}/>
                        {showPass ? <i className="fas fa-eye i-account-container" onClick={() => setShowPass(!showPass)}></i> : <i className="fas fa-eye-slash i-account-container" onClick={() => setShowPass(!showPass)}></i>}
                    </div>
                </div>
                <div className="forgot-account">
                    <a href="/forgot">Quên mật khẩu</a>
                </div>
                <div className="content-footer">
                    <button onClick={handleSignIn}>Đăng nhập</button>
                    <div className="register-account">
                        <p>Chưa có tài khoản? <a href="/signup">Đăng ký</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;