function Contact() {
  return (
    <div className="mt-16 bg-orange-200 px-4 py-20 md:px-24 md:py-20">
      <h1 className="text-3xl urbanist font-bold text-brown mb-8">
        Imi poti scrie un email, iar eu voi reveni cu un raspuns cat mai repede
        posibil!
      </h1>
      <p className="urbanist tetx-brown text-md mt-4">
        Sunt aici pentru a raspunde oricarui scop care ma priveste,
        <br className="hidden md:block" /> inclusiv Feedback-uri sau Potentiale
        Colaborari!
      </p>
      <form className="mt-16">
        <h2 className="text-md  urbanist text-brown font-semibold">
          Completeaza campurile necesare pentru a trimimte email-ul tau:
        </h2>
        <input
          type="text"
          className="block  w-full bg-brown/20 md:w-5/12 mt-4 rounded-md h-12 indent-4 placeholder:text-brown placeholder:urbanist"
          placeholder="Adresa Email"
        ></input>
        <textarea
          type="text"
          className="resize-none w-full bg-brown/20 md:w-5/12 mt-4 rounded-md h-56 p-4 placeholder:text-brown placeholder:urbanist"
          placeholder="Mesajul tau"
        ></textarea>
        <button className="block px-8 py-2 font-semibold text-sm mt-4 text-gray-50 bg-brown rounded-lg ">
          Trimite email-ul
        </button>
      </form>
    </div>
  );
}
export default Contact;
