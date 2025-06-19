import { useState } from "react";
import { sendMessage } from "../api";

function Message(){
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')

    //e is the event object
    const submitMessage = async (e) =>{
        setStatus('sending');

        try{
            const response = await sendMessage(name, content);
            setStatus('success');
            console.log(response);
        }catch(err){
            setStatus('failed');
            console.error(err);
        }
    }

    return(
        <div>
            <label htmlFor="content">Message</label>
            <input type="text" id="content"
             value={content} onChange={(e) => setContent(e.target.value)}></input>
            <br />
            <br />
            <label htmlFor="name">Name</label>
            <input type="text" id="name"
             value={name} onChange={(e) => setName(e.target.value)}></input>
            <br />
            <br />
            <button onClick={submitMessage} disabled={status == 'sending'}>Post</button>

            <p>Status: {status}</p>
        </div>
    );
}

export default Message;
    