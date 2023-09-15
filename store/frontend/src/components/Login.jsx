function Login({ handleLogin }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const accountData = {
            email: email,
            password: password
        }

        handleLogin(accountData);
    }

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input placeholder="Email" name="email" id="email"/>

                <label>Password</label>
                <input placeholder="Password" name="password" id="password"/>

                <button>Submit</button>
            </form>
        </>
    )
}

export default Login;