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
                        <div className="signin-image">
                            <figure><img src={signIn} alt="sing up image" /></figure>
                            <a href="#" className="signup-image-link" onClick={() => dispatch(changeAuthStatus('register'))}>Create an account</a>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign in</h2>
                            <form method="POST" className="register-form" id="login-form">
                                <div className="form-group">
                                    <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;