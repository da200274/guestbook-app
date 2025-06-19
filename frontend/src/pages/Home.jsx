import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <h1>Guestbook</h1>
            <p>See what people wrote about us and feel free to leave a message. </p>
            <Link to="/message">
                <button>Leave a message</button>
            </Link>
        </div>
    );
}

export default Home;