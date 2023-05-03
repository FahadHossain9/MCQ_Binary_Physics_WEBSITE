import Image from "next/image";
import { useRouter } from "next/router";
function HomePage() {
  const router = useRouter();
  return (
    <div className="relative h-screen bg-center bg-no-repeat bg-cover bg-fixed">
      <Image
        src="/14.webp"
        alt="Background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-[70px]  absolute left-0 bottom-0 text-white  font-bold bg-black w-[100%]  ">
          Welcome to Binary Physics
        </h1>
       
        <div className="mt-8 px-6 py-2 bg-black border-2  text-white rounded-full text-[30px] font-bold hover:bg-blue-600 transition">
        <button onClick={() => router.push("/login")}>Get Started</button>
    </div>
      </div>
    </div>
  );
}

export default HomePage;
