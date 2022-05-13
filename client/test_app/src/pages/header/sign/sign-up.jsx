import React, {useState} from "react";
import "./sign-up.css";
import Select from 'react-select';

function SignUp({closeSignUpModal}) {
    const accountType = [
        {
            value: 0,
            label: "Học sinh"
        },
        {
            value: 1,
            label: "Giáo viên"
        }
    ]
    const [showPass, setShowPass] = useState(false);
    return(
        <div className="signup-background">
            <div className="signup-container">
                <div className="signup-close-button">
                    <button onClick={() => closeSignUpModal(false)}> X </button>
                </div>
                <div className="signup-header">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-body">
                    <div className="signup-accounts-container">
                        <input placeholder="Email"/>
                    </div>
                    <div className="signup-accounts-container">
                        <input placeholder="Tên đăng nhập"/>
                    </div>
                    <div className="signup-accounts-container account-type">
                        <label>Bạn là: </label>
                        <div className="type">
                            <input type="radio" name="account-type"/> Học sinh
                            <input type="radio" name="account-type"/> Giáo viên
                        </div>
                    </div>
                    <div className="signup-accounts-container">
                        <input placeholder="Mật khẩu" type={showPass ? "text" : "password"}/>
                        {showPass ? <i className="fas fa-eye signup-i-account-container" onClick={() => setShowPass(!showPass)}></i> : <i className="fas fa-eye-slash signup-i-account-container" onClick={() => setShowPass(!showPass)}></i>}
                    </div>
                </div>
                <div className="signup-account">
                    <a href="#">Forgot password?</a>
                </div>
                <div className="signup-footer">
                    <button>Login</button>
                    <div className="signup-account">
                        <p>Don't have account? <a href="#">Sign up here</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;