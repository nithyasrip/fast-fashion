import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-[#ffffff]">
      <div>
        <h4 className="text-center text-black text-4xl mb-8">
          Click on a store to shop from
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-4 place-items-start gap-x-10">
        <button>
          <Link href="/21">
            <div className="p-8">
              <Image src="/21.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/adidas">
            <div className="p-8">
              <Image src="/adidas.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/americaneagle">
            <div className="p-8">
              <Image
                src="/americaneagle.png"
                alt="/"
                width={200}
                height={200}
              />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/zara">
            <div className="p-8">
              <Image src="/zara.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/depop">
            <div className="p-8">
              <Image src="/depop.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/h&m">
            <div className="p-8">
              <Image src="/h&m.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/lulu">
            <div className="p-8">
              <Image src="/lulu.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/nike">
            <div className="p-8">
              <Image src="/nike.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/stitchfix">
            <div className="p-8">
              <Image src="/stitchfix.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/patagonia">
            <div className="p-8">
              <Image src="/patagonia.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/shein">
            <div className="p-8">
              <Image src="/shein.png" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
        <button>
          <Link href="/savers">
            <div className="p-">
              <Image src="/savers.jpeg" alt="/" width={200} height={200} />
            </div>
          </Link>
        </button>
      </div>
    </main>
  );
}
