import React, { useRef, useEffect, useState } from "react";
import Title from "../componant/Title";
import ContactData from "./Data.json";
import Contact from "./Contact";

export default function FilterContact() {
  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  },[]);
  console.log(inputSearch);
  const [searchable, setSearchable] = useState("");

  return (
    <div className="text-center">
      <Title text={"Filter Contacts"} />
      <input
        type="text"
        placeholder="Search by First"
        className="mb-2"
        style={{ padding: ".3rem .5rem " }}
        ref={inputSearch}
        onChange={(e)=>setSearchable(e.target.value)}
      />
      <section
        className="d-flex"
        style={{ gap: 15, maxWidth: 1600, margin: "auto", flexWrap: "wrap" }}
      >
        {ContactData.filter((contact) => {
          if (searchable === "") {
            return contact;
          }
          if (
            contact.first_name.toLowerCase().includes(searchable.toLowerCase())
          ) {
            return contact;
          }
        }).map((contact) => (
          <Contact contact={contact} cardColor={"card-danger"} />
        ))}
      </section>
    </div>
  );
}
