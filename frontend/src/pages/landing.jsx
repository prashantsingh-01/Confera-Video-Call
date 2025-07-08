import React from 'react'
import "../App.css"
import {Link,useNavigate} from "react-router-dom"

export default function landing() {

    const router = useNavigate();

    function generateRandomString() {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const length = Math.floor(Math.random() * 3) + 5; // Random length between 5 and 7
        let result = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            result += letters[randomIndex];
        }

        return result;
    }

  return (
    <div className='landingPageContainer'>
        <nav>
            <div className='navHeader'><h2>Confera</h2></div>
            <div className='navList'>
                <p onClick={()=> router(generateRandomString())}>Join As Guest</p>
                <p onClick={()=>{
                    router("/auth")
                }}>Register</p>
                <div role='button' onClick={()=> router("/auth")}>Login</div>
            </div>
        </nav>

        <div className="landingMainCointainer">
            <div>
                <h1><span style={{color:"orange"}}>Where</span> Conversations Connect</h1>
                <p className='Clarity'>Clarity in Every Conversation</p>
                <div role='button'>
                    <Link to={"/auth"}>Get Started</Link>
                </div>
            </div>
            <div>
                <img src="/public/image8.png" alt="" />
            </div>

        </div>
    </div>
  )
}
