import Link from "next/link";
import Image from "next/image";
function Home() {
  return (
    <div className="mt-16 bg-orange-200 px-4 py-24 md:px-24 md:py-20">
      <div>
        <h1 className="text-3xl urbanist font-bold text-brown mb-8">
          Confruntă-te cu viața de adolescent azi{" "}
        </h1>
      </div>
      <div className="md:w-8/12 md:absolute md:left-80 md:flex md:justify-end md:top-32">
        <Image
          alt="psychology illustration"
          className="object-fill"
          src="/imagineHero.svg"
          width={400}
          height={400}
        ></Image>
      </div>
      <p className=" md:w-7/12 mt-8 urbanist font-normal text-brown text-md">
        Daca ai probleme legate de Anxietate, Depresie si lucruri asemenatoare,
        esti in locul potrivit. Hai sa aflam solutia impreuna !
      </p>
      <div className="flex items-center justify-around md:block w-full md:w-auto">
        <Link href="/blog" className="w-1/2 md:w-auto">
          <button className="w-11/12 px-6 py-2 md:w-auto mt-6 bg-brown rounded-lg border-2 border-brown text-gray-50 urbanist md:text-sm">
            Vezi Postarile
          </button>
        </Link>
        <Link href="/despre" className="w-1/2 md:w-auto">
          <button className="px-6 w-11/12 ml-4 md:w-auto py-2 mt-6 bg-transparent border-2 border-brown rounded-lg text-brown urbanist font-semibold md:text-sm">
            Afla mai multe
          </button>
        </Link>
      </div>
      <div className="mt-28">
        <h1 className="text-3xl urbanist font-bold text-brown mb-8">
          Primul pas este cunoasterea
        </h1>
        <p className="w-full mt-4 urbanist font-normal mb-4 text-brown text-md ">
          Iti e frica ca nu exista solutii?
        </p>{" "}
        <p className=" w-full mt-4 urbanist font-normal mb-4 ntext-brown text-md ">
          Te ai gandit vreodata ca poate solutia problemelor tale este mai
          logica si mai aproape de tine decat crezi?
        </p>
        <p className=" w-full mt-4 urbanist font-normal mb-4 text-brown text-md ">
          Daca nu, stai linistit/a, lasa-ma sa iti explic. Este complet normal
          si firesc sa complicam aproape totul din viata noastra, iar tocmai
          asta e problema adevarata.
        </p>
        <p className=" w-full mt-4 urbanist font-normal mb-4 text-brown text-md ">
          Noi, oamenii, gandim non stop si filtram informatiile in functie de ce
          cunoastem si de consideram ca este adevarat. Dar putini inteleg acest
          lucru!{" "}
        </p>
        <p className=" w-full mt-4 urbanist font-normal mb-4 text-brown text-md ">
          {" "}
          <span className="font-bold text-2xl">STAI ,</span> dar asta inseamna
          ca simpla cunoastere poate rezolva MAJORITATEA problemelor mele?
        </p>
        <p className=" w-full mt-4 urbanist font-normal mb-4 text-brown text-md ">
          Nu ne crezi? Ne asteptam la asta, asa cum am spus mai sus, solutia
          noastra pentru tine pare totusi cam simpla, iar tu o complici fara
          sa-ti dai seama. Asa te-ai obisnuit!
        </p>
        <p className="md:text-left text-center urbanist font-bold text-2xl mt-16">
          Dar, daca ai putea sa . . .
        </p>
        <ul className="text-center urbanist md:text-left md:border-y-0 mt-4 flex flex-col md:gap-4 text-lg  border-y-4 rounded-2xl gap-6 md:border-l-4 border-brown/20 md:rounded-lg py-4 px-6">
          <li>Renunti la obisnuinta asta</li>
          <li>
            Gasesti{" "}
            <span className="font-semibold px-2 py-1 bg-brown/20 rounded-md mr-2 ml-2">
              SOLUTIA
            </span>{" "}
            la orice problema
          </li>
          <li>
            Te dezvolti pe plan personal prin{" "}
            <span className="font-semibold px-2 py-1 bg-brown/20 rounded-md mr-2 ml-2">
              CUNOASTERE
            </span>
          </li>
          <li>
            Sa explorezi o multime de idei si de informatii
            <span className="font-semibold px-2 py-1 bg-brown/20 rounded-md mr-2 ml-2">
              {" "}
              NOI
            </span>
          </li>
        </ul>
        <p className="urbanist font-bold text-2xl mt-16">
          Daca ai putea sa faci toate astea, le-ai face? Ai porni in aceasta
          calatorie?
        </p>
        <p className=" w-full mt-4 urbanist font-normal">
          Daca da, iti uram bun venit pe cea mai noua si completa platforma in
          care totul este despre noi! <br /> Noi, cei care ne dorim mai mult
          decat altii!
        </p>
      </div>
    </div>
  );
}
export default Home;
