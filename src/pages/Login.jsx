import { Link } from 'react-router';
const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl text-center py-5'>Login Your Account</h2>
                <form class="card-body">
                    <fieldset class="fieldset">
                        <label class="label">Email</label>
                        <input type="email" class="input" placeholder="Email" />
                        <label class="label">Password</label>
                        <input type="password" class="input" placeholder="Password" />
                        <div><a class="link link-hover">Forgot password?</a></div>
                        <button type='submit' class="btn btn-neutral mt-4">Login</button>
                        <p className='font-semibold text-center'>Don't have an account ? <Link className='text-secondary' to={"/auth/register"}>Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;