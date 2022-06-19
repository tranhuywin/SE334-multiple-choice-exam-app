import React, {useState} from "react";
import "./sign-up.css";

function SignUp() {
    const [showPass, setShowPass] = useState(false);
    return(
        <div className="signup-background">
            <div className="signup-container">
                <div className="signup-header">
                    <h1>Đăng ký</h1>
                </div>
                <div className="signup-body">
                    <div className="signup-accounts-container">
                        <span className="span-id">*</span><input placeholder="Email"/>
                    </div>
                    <div className="signup-accounts-container">
                        <span className="span-id">*</span><input placeholder="Tên đăng nhập"/>
                    </div>
                    <div className="signup-accounts-container">
                        <span className="span-id">*</span><input placeholder="Mật khẩu" type={showPass ? "text" : "password"}/>
                        {showPass ? 
                            <i className="fas fa-eye signup-i-account-container" onClick={() => setShowPass(!showPass)}></i> 
                            : 
                            <i className="fas fa-eye-slash signup-i-account-container" onClick={() => setShowPass(!showPass)}></i>
                        }
                    </div>
                    <div className="label-accounts-container">
                        <label><span className="span-id">*</span>Bạn là: </label>
                    </div>
                    <div className="account-type">
                        <div className="type">
                            <input type="radio" name="account-type"/>Học sinh
                            <input type="radio" name="account-type"/>Giáo viên
                        </div>
                    </div>
                </div>
                <div className="signup-footer">
                    <button>Đăng ký</button>
                    <div className="signup-account">
                        <p>Đã có tài khoản? <a href="/">Đăng nhập</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;