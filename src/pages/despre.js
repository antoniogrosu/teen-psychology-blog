import Link from "next/link";

function About() {
  return (
    <div className="mt-16 bg-orange-200 px-4 py-20 md:px-24 md:py-20">
      <h1 className="text-3xl urbanist font-bold text-brown mb-2">
        Bravo, ai trecut testul!
      </h1>
      <h2 className="text-lg urbanist font-semibold text-brown">
        {" "}
        Cum adica? Ce test?
      </h2>
      <p className="urbanist font-normal text-brown text-md mt-4">
        Pai, ai facut primul pas, stii cat de putini oameni sunt la fel de
        curiosi si motivati sa faca aceasta schimbare in viata lor?
        <br />
        Acum chiar vad ca esti interesat/a sa te dezvolti pe plan personal si ca
        vrei chiar <span className="font-bold">ACUM</span> sa te descoperi si sa
        evoluezi!
      </p>
      <p className="md:text-left text-center urbanist  text-2xl font-semibold text-brown text-md mt-16 mb-4">
        Stiu ca inca te intrebi cum vei face toate acestea, dar in mai putin de
        <br />
        <span className="underline underline-offset-4 mr-1">
          {" "}
          60 de secunde
        </span>{" "}
        vei intelege ce oferim.
      </p>
      <ul className="my-8 text-center  md:text-left md:border-y-0 urbanist mb-4 flex flex-col md:gap-4 text-lg  border-y-4 rounded-2xl gap-6 md:border-l-4 border-brown/20 md:rounded-lg py-4 px-6">
        <li>
          Content educativ despre cele mai intalnite probleme din viata
          adolescentiilor
        </li>
        <li>
          Solutia la 90% dintre <br className="md:hidden" />
          <span className=" font-semibold px-2 py-1 bg-brown/20 rounded-md mr-2 ml-2">
            PROBLEMELE TALE
          </span>
        </li>
        <li>
          Sansa de a face parte dintr-o{" "}
          <span className="font-semibold px-2 py-1 bg-brown/20 rounded-md mr-2 ml-2">
            COMUNITATE
          </span>{" "}
          exclusiva{" "}
        </li>
        <li>
          <span className="font-semibold px-2 py-1 bg-brown/20 rounded-md mr-2">
            GARANTIA
          </span>{" "}
          ca te vei cunoaste si ca vei evolua
        </li>
      </ul>
      <p className="md:text-left text-center urbanist font-normal text-brown text-md mt-4x text-lg">
        Suna bine? Ti se pare interesant? <br />
        <span className="font-bold mt-2">
          Nu uita ca tot ce am precizat este 100% GRATIS!
        </span>
        <br />
      </p>
      <p className="font-bold urbanist text-2xl mt-16">
        Tot ce trebuie sa faci este sa vrei sa te cunosti, noi ne ocupam de
        restul!🤗
      </p>
    </div>
  );
}
export default About;
