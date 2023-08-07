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
          Stitchfix
        </button>
      </div>
      <button className="bg-white rounded-lg mt-[-50px]">
        <div className="text-center text-yellow-900 text-2xl font-serif max-w-lg px-4 pb-4">
        Good choice! For maximum eco-friendly wear, look for recycled alternatives instead of textiles like polyester, acrylic, rayon and nylon. Among many environmental impacts, if not recycled, all of these fabrics use chemicals and large amounts of water for production. 
        </div>
      </button>
      <div className="mt-4">
        <div className="flex flex-col items-center">
          <Link href="https://www.stitchfix.com/?utm_source=google&utm_campaign=brandsearch|google|gn|all|fix|pros|web|us|&utm_medium=cpc&utm_adgroup=152457872348&utm_content=637892496861&utm_term=stitch%20fix&gclid=Cj0KCQjwib2mBhDWARIsAPZUn_k0hbiTQJ2vnb3tSimbMEyLHYc-jy2sSybNKJPNYLUwkw7Bk6biFMMaAoFDEALw_wcB">
            <button
              type="button"
              className="rounded-full bg-green-500 border-spacing-2 border p-5 text-white font-serif text-2xl"
            >
              Go shopping!
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}