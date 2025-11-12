import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user)
        })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Register Your Account</h2>
                <form onSubmit={handleRegister} class="card-body">
                    <fieldset class="fieldset">
                        {/* Name */}
                        <label class="label">Your Name</label>
                        <input 
                        name='name' 
                        type="text" 
                        class="input" 
                        placeholder="Enter your name"
                        required
                         />
                        {/* Photo url */}
                        <label class="label">Photo URL</label>
                        <input name='photo' 
                        type="text" 
                        class="input" 
                        placeholder="Photo Url"
                        required 
                        />
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
                        <button type='submit' class="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center'>Already have an account ? <Link className='text-secondary' to={"/auth/login"}>Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;