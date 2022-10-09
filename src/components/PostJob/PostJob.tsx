import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import Select from "react-select";
function PostJob(props: any) {
  const options = [
    { value: "Full-time", label: "Full-time" },
    { value: "Part-time", label: "Part-time" },
    { value: "Freelancer", label: "Freelancer" },
    { value: "Remote", label: "Remote" },
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState("");
  const [company, setCompany] = useState({
    name: "",
    email: "",
    website: "",
  });
  const handleChange = (selectedOption: any) => {
    setType(selectedOption);
  };
  const submitJob = () => {
    setTitle("test job title");
    setDescription("test job description");
    setType("test job type");
    setLocation("test job location");
  };
  return (
    <div className="main bg-white px-6 md:px-16 py-6">
      <div className="w-full max-w-xl mx-auto">
        <form action="" method="post">
          <h1 className="text-2xl mb-2">Post new job</h1>

          <div className="job-info border-b-2 py-2 mb-5">
            {/* <!--    Title      --> */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Title</label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="email"
                id="job-title"
                name="job-title"
                placeholder="Frontend Developer"
                value={title}
                onChange={(e: any) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            {/* <!--     Link to apply     --> */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">
                Link to apply
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                type="email"
                id="apply-link"
                name="apply-link"
                placeholder="https://www.website.com/apply"
              />
            </div>

            <div className="md:flex md:justify-between">
              {/* <!--      Job Type      --> */}
              <div className="w-full md:w-3/12 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2">
                  Job Type
                </label>
                <div className="relative w-full">
                  <Select
                    options={options}
                    onChange={handleChange}
                    value={type}
                  />
                </div>
              </div>

              {/* <!--     Location       --> */}
              <div className="w-full md:w-8/12 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  id="location"
                  name="location"
                  placeholder="Schwerin"
                />

                <div>
                  <label className="text-gray-600 flex items-center">
                    <input
                      className="mr-2 leading-tight"
                      type="checkbox"
                      id="remote"
                    />
                    <span className="text-sm">Work can be done remotely</span>
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- end group --> */}

            {/* <!--    Description      --> */}
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Description
              </label>
              <textarea name="description" id="description"></textarea>
            </div>

            <div className="flex flex-wrap -mx-3">
              {/* <!--     Company       --> */}
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  id="company"
                  name="company"
                  placeholder="Company"
                />
              </div>

              {/* <!--      Company Website      --> */}
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2">
                  Company Website
                </label>
                <input
                  type="text"
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                  id="company"
                  name="company"
                  placeholder="https://www.djangoproject.com/"
                />
              </div>
            </div>
            {/* <!-- end group --> */}

            {/* <!--      Company Website      --> */}
            <div className="mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm mb-2">
                Logo Image
              </label>
              <input
                type="file"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="company-logo"
                name="company-logo"
              />
            </div>
          </div>
          {/* <!-- end job-info --> */}

          <div className="payment mb-6">
            <h4 className="mb-2">Payment</h4>
            <p className="bg-gray-200 py-3 text-center text-sm">
              <span>
                <i className="far fa-credit-card"></i>
              </span>
              All jobs cost <strong>€300</strong> for 30 days.
            </p>
          </div>

          {/* <!--     Submit     --> */}
          <div className="flex flex-wrap space-x-20">
            <button
              className="bg-teal-500  hover:bg-teal-600 text-white py-2  px-6 rounded"
              type="submit"
              onClick={() => submitJob}
            >
              Create job
            </button>
            <button
              className="bg-teal-500  hover:bg-teal-600 text-white py-2 px-6 rounded"
              onClick={() => props.setPostJob(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostJob;
