import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className='notfound'>
            <h2> 404 not found </h2>
            <h3>The page you are looking for does not exist.
                Go to <Link to={'/'}>Home Page</Link>
            </h3>
        </div>
    );
}
