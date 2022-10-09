import React, { useState } from "react";
import { addCompany, publishCompany } from "../../../lib/api";

interface CompanyProps {
  name: string;
  slug: string;
  email: string;
  website: string;
  logo: string;
}
function AddCompany(companyProps: any) {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [logo, setLogo] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();

    // reset error and message.
    setError("");
    setMessage("");

    if (name) {
      if (email) {
        let response = await addCompany({
          // add the note.
          name,
          email,
        });

        response = await publishCompany({
          // publish the note.
          id: response.id,
        });

        if (response) {
          // reset the fields
          setName("");
          setEmail("");
          setMessage("Company added successfully.");
          // append the note.
          companyProps.addCompany(response);
          // reset the show add note.
          companyProps.resetShowAddCompany();
        }
      } else {
        setError("Description is required");
      }
    } else {
      setError("Name is required");
    }
  };

  return <div>AddCompany</div>;
}

export default AddCompany;
