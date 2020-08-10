import React from 'react';
import './style.css';
import signUp from '../../assets/images/signup-image.jpg';
import { useDispatch } from 'react-redux';
import { changeAuthStatus } from '../../Redux/actions/authorization'

function Register() {
    const dispatch = useDispatch()
    return (
        <div className="main">
            <section class="signup">
                <div class="container">
                    <div class="signup-content">
                        <div class="signup-form">
                            <h2 class="form-title">ثبت نام</h2>
                            <form method="POST" class="register-form" id="register-form">
                                <div class="form-group">
                                    <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="name" id="name" placeholder="نام" />
                                </div>
                                <div class="form-group">
                                    <label for="email"><i class="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="ایمیل" />
                                </div>
                                <div class="form-group">
                                    <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="رمز" />
                                </div>
                                <div class="form-group">
                                    <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="تکرار رمز" />
                                </div>
                                <div class="form-group form-button">
                                    <input type="submit" name="signup" id="signup" class="form-submit" value="ثبت نام" />
                                </div>
                            </form>
                        </div>
                        <div class="signup-image">
                            <figure><img src={signUp} alt="sing up image" /></figure>
                            <a href="#" class="signup-image-link" onClick={() => dispatch(changeAuthStatus('login'))}>قبلا عضو شده ام</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Register;
