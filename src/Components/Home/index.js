import React from 'react';
import { useSelector } from 'react-redux';

import Tours from '../Tours'
import './style.css';

function Home() {
    return (
        <>
            <section class="site-hero overlay" className='homeBackground'>
                <div style={{ backgroundColor: 'rgba(0,0,0,.7)' }}>
                    <div class="row site-hero-inner justify-content-center align-items-center">
                        <div class="col-md-10 text-center">
                            <h1 class="heading" data-aos="fade-up">به محراب سیر خوش آمدید</h1>
                            <p class="sub-heading mb-5" data-aos="fade-up" data-aos-delay="100">بهترین تور ها را اینجا پیدا کنید</p>
                            <p data-aos="fade-up" data-aos-delay="100"><a href="#tours" class="btn btn-primary mr-md-2 mr-0 mb-3 d-sm-inline d-block pr-5 pl-5 ml-3">لیست تورها</a> <a href="#" class="btn  btn-outline-light d-sm-inline d-block pr-5 pl-5">ایجاد تور جدید</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <Tours id='tours'/>
        </>
    );
}

export default Home;
