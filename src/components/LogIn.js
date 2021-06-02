import React, { useState } from 'react'
import { useEasybase } from 'easybase-react';

const LogIn = () => {
    /** User authentication */
    const { isUserSignedIn, signIn, signOut, signUp } = useEasybase();
    /** Username */
    const [username, setUsername] = useState("");
    /** Password */
    const [password, setPassword] = useState("");

    const onSignInClick = async () => {
        const res = await signIn(username, password);
        if (res.success) {
        setUsername("");
        setPassword("");
        }
    }

    const onSignUpClick = async () => {
        const res = await signUp(username, password);
        if (res.success) {
        await signIn(username, password);
        setUsername("");
        setPassword("");
        }
    }

    return (
        <div
        className="container"
        >
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={onSignInClick}>Sign In</button>
        </div>
    )
}

export default LogIn
