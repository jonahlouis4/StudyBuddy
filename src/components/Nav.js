import React from 'react'
import { useEasybase } from 'easybase-react';
import { useHistory , Link } from 'react-router-dom'

const Nav = () => {
    /** User authentication - easybase */
    const { isUserSignedIn, signOut } = useEasybase();
    /** Used to redirect user to '/' */
    const history = useHistory();

    /** Sign out user */
    const signOutUser = () => {
        if (isUserSignedIn()) {
          signOut();
          history.push("/");
        } 
      }

    return (
        <nav 
        className="navbar navbar-light bg-light"
        >
            <div 
            className="container"
            >
                <span 
                className="navbar-brand mb-0 h1"
                >
                    <Link to="/" >StudyBuddy</Link>
                </span>
                <button 
                onClick={signOutUser} 
                className="btn btn-outline-primary"
                >
                    Sign Out
                </button>
            </div>
        </nav>
    )
}

export default Nav
