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
                            <input id="fname" type="text" placeholder="First Name" />
                            <input id="lname" type="text" placeholder="Last Name" />
                        </div>
                        <input id="phone" type="text" placeholder="Phone" />
                        <input id="userid" type="text" placeholder="User ID" />
                        <input id="password" type="password" placeholder="Password" />
                        <Link to="/dashboard"><button>Sign Up</button></Link>

                    </div>
                    <h2>
                        Already have an account? <a onClick={toggleView}>Sign In</a>
                    </h2>
                </div>
            </div>
        </div>
    );
}
