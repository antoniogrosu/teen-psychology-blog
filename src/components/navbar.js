import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const { data: session } = useSession();
  return (
    <div className="fixed top-0 w-full z-10">
      <Head>
        <link rel="icon" href="/Logo.svg"></link>
        <title>Teen Psychology</title>
      </Head>
      <nav className=" w-full bg-brown px-2 flex items-center justify-between md:px-20">
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
          {session && (
            <button
              onClick={() => signOut()}
              className="bg-gray-50 urbanist px-4 py-2 flex items-center justify-center text-gray-900 font-semibold ml-4 rounded-lg text-sm"
            >
              Deconectare
              <Image
                src="/google.svg"
                className="ml-3 object-fit"
                width={15}
                height={15}
                alt="google logo"
              ></Image>
            </button>
          )}
          {!session && (
            <button
              onClick={() => signIn()}
              className="bg-gray-50  urbanist px-4 py-2 flex items-center justify-center text-gray-900 font-semibold ml-4 rounded-lg"
            >
              Continua cu
              <Image
                src="/google.svg"
                className="ml-2"
                width={15}
                height={15}
                alt="google logo"
              ></Image>
            </button>
          )}
          {session && session.user.email == "aantoniogabriel23@gmail.com" && (
            <Link
              className="urbanist px-4 rounded-lg ml-4 bg-red-500 text-gray-50  py-1 font-semibold text-center"
              href="/admin"
            >
              Admin
            </Link>
          )}
        </div>
      </nav>
      {menu && (
        <div className="fixed right-0  bg-brown w-8/12 top-0 h-screen ">
          <div className="w-full bg-brown pl-2 pr-4 flex  items-center justify-between md:px-20">
            <nav className=" w-full px-2 flex items-center justify-between md:px-20">
              <div href="/" className="p-4 opacity-0">
                <Image
                  alt="Logo"
                  src="/Logo.svg"
                  className="object-fill"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <button
                className=" bg-orange-200 px-2 py-1 
          rounded-lg text-brown font-bold urbanist text-lg"
                onClick={() => setMenu(false)}
              >
                &#x2715;
              </button>
            </nav>
          </div>
          <div className="mt-12 w-full flex flex-col  fixed">
            <h1 className="pl-8 text-3xl font-semibold urbanist text-orange-200 mb-8 underline underline-offset-8">
              Paginile noastre
            </h1>
            <Link
              className="urbanist text-lg text-orange-200 border-t-2 py-4 px-8 w-full border-orange-200/20"
              href="/blog"
              onClick={() => {
                setMenu(false);
              }}
            >
              Blog
            </Link>
            <Link
              className="urbanist text-lg text-orange-200 border-t-2 py-4 px-8 w-full border-orange-200/20"
              href="/interviuri"
              onClick={() => setMenu(false)}
            >
              Interviuri
            </Link>
            <Link
              className="urbanist text-lg text-orange-200 border-t-2 py-4 px-8 w-full border-orange-200/20"
              href="/despre"
              onClick={() => setMenu(false)}
            >
              Despre Noi
            </Link>
            <Link
              className="urbanist text-lg text-orange-200 border-t-2 py-4 px-8 w-full border-orange-200/20"
              href="/contact"
              onClick={() => setMenu(false)}
            >
              Contact
            </Link>
            {session && session.user.email == "aantoniogabriel23@gmail.com" && (
              <Link
                className="urbanist text-lg bg-red-500 text-gray-50 font-semibold py-4 w-full pl-8 border-orange-200/20"
                href="/admin"
                onClick={() => setMenu(false)}
              >
                Admin
              </Link>
            )}
            {session && (
              <div className="mt-12 w-full pl-8">
                <h1 className="text-3xl font-semibold urbanist text-orange-200 mb-8 underline underline-offset-8">
                  Iesi din cont
                </h1>
                <button
                  onClick={() => signOut()}
                  className="px-6 flex items-center justify-center urbanist py-4 font-semibold text-brown bg-gray-50 rounded-lg text-xl"
                >
                  Deconectare
                  <Image
                    src="/google.svg"
                    className="ml-3 object-fit"
                    width={25}
                    height={25}
                    alt="google logo"
                  ></Image>
                </button>
              </div>
            )}
            {!session && (
              <div className="mt-12 w-full pl-8">
                <h1 className="text-3xl font-semibold urbanist text-orange-200 mb-8 underline underline-offset-8">
                  Intra in cont
                </h1>
                <button
                  onClick={() => signIn()}
                  className="px-4 flex items-center justify-center urbanist py-4 font-semibold text-brown bg-gray-50 rounded-lg text-xl"
                >
                  Continua cu
                  <Image
                    src="/google.svg"
                    className="ml-6 object-fit"
                    width={25}
                    height={25}
                    alt="google logo"
                  ></Image>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
