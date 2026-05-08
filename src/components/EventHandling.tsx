function EventHandling() {

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event.target.value);
    };

    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        const username = event.target.username.value;
        const password = event.target.password.value;
        console.log("Username:", username);
        console.log("Password:", password);
    }

    return (
        <>
            <section>
                <h2>Event Handling</h2>
                <section>
                    <h3>On Change</h3>
                    <input type="text" name="demo" id="demo" onChange={handleChange} />
                </section>
                <section>
                    <h3>On Click</h3>
                    <button onClick={() => alert("hello")}>CLICK ME</button>
                </section>
                <section>
                    <h3>On Submit</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="usernameInput">Username:</label>
                        <input type="text" id="usernameInput" name="username" required />
                        <label htmlFor="passwordInput">Password:</label>
                        <input type="password" id="passwordInput" name="password" required minLength={4} maxLength={10} />
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </section>
        </>
    );
}

export default EventHandling;