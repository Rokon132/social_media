import React, { useState } from 'react';
import './RegisterFormStyle.css';


function RegisterForm() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Address, setAddress] = useState("");
    const [txtmsg, setTxtmsg] = useState("");
    const [myCar, setMyCar] = useState("BMW");

    const handleTxtMsg = (event) => {
        setTxtmsg(event.target.value);
    }
    function HandleSubmit(event) {
        event.preventDefault();
        console.log("Name  : ", Name);
        console.log("Email : ", Email);
        console.log("Password : ", Password);
        console.log("Address : ", Address);
        console.log("TxtMsg : ", txtmsg);
        console.log("mycar : ", myCar);

        setTxtmsg("");
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        console.log("message : ", "taking input from Form Successfully done ")

    }
    return (
        <div>
            <h1>Registration Form</h1>

            <form onSubmit={HandleSubmit}>
                <div>
                    <textarea
                        value={txtmsg}
                        // onChange={(e) => setTxtmsg(e.target.value)}
                        onChange={handleTxtMsg}
                    >

                    </textarea>
                </div>
                <div>
                    <label > Enter your name :
                        <div>
                            <input
                                type="text" value={Name}
                                onChange={(e) => setName(e.target.value)} >

                            </input>
                        </div>

                    </label>
                </div>


                <div>
                    <label > Enter your Email :
                        <div>
                            <input
                                type="text" value={Email}
                                onChange={(e) => setEmail(e.target.value)} >

                            </input>
                        </div>

                    </label>
                </div>

                <div>
                    <label > Enter your password :
                        <div>
                            <input
                                type="text" value={Password}
                                onChange={(e) => setPassword(e.target.value)} >

                            </input>
                        </div>

                    </label>
                </div>

                <div>
                    <label > Enter your Address :
                        <div>
                            <input
                                type="text" value={Address}
                                onChange={(e) => setAddress(e.target.value)} >

                            </input>
                        </div>

                    </label>
                </div>

                <div>
                    <label>choose your car
                        <div>
                            <select
                                value="myCar"
                                onChange={(e) => setMyCar(e.target.value)}
                            >
                                <option value="Ford">Ford</option>
                                <option value="Volvo">Volvo</option>
                                <option value="Fiat">Fiat</option>

                            </select>
                        </div>
                    </label>
                </div>

                <div>
                    <button type="button" onClick={HandleSubmit}>
                        submit form
                    </button>
                </div>
            </form>

        </div>
    );
}

export default RegisterForm;