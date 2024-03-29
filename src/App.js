import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Why do we use it?",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    title: "Where does it come from?",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  },
];

export default function App() {
  return (
    <div className=" max-w-[300px] sm:max-w-lg mx-auto mt-10 ">
      {faqs.map((val) => (
        <Accordion key={val.id} {...val} />
      ))}
    </div>
  );
}

function Accordion({ id, title, description }) {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }

  return (
    <div
      className={`bg-white shadow-2xl  mb-4 ${
        open ? "border-t-4 border-teal-300" : ""
      }`}
    >
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={handleToggle}
      >
        <p
          className={`text-lg font-medium ${
            open ? "text-teal-700" : "text-slate-700"
          }`}
        >
          {title}
        </p>
        <span className="text-lg">{open ? "-" : "+"}</span>
      </div>
      {open && (
        <div className="mt-0 p-4 relative top-[-20px]">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
}
