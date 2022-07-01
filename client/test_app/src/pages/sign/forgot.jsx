import React, {useState} from "react";
import SignApi from "../../api/signApi";
import { useNavigate } from 'react-router-dom';
import "./forgot.css";

function Forgot() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const data = {
        email: email,
        password: password
    }

    const HandleRequest = async () => {
        await SignApi.forgot(data)
            .then((res) => {
                if(res !== null) {
                    console.log(res);
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return(
        <div className="forgot-background">
            <div className="forgot-container">
                <div className="forgot-header">
                    <h1>Quên mật khẩu</h1>
                </div>
                <div className="forgot-body">
                    <div className="forgot-accounts-container">
                        <span className="span-id">*</span><input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="forgot-accounts-container">
                        <span className="span-id">*</span><input placeholder="Mật khẩu mới" onChange={e => setPassword(e.target.value)}/>
                    </div>
                </div>
                <div className="forgot-footer">
                    <button onClick={HandleRequest}>Lấy lại mật khẩu</button>
                    <div className="forgot-account">
                        <p>Nhấn vào đây để <a href="/">Đăng nhập</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgot;