import React, {useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div className="container bg-dark text-light py-3">  
        <h1 className="mb-4 text-center">Simple Form Validation App</h1>
        <form noValidate>
            <div className="form-group mb-3">
            <label className="form-label">Email </label>
                <input type="email" name="email" className="form-control" onChange={
                    event=> {
                        setInputs({...inputs, email: event.target.value})
                        setErrors(validate({...inputs, email: event.target.value}))
                    }
                }
                onBlur={() => setSubmitted({...submitted, email: true})}
                value={inputs.email}
                />
                {errors.email && submitted.email ? <p className="alert alert-danger">{errors.email}</p> : null}
            
            </div>
            <div className="form-group mb-3">
            <label className="form-label">Password </label>
                <input type="password" name="password" className="form-control" onChange={
                    event=> {
                        setInputs({...inputs, password: event.target.value})
                        setErrors(validate({...inputs, password: event.target.value}))
                    }
                }
                onBlur={() => setSubmitted({...submitted, password: true})}
                value={inputs.password}
                />
                {errors.password && submitted.password ? <p className="alert alert-danger">{errors.password}</p> : null}
            </div>
            <div className="text-center">
            <button className="btn btn-primary" onClick={event => {
                event.preventDefault()
                if(Object.keys(errors).length == 0)
                {
                    handleSubmit();
                }
            }}>
                Submit
            </button></div>
        </form>
        {isSubmitted && (
            <div className="success text-center py-4">
                <p className="alert alert-success">Form submitted successfully!</p>
            </div>
        )}
        <footer>
            <p className="text-center py-5">Return to <Link to="/">Homepage</Link></p>
        </footer>
        </div>
    );
}


export default FormApp;