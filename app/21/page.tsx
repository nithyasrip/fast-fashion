import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="bg-[url('/background.png')] bg-cover bg-center w-full h-full"
        style={{
          position: "absolute",
          zIndex: -1,
        }}
      ></div>
      <div className="mb-24 mt-[-200px]">
        <button className="text-center text-white text-8xl font-serif bg-yellow-800 rounded-2xl py-12 px-12">
          Forever 21
        </button>
      </div>
      <button className="bg-white rounded-lg mt-[-50px]">
        <div className="text-center text-yellow-900 text-2xl font-serif max-w-lg px-4 pb-4">
          Bad choice! Items made at this store are almost exclusively made with
          synthetic fabrics, which are not biodegradable or recyclable after use. Forever 21’s clothing is the second-highest pollutant of clean water.
        </div>
      </button>
      <div className="mt-4">
        <div className="flex flex-col items-center">
          <Link href="/page2">
            <button
              type="button"
              className="rounded-full bg-red-500 border-spacing-2 border p-5 text-white font-serif text-2xl"
            >
              Try again
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
