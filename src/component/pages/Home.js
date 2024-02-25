import React, { useState } from 'react'
import Main from '../Main';


const Home = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);


    const login = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem(
            "token-info",
            JSON.stringify(userData)
        );
        setIsLoggedin(true);
        setName("");
        setEmail("");
        setpassword("");
    };


    const logout = () => {
        localStorage.removeItem("token-info");
        setIsLoggedin(false);
    }


    return (
        <div>
            {
               !isLoggedin ? (
                    <>
                        <form>
                            <input type='text'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder='Enter Name: ' />

                            <input type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder='Enter Email: ' />

                            <input type='password'
                                onChange={(e) => setpassword(e.target.value)}
                                value={password}
                                placeholder='Enter Password: ' />

                            <button type='sumbit' onClick={login}>Login</button>

                        </form>
                    </>
                ) : (
                    <>
                            <Main/>
                            <button onClickCapture={logout}>Logout</button>
                    </>
                )
            }
            <div>
                
            </div>
        </div>
        
    )
}

export default Home
