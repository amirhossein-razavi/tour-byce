import React from 'react';
import { useSelector } from 'react-redux';

import pic1 from '../../assets/images/img_1.jpg';
import pic2 from '../../assets/images/img_2.jpg';
import pic3 from '../../assets/images/img_3.jpg';
import pic4 from '../../assets/images/img_4.jpg';
import './style.css';
import { tours } from '../../Mock data/tours';

function Tours() {
    var arr = [];
    while (arr.length < tours.length) {
        var r = Math.floor(Math.random() * (200 - 50) + 50) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log(arr);
    return (
        <section class="section visit-section">
            <div class="container">
                <div class="row">
                    <h2 className='title'>
                        لیست تورها
                </h2>
                </div>
                <div class="row">
                    {tours.length && tours.map((tour) => {
                        return (
                            <div class="col-lg-3 col-md-6 visit mb-3 mb-5" data-aos="fade-right">
                                <a href="restaurant.html"><img src={pic1} alt="Image placeholder" class="img-fluid" /> </a>
                                <p className='tour-address'>{tour.address}</p>
                                <p className='text-right'>{tour.about.slice(0, arr[tour.index])} ... &nbsp; <a style={{ color: '#36b2ff' }}>بیشتر</a></p>
                                <p className='text-right'>لیدر : <span style={{color: '#222'}}>{tour.name}</span></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Tours;
