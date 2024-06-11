import React from 'react';
import { Link } from 'react-router-dom';

export default function Registration({ toggleView }) {
    return (
        <div>
            <div className="registration-landing">
                <div className="registration-main">
                    <h1>Create a Parent Account</h1>
                    <h3>This is a sample subheading for login.</h3>
                    <div className="registration-form">
                        <div className="registration-form-name">
                            <div className='label-input'>
                                <label>First Name</label>
                                <input id="fname" type="text" />
                            </div>
                            <div className='label-input'>
                                <label>Last Name</label>
                                <input id="fname" type="text" />
                            </div>
                        </div>
                        <div className='label-input'>
                            <label>Phone</label>
                            <input id="fname" type="text" />
                        </div>
                        <div className='label-input'>
                            <label>Email ID</label>
                            <input id="fname" type="text" />
                        </div>
                        <div className='label-input'>
                            <label>Password</label>
                            <input id="fname" type="text" />
                        </div>
                        <Link to="/dashboard"><button className='register-button'>Submit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
