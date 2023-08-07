"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 mt-[0px]">
      <div
        className="bg-[url('/backgroundgood.png')] bg-cover bg-center w-full h-full"
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <button className='bg-pink-300 rounded-lg p-4'>
      <div className="text-center text-white text-6xl font-serif ">
        Eco Fashion
      </div>
      </button>

      <div className="flex items-center">
        <Image src="/monkey.png" alt="/" width={300} height={300} />
        <div className="ml-4 mt-200">
          <button type="button" className="rounded-full bg-pink-300 md:100 border-spacing-2 border p-4 text-white font-serif text-2xl">
          <Link href='/page2'>Wanna go shopping? Get started!</Link>
          </button>
        </div>
      </div>

        


    </main>
  );
}