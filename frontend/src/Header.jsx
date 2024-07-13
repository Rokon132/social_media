import React from 'react';

import './style.css';

function Header() {

    return (
        <div className="container">
            <div className="login-section">
                <h1>Social_mate</h1>
                <div className="recent-logins">

                </div>
                <div className="login-form">
                    <form>
                        <input type="text" placeholder="Email or Phone" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Log In</button>



                    </form>
                    <div className="options">
                        <a href="#">Forgotten password?</a>
                        <button>Create new account</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Header;