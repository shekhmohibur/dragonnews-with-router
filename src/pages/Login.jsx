import { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
const Login = () => {
    const [error, setError] = useState("");
    const {logIn} = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin=(e)=> {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;    
        logIn(email, password)
        .then(result => {
            const user = result.user;
            navigate(`${location.state? location.state : "/"}`)
        })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode);
    // ..
  });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Login Your Account</h2>
                <form onSubmit={handleLogin} class="card-body">
                    <fieldset class="fieldset">
                        {/* email */}
                        <label class="label">Email</label>
                        <input 
                        name='email'
                        type="email"
                        class="input" 
                        placeholder="Email" 
                        required
                        />
                        {/* password */}
                        <label class="label">Password</label>
                        <input 
                        name='password'
                        type="password" 
                        class="input" 
                        placeholder="Password" 
                        required
                        />
                        <div><a class="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className='text-secondary text-center'>{error}</p>
                        }
                        <button type='submit' class="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center'>Don't have an account ? <Link className='text-secondary' to={"/auth/register"}>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;