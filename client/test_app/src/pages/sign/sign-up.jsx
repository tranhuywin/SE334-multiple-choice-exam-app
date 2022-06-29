import React, {useState} from "react";
import SignApi from "../../api/signApi";
import { useNavigate } from 'react-router-dom';
import "./sign-up.css";

function SignUp() {

    let navigate = useNavigate();

    const [showPass, setShowPass] = useState(false);
    const [emailAcc, setEmailAcc] = useState("");
    const [passAcc, setPassAcc] = useState("");
    const [userName, setUserName] = useState("");
    const [role, setRole] = useState(0);

    const params = {
        email: emailAcc,
        password: passAcc,
        role: parseInt(role)
    };

    const handleSignUn = async () => {

        await SignApi.register(params)
            .then((res) => {
                if(res !== null) {
                    console.log("register successfully");
                    navigate("/");
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    const HandleUserName = () => {
        if(emailAcc.includes("@")) {
            var arr = emailAcc.split("@");
            var username = arr[0];
            setUserName(username);
        } else if(!emailAcc.includes("@") && emailAcc.includes(".")) {
            var arr1 = emailAcc.split(".");
            var username1 = arr1[0];
            setUserName(username1);
        } else if(!emailAcc.includes("@") && !emailAcc.includes(".")) {
            setUserName(emailAcc);
        } else if(emailAcc === "") {
            setUserName("");
        }
    }


    return(
        <div className="signup-background">
            <div className="signup-container">
                <div className="signup-header">
                    <h1>Đăng ký</h1>
                </div>
                <div className="signup-body">
                    <div className="signup-accounts-container">
                        <span className="span-id">*</span><input placeholder="Email" onChange={e => {setEmailAcc(e.target.value); HandleUserName()}}/>
                    </div>
                    <div className="signup-accounts-container">
                        <span className="span-id">*</span><input placeholder="Tên đăng nhập" value={userName}/>
                    </div>
                    <div className="signup-accounts-container">
                        <span className="span-id">*</span>
                        <input placeholder="Mật khẩu" type={showPass ? "text" : "password"} onChange={e => setPassAcc(e.target.value)}/>
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
                            <input type="radio" name="account-type" value={0} onChange={e => setRole(e.target.value)}/>Học sinh
                            <input type="radio" name="account-type" value={1} onChange={e => setRole(e.target.value)}/>Giáo viên
                        </div>
                    </div>
                </div>
                <div className="signup-footer">
                    <button onClick={handleSignUn}>Đăng ký</button>
                    <div className="signup-account">
                        <p>Đã có tài khoản? <a href="/">Đăng nhập</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;