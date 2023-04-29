import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Image } from "next/image";
import Section from "@/components/section";

function postForm() {
  //key prop
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  //pentru partea de continut extern
  const title = useRef();
  const image = useRef();
  const id = useRef();
  const short = useRef();
  const router = useRouter();
  const [externalForm, setExternalForm] = useState(true);

  //data din db
  const [data, setData] = useState();

  //date noi
  const [newData, setNewData] = useState({});

  //array-ul cu sectiuni
  const [sections, setSections] = useState([]);

  //form-ul pt sectiuni
  const [sectionsForm, setSectionsForm] = useState(false);

  //pentru partea de sectiuni
  const subtitle = useRef();
  const subImage = useRef();
  const listTitle = useRef();
  const [p, setP] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const [bullet, setBullet] = useState("");
  const [bullets, setBullets] = useState([]);
  const [list, setList] = useState({});

  //functia de fetching din db
  async function getData() {
    const res = await fetch(
      "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data.json"
    );
    const data = await res.json();
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  //functia pentru postare
  function sendData() {
    const submitting = {
      ...data,
      blogs: [
        ...data.blogs,
        {
          id: newData.id,
          title: newData.title,
          short: newData.short,
          image: newData.image,
          sections: newData.sections,
        },
      ],
    };
    fetch(
      "https://blog-d9dcf-default-rtdb.europe-west1.firebasedatabase.app/data.json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitting),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {})
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
    router.push(`/blog/${newData.id}`);
  }

  //salveaza continut extern
  function submitFirst(event) {
    event.preventDefault();
    setNewData({
      title: title.current.value,
      image: image.current.value,
      id: id.current.value,
      short: short.current.value,
      sections: sections,
    });
    setExternalForm(false);
  }
  //salveaza sectiuni
  function submitSeconds() {
    setNewData({ ...newData, sections: sections });
    setSectionsSetter(false);
  }

  //form state change pentru sectiuni
  function toggleSectionForm() {
    setSectionsForm((form) => !form);
  }
  const [sectionsSetter, setSectionsSetter] = useState(true);

  //salveaza sectiunea curenta
  function saveCurrentSection() {
    setSections([
      ...sections,
      {
        subtitle: subtitle.current.value,
        image: subImage.current.value,
        paragraphs: paragraphs,
        list: list,
      },
    ]);
    setSectionsForm(false);
  }

  //adauga paragraf in array
  function addParagraph() {
    setParagraphs([...paragraphs, p]);
  }

  //adauga bullet in array
  function addBullet() {
    setBullets([...bullets, bullet]);
    setList({ text: listTitle.current.value, bullets: bullets });
  }
  return (
    <div className="bg-brown rounded-md p-8 rounde">
      <h1 className="urbanist text-4xl text-gray-50 mb-8 font-semibold">
        Creeaza Postare
      </h1>
      <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-8 md:gap-0">
        {externalForm && (
          <form
            className="w-full md:w-5/12 bg-orange-200/10 p-4 rounded-sm"
            onSubmit={submitFirst}
          >
            <h1 className="urbanist text-gray-50 mb-4 text-2xl font-semibold">
              Continut Extern
            </h1>
            <input
              type="text"
              ref={title}
              placeholder="titlu"
              className="w-full block mb-4 text-gray-50 indent-4 rounded-lg h-8 placeholder:urbanist urbanist bg-orange-200/30 placeholder:text-orange-200/80"
            ></input>
            <input
              type="text"
              ref={image}
              placeholder="url imagine"
              className="w-full block mb-4 text-gray-50 indent-4 rounded-lg h-8 placeholder:urbanist urbanist bg-orange-200/30 placeholder:text-orange-200/80"
            ></input>
            <input
              type="text"
              ref={short}
              placeholder="short"
              className="w-full mb-4 text-gray-50 block indent-4 rounded-lg h-8 placeholder:urbanist urbanist bg-orange-200/30 placeholder:text-orange-200/80"
            ></input>
            <input
              type="text"
              ref={id}
              placeholder="link"
              className="w-full text-gray-50 12 block indent-4 rounded-lg h-8 placeholder:urbanist urbanist bg-orange-200/30 placeholder:text-orange-200/80"
            ></input>
            <button className="font-semibold px-4 py-2 bg-orange-200/60 mt-8 w-full urbanist text-gray-50 rounded-sm">
              Salveaza continutul extern
            </button>
          </form>
        )}
        {sectionsSetter && (
          <div className="md:w-6/12 bg-orange-200/10 p-4 rounded-sm">
            <div className="flex items-center  justify-between">
              <h1 className="urbanist text-gray-50 mb-4 text-2xl font-semibold">
                Sectiuni
              </h1>
              <button
                onClick={toggleSectionForm}
                className="border-2 border-orange-200/80 urbanist text-sm text-gray-50 px-4 py-2 rounded-lg"
              >
                Adauga Sectiune
              </button>
            </div>
            {sectionsForm && (
              <form className="w-full mt-4" onSubmit={saveCurrentSection}>
                <input
                  type="text"
                  ref={subtitle}
                  placeholder="subtitlu"
                  className="mb-4 text-gray-50 block indent-4 rounded-lg h-8 placeholder:urbanist urbanist bg-orange-200/30 placeholder:text-orange-200/80"
                ></input>
                <input
                  type="text"
                  ref={subImage}
                  placeholder="imagine"
                  className="mb-4 text-gray-50 12 block indent-4 rounded-lg h-8 placeholder:urbanist urbanist bg-orange-200/30 placeholder:text-orange-200/80"
                ></input>
                <textarea
                  onChange={(e) => {
                    setP(e.target.value);
                  }}
                  value={p}
                  className="w-full h-24 rounded-lg text-gray-50 p-4 bg-orange-200/30 urbanist placeholder:text-orange-200/80"
                  placeholder="paragraf"
                ></textarea>
                <button
                  type="button"
                  onClick={addParagraph}
                  className="ml-8 block px-4 mb-4 mt-2 urbanist font-semibold text-gray-50 py-1 rounded-md bg-orange-200/30 border-2 border-orange-200"
                >
                  + paragraf
                </button>
                <input
                  type="text"
                  ref={listTitle}
                  placeholder="titlu lista"
                  className="mb-4 text-gray-50 12 block indent-4 rounded-lg h-8 placeholder:urbanist urbanist bg-orange-200/30 placeholder:text-orange-200/80"
                ></input>
                <textarea
                  onChange={(e) => {
                    setBullet(e.target.value);
                  }}
                  value={bullet}
                  className="w-full h-24 rounded-lg text-gray-50 p-4 bg-orange-200/30 urbanist placeholder:text-orange-200/80"
                  placeholder="paragraf"
                ></textarea>
                <button
                  type="button"
                  onClick={addBullet}
                  className="ml-8 block px-4 mt-2 urbanist font-semibold text-gray-50 py-1 rounded-md bg-orange-200/30 border-2 border-orange-200"
                >
                  + bullet
                </button>
                <button
                  onClick={saveCurrentSection}
                  type="button"
                  className="px-4 py-2 bg-orange-200/60 mt-8 urbanist text-gray-50 rounded-sm"
                >
                  Salveaza Sectiunea
                </button>
              </form>
            )}
            {!sectionsForm && (
              <button
                type="button"
                onClick={submitSeconds}
                className="w-full font-semibold px-4 py-2 bg-orange-200/60 mt-8 urbanist text-gray-50 rounded-sm"
              >
                Salveaza Sectiunile ( {sections.length} total)
              </button>
            )}
          </div>
        )}
      </div>
      <button
        onClick={sendData}
        className="mt-8 flex items-center justify-around px-6 py-2 bg-gray-50 text-brown rounded-xl urbanist font-semibold"
      >
        <p className="mr-2">Posteaza</p>
        <img src="/adminPost.svg"></img>
      </button>
    </div>
  );
}
export default postForm;
