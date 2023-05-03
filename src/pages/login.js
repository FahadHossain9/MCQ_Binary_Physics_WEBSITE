    import { useState } from "react";
    import { auth } from "./database/auth_database_firebase";
    import { logInWithEmailAndPassword } from "./database/auth_database_firebase";
    import { useAuthState } from "react-firebase-hooks/auth";
    import { useRouter } from "next/router";
    import { useEffect } from "react";
    const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    async function login(event) {
        event.preventDefault();
        try {
        await logInWithEmailAndPassword(email, password);
        //router.push("/");
        } catch (error) {
        console.error(error.message);
        }
    }

    useEffect(() => {
        if (loading) {
            load()
        }
        if (user) router.push('/examCards')
        console.log(user);
        if(error){}
    }, [user, loading, error]);

    const load = () => {
        return <div><h1>Mmmm Dashboard</h1></div>;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 ">
        <div className="w-2/3 lg:w-[25%] m-4 p-6 bg-white rounded-xl shadow-2xl relative ">
            <div className="flex flex-col items-center">
            <img
                src="/Images/icon/sign.png"
                alt="icon"
                className="w-16 h-16 object-cover  mt-10"
            />
            </div>
            <div className="flex flex-col mt-4 mb-12 items-center">
            <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border-b border-gray-400 rounded-lg mt-4 text-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="p-2 border-b border-gray-400 rounded-lg mt-4 text-center"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="bg-black text-white py-2 px-6 text-xl  rounded-3xl mt-10 hover:bg-indigo-600 absolute bottom-0 translate-y-1/2 "
                onClick={(event) => login(event)}
            >
                Login
            </button>
            <div className="text-xl absolute bottom-0 translate-y-[80px] hover:shadow-sm hover:cursor-pointer hover:text-2xl">
                <button onClick={() => router.push("/register")}>REGISTER</button>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Login;
