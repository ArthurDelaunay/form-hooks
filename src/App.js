import { useState } from "react"

const App = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleEmailChange = (e) => {
        const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        const isValid = regEx.test(e.target.value)
        setEmail(e.target.value)
        setEmailIsValid(isValid)
    }

    const handlePasswordChange = (e) => {
        const isValid = e.target.value.length > 5
        setPassword(e.target.value)
        setPasswordIsValid(isValid)
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked)
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (emailIsValid && passwordIsValid) {
            setIsSubmitted(true)
        }
    }

    return (
        <main>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="inputFirstName"> First Name : </label>
                    <input
                        type="text"
                        id="inputFirstName"
                        onChange={handleFirstNameChange}
                    />
                    <label htmlFor="inputLastName"> Last Name : </label>
                    <input
                        type="text"
                        id="inputLastName"
                        onChange={handleLastNameChange}
                    />
                    <label htmlFor="inputEmail"> email : </label>
                    <input
                        type="text"
                        id="inputEmail"
                        onChange={handleEmailChange}
                    />
                    <label htmlFor="inputPassword"> password : </label>
                    <input
                        type="password"
                        id="inputPassword"
                        onChange={handlePasswordChange}
                    />
                    <label htmlFor="checkboxRememberMe"> remember me ? </label>
                    <input
                        type="checkbox"
                        name=""
                        id="checkboxRememberMe"
                        onChange={handleRememberMeChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <section>
                    <p>Congrats, you submit your form as intendeed</p>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{email}</p>
                </section>
            )}
        </main>
    )
}

export default App
