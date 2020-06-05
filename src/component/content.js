import React, { useState } from 'react'
import UserConsumer from '../context'

const Navbar = () => {
    const [page, setPage] = useState('user');

    let date = (text) => {
        let newText = text.toString()
        return newText.split('T')[0]
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { user } = value;
                    if (typeof (user.results) === "undefined") {
                        return (
                            <p>Loading...</p>
                        )
                    }
                    console.log(user)
                    return (
                        <center>
                            <div className="col-md-6">
                                <div className="top-content">
                                    <img src={user.results[0].picture.large} alt="Profile Photo" />
                                </div>
                                <div className="bottom-content">
                                    <h3>
                                        {page === 'user' ? (
                                            `${user.results[0].name.first} ${user.results[0].name.last}`
                                        )
                                            : 
                                        page === 'e-mail' ? (
                                            `${user.results[0].email}`
                                        )
                                        : 
                                        page === 'date' ? (
                                            `${date(user.results[0].dob.date)}`
                                        )
                                        : 
                                        page === 'map' ? (
                                            `${user.results[0].location.street.name} ${user.results[0].location.city}/${user.results[0].location.country}`
                                        )
                                        : 
                                        page === 'phone' ? (
                                            `${user.results[0].cell}`
                                        )
                                        : null


                                        }
                                    </h3>
                                </div>
                                <div className="navigate">
                                    <div className="row" align="center">
                                        <div className="col" onClick={() => setPage('user')}>
                                            <i className="far fa-user fa-2x"></i>
                                        </div>
                                        <div className="col" onClick={() => setPage('e-mail')}>
                                            <i className="far fa-envelope fa-2x"></i>
                                        </div>
                                        <div className="col" onClick={() => setPage('date')}>
                                        <i className="far fa-calendar-alt fa-2x"></i>
                                        </div>
                                        <div className="col" onClick={() => setPage('map')}>
                                        <i className="far fa-map fa-2x"></i>
                                        </div>
                                        <div className="col" onClick={() => setPage('phone')}>
                                        <i className="fas fa-phone-alt fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </center>
                    )
                }
            }
        </UserConsumer>
    )
}
export default Navbar