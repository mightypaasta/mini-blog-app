import {Link} from 'react-router-dom'

const NotFound = () => {
    
    return (
        <div className="not-found">
            <h2>404 Error!!</h2>
            <p>The page u r looking cannot be found!!</p>
            <Link to="/">Go to HomePage</Link>
        </div>
    )
}

export default NotFound;