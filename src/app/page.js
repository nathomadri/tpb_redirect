import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-white text-black">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h1 className="text-3xl sm:text-7xl font-bold mb-4 text-center uppercase leading-tighttracking-tight">
          Visit ThePitchBasket - New Look, New Experience
        </h1>
        <Link href="https://thepitchbasket.co.ke" passHref>
          <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 text-base sm:text-lg h-12 px-6 gap-2 cursor-pointer">
            Take me there please <ArrowRight size={20} />
          </button>
        </Link>
        <h2 className="text-lg sm:text-3xl font-bold mb-4 text-center">
          Made for bettors
        </h2>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://thepitchbasket.co.ke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          ThePitchBasket
        </a>
      </footer>
    </div>
  );
}
