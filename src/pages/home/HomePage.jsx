import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useHistory();

    console.log('We are in Router:', location.pathname); // '/about | faqs'

    const navigate = (path) => {
        history.push(path);
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=true', // Querry Params
            state: {
                online: true
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>            
                <button onClick={ () => navigateProps('/online-state')}>
                    Go To Page with State / Querry Params
                </button>
                <button onClick={ () => navigate('/profile')}>
                    Go To Profile
                </button>
        </div>
    );
}

export default HomePage;
