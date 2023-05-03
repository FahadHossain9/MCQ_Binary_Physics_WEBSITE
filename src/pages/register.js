    import { useState, useEffect } from "react";
    import { useAuthState } from "react-firebase-hooks/auth";
    import { useRouter } from "next/router";
    import { auth } from "./database/auth_database_firebase";
    import { registerWithEmailAndPassword } from "./database/auth_database_firebase";

    const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    const register = async (event) => {
        event.preventDefault();
        if (!name) {
        alert("Please enter name");
        return;
        }

        try {
        await registerWithEmailAndPassword(name, email, password);
        } catch (error) {
        alert(error.message);
        return;
        }
    };

    useEffect(() => {
        if (loading) return;

        if (user) {
        router.push("/examCards");
        }

        if (error) {
        // Handle error
        }
    }, [user, loading, error]);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
        <div className="w-2/3 lg:w-[25%] m-4 p-6 bg-white rounded-xl shadow-2xl relative">
            <div className="flex flex-col items-center">
            <img
                src="/Images/icon/reg.png"
                alt="icon"
                className="w-16 h-16 object-cover  mt-10"
            />
            </div>
            <div className="flex flex-col mt-4 mb-12 items-center">
            <input
                type="text"
                placeholder="Enter your username"
                className="p-2 border-b border-gray-400 rounded-lg mt-4 text-center"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
                className="p-2 border-b border-gray-400 rounded-lg mt-8 text-center"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="bg-black text-white py-2 px-6 text-xl rounded-3xl mt-10 hover:bg-indigo-600 absolute bottom-0 translate-y-1/2"
                onClick={register}
            >
                Register
            </button>
            <div className="text-xl absolute bottom-0 translate-y-[80px] hover:shadow-sm hover:cursor-pointer hover:text-2xl">
            <button onClick={() => router.push("/login")}>Login</button>
        </div>
            </div>
        </div>
        </div>
    );
    };

    export default Register;
