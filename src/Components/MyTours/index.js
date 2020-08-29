import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


function MyTours(props) {

  const [myTours, setMyTours] = useState()

  useEffect(() => {
    const myTours = JSON.parse(localStorage.getItem('myTours'))
    setMyTours(myTours)
  }, [])

  return (
    <div style={{ padding: 70, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h2 className='title'>
        تورهای من
                </h2>
      {myTours ?
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">test</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {myTours.map((tour, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{tour.address}</td>
                  <td>{tour.date}</td>
                  <td>{tour.description}</td>
                  <td>{tour.leader}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        :
        <Link to="/newpost" style={{ width: '20%', padding: '5px 20px', backgroundColor: "#3c8bfa", textAlign: 'center', color: '#fff', borderRadius: 10, cursor: 'pointer' }}>
          ثبت تور جدید
          </Link>}
    </div>
  );
}

export default MyTours;