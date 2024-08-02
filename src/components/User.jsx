import React from "react"

function User({ user }) {


    return (
        <div className="User-panel">
            <h1 className="User-text">User Name: {user.name.first} {user.name.last}</h1>
        </div>
    )
}

export default User