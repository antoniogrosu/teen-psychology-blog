import Image from "next/image";
import { useState } from "react";
function Section(props) {
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  const { subtitle, image, list, paragraphs } = props;
  return (
    <div className="my-16 urbanist text-brown">
      {typeof subtitle !== "undefined" && (
        <h1 className="text-2xl text-brown font-semibold mb-8">{subtitle}</h1>
      )}
      {image.length > 0 && (
        <Image
          alt="descriptive image"
          src={image}
          width={400}
          height={400}
          className="w-full mb-8"
        ></Image>
      )}
      {typeof list !== "undefined" && (
        <div>
          <h2 className="capitalize text-xl mt-8 md:text-left text-center font-semibold mb-4">
            {list.text}
          </h2>
          <ul className="capitalize mb-8 md:text-left md:border-y-0 flex flex-col md:gap-4  border-y-4 rounded-2xl gap-6 md:border-l-4 border-brown/20 md:rounded-lg py-4 px-6 text-center text-lg">
            {list.bullets.map((item) => (
              <li key={generateId()}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {typeof paragraphs !== "undefined" && (
        <div className="my-8">
          {paragraphs.map((item) => (
            <p key={generateId()} className="my-4">
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
export default Section;
