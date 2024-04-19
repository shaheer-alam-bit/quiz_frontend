import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div >
            <h1>Welcome to Meals App</h1>
            <p>Sign up or log in to start creating/viewing Meals</p>
            <Link to="/signup">Sign up</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Home;
