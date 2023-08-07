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
          Patagonia
        </button>
      </div>
      <button className="bg-white rounded-lg mt-[-50px]">
        <div className="text-center text-yellow-900 text-2xl font-serif max-w-lg px-4 pb-4">
        Good choice! Since 87% of Patagonia products are made with recycled materials, and they continue to improve on this and they are transparent about it, its pretty easy to call them one of the most sustainable outdoor apparel brands when it comes to their materials.
        </div>
      </button>
      <div className="mt-4">
        <div className="flex flex-col items-center">
          <Link href="https://www.patagonia.com/shop/clothing-gear/?s_kwcid=17928&utm_source=google&utm_medium=cpc&utm_campaign=Brand+Core&gclid=Cj0KCQjwib2mBhDWARIsAPZUn_mywEmTsMA-1sTYMpfipvWjjl5NwXzJcD6q27JkyGQv98QYqEQu2mQaApE2EALw_wcB">
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