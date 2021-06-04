import React, { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { useEasybase } from 'easybase-react';
import { Form } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger  from 'react-bootstrap/OverlayTrigger';

const LogIn = () => {
    /** User authentication */
    const { signIn, signUp } = useEasybase();
    /** Username */
    const [username, setUsername] = useState("");
    /** Password */
    const [password, setPassword] = useState("");
    /** Validates form */
    const [validated, setValidated] = useState(false);
    /** True = signin, false = signup */
    const [formType, setType] = useState(true);

    /** Handle submission of form */
    const handleSubmit = (event) => {
      const form = event.currentTarget;

      event.preventDefault();

      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        const signIn = formType;

        if (signIn === true) {
            onSignInClick();
        } else {
            onSignUpClick();

            // Timeout required user to be redirected to home
            setTimeout(() => {
                window.location.reload();
                }, 1000);
        }
      }
  
      setValidated(true);
    };

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

    const myFormType = () => {
        const signIn = formType;
        if (signIn === true) {
            return  <>
                        <button className="btn btn-primary" type="submit">Sign In</button>
                        <a role="button" className="ml-1 btn btn-link" onClick={() => setType(false)}>Or create an account</a>
                    </>
        } else {
            return <>
                        <button className="btn btn-danger" type="submit">Sign Up</button>
                        <a role="button" className="ml-1 btn btn-link" onClick={() => setType(true)}>Or return to sign in</a>
                    </>
        }
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Sign in with the following:</Popover.Title>
          <Popover.Content style={{fontWeight:600}}>
            Username: <span style={{fontWeight:400}}>studybuddytest</span>
            <br />
            Password: <span style={{fontWeight:400}}>studybuddytest</span>
          </Popover.Content>
        </Popover>
      );

    return (
        <div
        className="bg--container--1 main--wrapper"
        >
            <Nav logged={false} />
            <div
            className="login--wrapper container"
            >
                <div
                className="text-center"
                >
                    <h1
                    className="mt-5"
                    >
                        Welcome to StudyBuddy!
                    </h1>
                    <h4
                    className="text-primary"
                    >
                        Sign in or create your account by filling up the form.
                    </h4>
                </div>
                <div
                className="mt-5 py-5 px-4 px-sm-5 shadow-lg bg-white"
                >
                    <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                    >
                        <div
                        className="mb-3"
                        style={{fontWeight:600}}
                        >
                        </div>
                        <Form.Group
                        controlId="username"
                        >
                            <Form.Label>Username or Email</Form.Label>
                            <Form.Control 
                            required
                            type="text"
                            placeholder="Enter your username or email"
                            onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                        controlId="password"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            required
                            type="password"
                            placeholder="Enter your password"
                            onChange={e => setPassword(e.target.value)} 
                            />
                        </Form.Group>
                        { myFormType() }
                    </Form>
                    <div
                    className="text-center"
                    >
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <button variant="success" className="btn btn-lg btn-link">Try it out without signin up</button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LogIn
