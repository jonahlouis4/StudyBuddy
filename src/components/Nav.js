import React from 'react'
import { useEasybase } from 'easybase-react';
import { Link } from 'react-router-dom'

const Nav = () => {
    /** User authentication - easybase */
    const { isUserSignedIn, signOut } = useEasybase();

    /** Sign out user */
    const signOutUser = () => {
        if (isUserSignedIn()) {
          signOut();
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
                    <Link to="/Home">StudyBuddy</Link>
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
