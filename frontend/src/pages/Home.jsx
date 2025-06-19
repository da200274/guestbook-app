import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { getMessage } from "../api";

function Home(){
    
    const [messages, setMessages] = useState([])

    //initialization - equal to ngOnInit
    useEffect(() =>{
        getMessage().then(setMessages).catch(console.error);
    }, [])

    return (
        <div>
            <h1>Guestbook</h1>
            <p>See what people wrote about us and feel free to leave a message. </p>
            {messages.map((msg) => (
                <div key={msg.id}>
                    <h4>{msg.name}</h4>
                    <h5>{msg.created_at}</h5>
                    <p>{msg.content}</p>

                </div>
            ))}
            <Link to="/message">
                <button>Leave a message</button>
            </Link>
        </div>
    );
}

export default Home;