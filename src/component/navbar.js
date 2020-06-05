import React from 'react'
import UserConsumer from '../context'

const Navbar = () => {
    let RandomUser = (dispatch, e) => {
        dispatch({ type: "CHANCE_USER"});
    }

    return (
        <UserConsumer>
            {
                value => {
                    const { dispatch } = value;
                    return (
                        <div className="nav">
                            <div className='nav-top'><h3>Random User</h3></div>
                            <div className='nav-content'>
                                <center>
                                    <button onClick={RandomUser.bind(this, dispatch)}>Random</button>
                                </center>
                            </div>
                        </div>
                    )
                }
            }
        </UserConsumer>
    )
}
export default Navbar