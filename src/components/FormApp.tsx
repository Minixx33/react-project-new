import React, {useState} from "react";
import {Link} from "react-router-dom";

//Simple Form Validation App
const FormApp : React.FC = () => {

    const validateEmail = (email: string): string | undefined => {
        if(!email.includes("@")) return "Please enter a valid email";
        return undefined;
    }

    const validatePassword = (password: string): string | undefined => {
        if(password.length < 9) return "Password must be at least 9 characters long";
        return undefined;
    }

    const validate = (newInputs: Inputs): Errors => {
        const newErrors: Errors = {}
        const emailError = validateEmail(newInputs.email);
        const passError = validatePassword(newInputs.password);
        if(emailError) newErrors.email = emailError;
        if(passError) newErrors.password = passError;

        return newErrors
    }

    const handleSubmit = () =>
    {
        setIsSubmitted(true);
    }

    type Inputs = {email: string; password: string}
    type Errors = Partial<Record<keyof Inputs, string>>
    type Submitted = Partial<Record<keyof Inputs, boolean>>
    const [inputs, setInputs] = useState<Inputs>({email: "", password: ""})
    const [errors, setErrors] = useState<Errors>(validate(inputs))
    const [submitted, setSubmitted] = useState<Submitted>({})
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    return (
        <div className="FormApp">  
        <h1>Simple Form App</h1>
        <form noValidate>
            <label>
                Email
                <input type="email" name="email" onChange={
                    event=> {
                        setInputs({...inputs, email: event.target.value})
                        setErrors(validate({...inputs, email: event.target.value}))
                    }
                }
                onBlur={() => setSubmitted({...submitted, email: true})}
                value={inputs.email}
                />
                {errors.email && submitted.email ? <p>{errors.email}</p> : null}
            </label>
            <label>
                Password
                <input type="password" name="password" onChange={
                    event=> {
                        setInputs({...inputs, password: event.target.value})
                        setErrors(validate({...inputs, password: event.target.value}))
                    }
                }
                onBlur={() => setSubmitted({...submitted, password: true})}
                value={inputs.password}
                />
                {errors.password && submitted.password ? <p>{errors.password}</p> : null}
            </label>
            <button className="submitButton" onClick={event => {
                event.preventDefault()
                if(Object.keys(errors).length == 0)
                {
                    handleSubmit();
                }
            }}>
                Submit
            </button>
        </form>
        {isSubmitted && (
            <div className="success">
                <p>Form submitted successfully!</p>
            </div>
        )}
        <footer>
            <p>Return to <Link to="/">Homepage</Link></p>
        </footer>
        </div>
    );
}


export default FormApp;