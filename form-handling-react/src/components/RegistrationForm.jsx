import { useState } from "react";

const RegistrationForm = ()=>{

const initialState = {username: '', email:'', password:''}
const [username, setUserName] = useState(initialState.username);
const [email, setEmail] = useState(initialState.email);
const [password, setPassword] = useState(initialState.password);
const [errors, setErrors] = useState({})


const handleChange = (e)=>{
const {name, value} = e.target

if (name === "username") setUserName(value);
if (name === "email") setEmail(value);
if (name === "password") setPassword(value);

}

const handleSubmit =(e)=>{
    e.preventDefault();
    

// validation logics
const validationError = {}
if (!username) validationError.username = "User name is required"
if (!email) validationError.email = "Email is required"
if (!password) validationError.password = "Password is required"

if(Object.keys(validationError).length > 0){
    setErrors(validationError);
    return;
}

console.log(username, email, password)

    
    // reset form
    setUserName("");
    setEmail("");
    setPassword("");
    setErrors({});

};
return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" value={username} className="username" onChange={handleChange} />
            {errors.username && <div style={{color:"red"}}>{errors.username}</div> }
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} className="email" onChange={handleChange} />
            {errors.email && <div style={{color:"red"}}>{errors.email}</div> }
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} className="password" onChange={handleChange} />
            {errors.password && <div style={{color:"red"}}>{errors.password}</div> }
        </div>

        <div>
            <button type="submit">Submit</button>
        </div>  
    </form>
)}

export default RegistrationForm;

