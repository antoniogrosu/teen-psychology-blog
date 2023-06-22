import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Image } from "next/image";
import Section from "src/components/section";

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

  //form-ul pt sectiuni
  const [sectionsForm, setSectionsForm] = useState(false);

  const [p, setP] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

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
      interviews: [
        ...data.interviews,
        {
          id: newData.id,
          title: newData.title,
          short: newData.short,
          image: newData.image,
          paragraphs: newData.paragraphs,
          comments: newData.comments,
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
    router.push(`/interviuri/${newData.id}`);
  }

  //salveaza continut extern
  function submitFirst(event) {
    event.preventDefault();
    setNewData({
      title: title.current.value,
      image: image.current.value,
      id: id.current.value,
      short: short.current.value,
      paragraphs: paragraphs,
      comments: [],
    });
    setExternalForm(false);
  }
  //salveaza sectiuni
  function submitSeconds() {
    setNewData({ ...newData, paragraphs: paragraphs });
    setSectionsSetter(false);
  }

  //form state change pentru sectiuni
  function toggleSectionForm() {
    setSectionsForm((form) => !form);
  }
  const [sectionsSetter, setSectionsSetter] = useState(true);

  //adauga paragraf in array
  function addParagraph() {
    setParagraphs([...paragraphs, p]);
  }
  return (
    <div className="bg-brown rounded-md p-8">
      <h1 className="urbanist text-2xl text-gray-50 mb-8 font-semibold">
        Creeaza Interviu
      </h1>
      <div className="flex md:items-center md:justify-between md:flex-row flex-col gap-8 md:gap-0">
        {externalForm && (
          <form
            className="w-full md:w-5/12 bg-orange-200/10 p-4 rounded-sm"
            onSubmit={submitFirst}
          >
            <h1 className="urbanist text-gray-50 mb-4 text-xl font-semibold">
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
              <h1 className="urbanist text-gray-50 mb-4 text-xl font-semibold">
                Paragrafe
              </h1>
              <button
                onClick={toggleSectionForm}
                className="border-2 border-orange-200/80 urbanist text-sm text-gray-50 px-4 py-2 rounded-lg"
              >
                Adauga paragraf
              </button>
            </div>
            {sectionsForm && (
              <form className="w-full mt-4">
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
              </form>
            )}
            <button
              type="button"
              onClick={submitSeconds}
              className="w-full font-semibold px-4 py-2 bg-orange-200/60 mt-8 urbanist text-gray-50 rounded-sm"
            >
              Salveaza Paragrafele ( {paragraphs.length} total)
            </button>
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
