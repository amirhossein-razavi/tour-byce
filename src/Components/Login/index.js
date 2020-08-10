import React from 'react';
import './style.css';
import signIn from '../../assets/images/signin-image.jpg';
import { useDispatch } from 'react-redux';
import { changeAuthStatus } from '../../Redux/actions/authorization'

function Login() {
    const dispatch = useDispatch()
    return (
        <div className="main">
            <section className="sign-in">
                <div className="container">
                    <div className="signin-content">
                        <div className="signin-form">
                            <h2 className="form-title">ورود</h2>
                            <form method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="your_name" id="your_name" placeholder="نام شما" />
                                </div>
                                <div className="form-group">
                                    <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="رمز ورود" />
                                </div>
                                <div className="form-group">
                                    <label for="remember-me" className="label-agree-term"><span><span></span></span>مرا به خاطر بسپار</label>
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="ورود" />
                                </div>
                            </form>
                        </div>
                        <div className="signin-image">
                            <figure><img src={signIn} alt="sing up image" /></figure>
                            <a href="#" className="signup-image-link" onClick={() => dispatch(changeAuthStatus('register'))}>ایجاد اکانت</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;
