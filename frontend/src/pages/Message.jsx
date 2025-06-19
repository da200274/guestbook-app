function Message(){
    const [content, setContent] = useState('')
    const [name, setName] = useState('')

    return(
        <div>
            <label htmlFor="content">Message</label>
            <input type="text" id="content"></input>
            <br />
            <br />
            <label htmlFor="name">Name</label>
            <input type="text" id="name"></input>
            <br />
            <br />
            <button>Post</button>
        </div>
    );
}

export default Message;
    