function Register({handleRegister}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const accountData = {
            email: email,
            password: password
        }

        handleRegister(accountData);
    }

    return (
        <>
            <h1>Register</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Email</label>
                <input placeholder="Email" name="email" id="email"/>

                <label>Password</label>
                <input placeholder="Password" name="password" id="password"/>

                <button>Sign Up</button>
            </form>
        </>
    )
}

export default Register;