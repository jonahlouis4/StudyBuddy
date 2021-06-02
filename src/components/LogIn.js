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
        <div>
            Hello from log in
        </div>
    )
}

export default LogIn
