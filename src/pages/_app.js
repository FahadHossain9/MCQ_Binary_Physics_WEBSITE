import "../styles/globals.css";
import { useRouter } from "next/router";
import Login from "./login";
import Register from "./register";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      <main>
        {router.pathname === "/login" && <Login />}
        {router.pathname === "/register" && <Register />}
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
