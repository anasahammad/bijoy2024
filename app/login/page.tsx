import { googleLogin } from "../actions";



const Login = () => {
    return (
        <div className="my-16">
           <div className="container mx-auto">

                <div className="flex flex-col justify-center items-center  bg-slate-100 py-8 px-6"><h2 className="text-3xl font-semibold mb-6">Hello, It's time to Login</h2>
                
                <form action={googleLogin} >
                    <button type="submit" value="google" name="action" className="border-[1.5px] border-[#ccc] px-4 py-2 rounded-md bg-black text-white">Sign in with Google</button>
                </form>
                </div>

           </div>
           
        </div>
    );
};

export default Login;