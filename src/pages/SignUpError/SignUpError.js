import React from 'react'
import { Link } from 'react-router-dom'

function SignUpError() {
    return (
        <div>
            <p>Sorry, it looks like something went wrong with sign up, please try again!</p>
            <Link to="/">Go back to Sign Up</Link>
        </div>
    )
}

export default SignUpError
