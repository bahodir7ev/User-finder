import { useEffect, useState } from "react";
import User from "./components/User";
import Loading from "./components/Loading";

function App() {
    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState(false)

    function getUser() {
        setLoading(true)
        fetch('https://randomuser.me/api/')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                setUser(data.results[0]);
                setLoading(false)
            })
            .catch(function (error) {
                setLoading(false);
                setError(true)
                console.log(error);
            })
    }

    useEffect(() => {
        getUser()
    }, [])

    function handleClick() {
        getUser()
    }

    if (error) {
        return <h1>Error</h1>
    }

    return (
        <div>
            {user == null || loading ? <Loading /> : null}
            {user !== null ?
                <>
                    <User user={user} />
                    <button onClick={handleClick} className="User-btn">Find Next User</button>
                </>
                : null}
        </div>
    )
}

export default App