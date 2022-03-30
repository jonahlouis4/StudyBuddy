import React, { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useEasybase } from "easybase-react";
import { Form } from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

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
  const [formType, setFormType] = useState(true);
  /** Form Error - Username */
  const [usernameError, setUsernameError] = useState(false);
  /** Form Error - Password */
  const [passwordError, setPasswordError] = useState(false);
  /** Form Success - Username */
  const [usernameSuccess, setUsernameSuccess] = useState(false);
  /** Form Success - Password */
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  /** Form Loading  */
  const [loading, setLoading] = useState(false);
  /** Form Error message - signin or signup */
  const [requestErrorMessage, setRequestErrorMessage] = useState("")

  /* CONSTANTS */
  const SIGNIN_INVALID_EMAIL = "Email address and/or password was incorrect."
  const SIGNUP_PASSWORD_SHORT = "Password must be at least 8 characters long."
  const SIGNUP_USER_EXISTS = "An account with that username already exists."
  const SIGN_GENERIC_ERROR = "There was an issue processing your request. Please try again later"

  /** Handle submission of form */
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    !form.checkValidity() ? event.stopPropagation() : handleRequest()
  };

  const handleRequest = async () => {
    setLoading(true)

  // SIGN IN
    if (formType) {
      const res = await signIn(username, password);
      if (res.success) {
        setUsername("");
        setPassword("");
        setUsernameSuccess(true);
        setPasswordSuccess(true);
      } else {
        setUsernameError(true);
        setPasswordError(true);
        setLoading(false)
        setRequestErrorMessage(SIGNIN_INVALID_EMAIL)
      }
  // SIGN UP
    } else {
      const res = await signUp(username, password);
      if (res.success) {
        await signIn(username, password);
        setUsername("");
        setPassword("");
      } else if (res.errorCode === "BadPasswordLength") {
        setLoading(false)
        setPasswordError(true);
        setRequestErrorMessage(SIGNUP_PASSWORD_SHORT)
      } else if (res.errorCode === "UserExists") {
        console.log(res.errorCode)
        setLoading(false)
        setPasswordError(true);
        setRequestErrorMessage(SIGNUP_USER_EXISTS)
      } else {
        setLoading(false)
        setPasswordError(true);
        setRequestErrorMessage(SIGN_GENERIC_ERROR)
      }
    }
  };

  const FormType = () => {
    const btnClass = formType ? "btn btn-primary" : "btn btn-danger";

    return (
      <>
        <button className={btnClass} type="submit">
          {loading ? (
            <span
              className="spinner-border spinner-border-sm mr-2"
              role="status"
              aria-hidden="true"
            ></span>
          ) : null}
          {formType ? "Sign In" : "Sign Up"}
        </button>
        <a
          role="button"
          className="ml-sm-1 btn btn-link"
          onClick={() => {
              setFormType(!formType)
              setUsernameError(false);
              setPasswordError(false);
            }}
        >
          {formType ? "Or create an account" : "Or return to sign in"}
        </a>
      </>
    );
  };

  const FormTitle = () => {
    if (formType) {
      return <h1>Sign In</h1>;
    } else {
      return <h1>Sign Up</h1>;
    }
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Sign in with the following:</Popover.Title>
      <Popover.Content style={{ fontWeight: 600 }}>
        Username: <span style={{ fontWeight: 400 }}>studybuddytest</span>
        <br />
        Password: <span style={{ fontWeight: 400 }}>studybuddytest</span>
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="bg--container--1 main--wrapper">
      <Nav logged={false} />
      <div className="login--wrapper container mb-5">
        <div className="text-center">
          <h1 className="mt-5">Welcome to StudyBuddy</h1>
          <h4 className="text-primary">
            A simple flashcard web application designed for studying.
          </h4>
        </div>
        <div className="mt-5 py-5 px-4 px-sm-5 shadow-lg bg-white">
          <Form validated={validated} onSubmit={handleSubmit}>
            <div className="mb-5">
              <FormTitle />
            </div>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={usernameError}
                isValid={usernameSuccess}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={passwordError}
                isValid={passwordSuccess}
              />
              <Form.Control.Feedback type="invalid">
                { requestErrorMessage }
              </Form.Control.Feedback>
            </Form.Group>
            <FormType />
          </Form>
          <div className="text-center">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <button variant="success" className="btn btn-link mt-3">
                Try it out without signin up
              </button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
