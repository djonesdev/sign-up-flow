import React from 'react'
import { Link } from 'react-router-dom'

function AuthRedirect() {
    return (
        <div>
            <p>Please sign up to view this content</p>
            <Link to="/">Go to the sign up page</Link>
        </div>
    )
}

export default AuthRedirect
