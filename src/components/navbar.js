import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="w-full bg-brown px-2 flex items-center justify-between md:px-20">
        <Link href="/" className="p-4">
          <Image
            alt="Logo"
            src="/Logo.svg"
            className="object-fill"
            width={40}
            height={40}
          ></Image>
        </Link>
        <div
          className=" md:hidden w-2/12 flex flex-col items-center gap-1"
          onClick={() => setMenu(true)}
        >
          <div className="pt-1  bg-orange-200 w-1/2   rounded-full"></div>
          <div className="pt-1  bg-orange-200 w-1/2  rounded-full"></div>
          <div className="pt-1  bg-orange-200 w-1/2  rounded-full"></div>
        </div>
        <div className="hidden md:flex justify-around items-center urbanist text-orange-200 text-sm">
          <Link href="/blog">Blog</Link>
          <Link href="/interviuri" className="ml-4">
            Interviuri
          </Link>
          <Link
            href="/cont"
            className=" border-2 border-orange-200 px-3 py-1 text-orange-200 font-bold ml-4 rounded-lg"
          >
            Contul meu
          </Link>
        </div>
      </nav>
      {menu && (
        <div className="absolute bg-brown w-full top-0 h-full">
          <nav className="w-full bg-brown pl-2 pr-4 flex items-center justify-between md:px-20">
            <Link href="/" className="p-4">
              <Image
                alt="Logo"
                src="/Logo.svg"
                className="object-fill"
                width={40}
                height={40}
              ></Image>
            </Link>
            <button
              className=" bg-orange-200 px-2 py-1 
          rounded-lg text-brown font-bold urbanist text-lg"
              onClick={() => setMenu(false)}
            >
              &#x2715;
            </button>
          </nav>
          <div className="w-full p-6 flex flex-col items-center justify-center fixed">
            <Link
              className="urbanist text-lg text-orange-200 border-t-2 py-4 w-full text-center border-orange-200/20"
              href="/blog"
              onClick={() => {
                setMenu(false);
              }}
            >
              Blog
            </Link>
            <Link
              className="urbanist text-lg text-orange-200 border-t-2 py-4 w-full text-center border-orange-200/20"
              href="/interviuri"
              onClick={() => setMenu(false)}
            >
              Interviuri
            </Link>
            <Link
              className="urbanist text-lg text-orange-200 border-t-2 py-4 w-full text-center border-orange-200/20"
              href="/despre"
              onClick={() => setMenu(false)}
            >
              Despre Noi
            </Link>
            <Link
              className="urbanist text-lg text-orange-200 border-y-2 py-4 w-full text-center border-orange-200/20"
              href="/contact"
              onClick={() => setMenu(false)}
            >
              Contact
            </Link>
            <div className="mt-12 w-full">
              <h1 className="text-3xl font-semibold urbanist text-orange-200 mb-8 underline underline-offset-8">
                Intra in cont
              </h1>
              <input
                type="text"
                className=" w-full bg-orange-200/30 rounded-md h-12 indent-4 placeholder:text-orange-200/80 placeholder:urbanist"
                placeholder="Adresa Email"
              ></input>
              <input
                type="password"
                className="mt-4 w-full  bg-orange-200/30 rounded-md h-12 indent-4 placeholder:text-orange-200/80 placeholder:urbanist"
                placeholder="Parola"
              ></input>
              <div className="w-full mt-6 flex justify-start items-center">
                <button className="px-6 py-2 font-semibold text-brown bg-gray-50 rounded-lg ">
                  Logare
                </button>
                <p className="ml-4 text-md text-gray-50 urbanist">sau</p>
                <Link
                  href="/cont"
                  className="text-gray-50 underline urbanist underline-offset-4 font-semibold ml-4 text-lg"
                >
                  Creare cont
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Navbar;
