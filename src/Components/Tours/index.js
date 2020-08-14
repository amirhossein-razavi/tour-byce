import React, { useState } from 'react';
import './style.css';
import { tours } from '../../Mock data/tours';
import moment from 'moment-jalaali';

// function randomDate() {
//     for (var i; i <= 15; i++) {
//         return new Date(new Date().getTime() + Math.random() * (new Date(2020, 11, 14).getTime() - new Date().getTime()))
//     }
// }

// const mamd = randomDate();

function Tours() {

    // const [time, setTime] = useState([]);
    var time = []
    for (var i = 0; i <= 15; i++) {
        const randomDate = new Date(new Date().getTime() + Math.random() * (new Date(2020, 11, 14).getTime() - new Date().getTime()));
        time.push(randomDate)
    }

    var arr = [];
    while (arr.length < tours.length) {
        var r = Math.floor(Math.random() * (200 - 50) + 50) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

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
                            <div class="col-lg-3 col-md-6 visit mb-3 mb-5 card" data-aos="fade-right">
                                <a href="restaurant.html"><img src={require(`../../assets/images/tours-${tour.index + 1}.jpg`)} alt="Image placeholder" class="img-fluid" /> </a>
                                <p className='tour-address'>{tour.address}</p>
                                <p className='text-right'>{tour.about.slice(0, arr[tour.index])} ... &nbsp; <a style={{ color: '#36b2ff' }}>بیشتر</a></p>
                                <p className='text-right'>لیدر : <span style={{ color: '#222' }}>{tour.name}</span></p>
                                {time.length && <p className='text-right'>تاریخ : <span style={{ color: '#222' }}>{moment(time[tour.index]).format('jYYYY/jM/jD')}</span></p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Tours;
