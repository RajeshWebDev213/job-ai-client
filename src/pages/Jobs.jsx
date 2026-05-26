// src/pages/Jobs.jsx

import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

import {
  Search,
  MapPin,
} from "lucide-react";

// Logos
import googleLogo from "../assets/google.png";
import amazonLogo from "../assets/amazon.png";
import microsoftLogo from "../assets/microsoft.png";
import netflixLogo from "../assets/netflix.png";
import metaLogo from "../assets/meta.png";

// Jobs Data
const jobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    company: "Google",
    logo: googleLogo,
    type: "Full Time",
    location: "Hyderabad",
    salary: "10 LPA",
    experience: "1+ Years",
  },

  {
    _id: "2",
    title: "MERN Stack Developer",
    company: "Amazon",
    logo: amazonLogo,
    type: "Remote",
    location: "Bangalore",
    salary: "12 LPA",
    experience: "2+ Years",
  },

  {
    _id: "3",
    title: "Backend Developer",
    company: "Microsoft",
    logo: microsoftLogo,
    type: "Hybrid",
    location: "Chennai",
    salary: "15 LPA",
    experience: "2+ Years",
  },

  {
    _id: "4",
    title: "UI/UX Designer",
    company: "Netflix",
    logo: netflixLogo,
    type: "Full Time",
    location: "Mumbai",
    salary: "18 LPA",
    experience: "3+ Years",
  },

  {
    _id: "5",
    title: "Data Scientist",
    company: "Meta",
    logo: metaLogo,
    type: "Remote",
    location: "Pune",
    salary: "20 LPA",
    experience: "2+ Years",
  },

  {
    _id: "6",
    title: "React Developer Intern",
    company: "Google",
    logo: googleLogo,
    type: "Internship",
    location: "Delhi",
    salary: "6 LPA",
    experience: "Fresher",
  },

  {
    _id: "7",
    title: "Full Stack Developer",
    company: "Amazon",
    logo: amazonLogo,
    type: "Remote",
    location: "Work From Home",
    salary: "14 LPA",
    experience: "3+ Years",
  },

  {
    _id: "8",
    title: "Node.js Developer",
    company: "Microsoft",
    logo: microsoftLogo,
    type: "Remote",
    location: "Remote",
    salary: "16 LPA",
    experience: "2+ Years",
  },

  {
    _id: "9",
    title: "React Native Developer",
    company: "Meta",
    logo: metaLogo,
    type: "Remote",
    location: "Anywhere in India",
    salary: "17 LPA",
    experience: "2+ Years",
  },
];

export default function Jobs() {

  // States
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  // Filter Logic
  const filteredJobs = jobs.filter((job) => {

    const matchesFilter =
      filter === "All"
        ? true
        : job.type === filter;

    const matchesSearch =
      job.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      job.company
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesLocation =
      job.location
        .toLowerCase()
        .includes(location.toLowerCase());

    return (
      matchesFilter &&
      matchesSearch &&
      matchesLocation
    );
  });

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="bg-[#f8fafc] py-12 border-b border-gray-100">

        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#ede9fe] text-[#5b4df5] px-4 py-2 rounded-full text-sm font-medium mb-5">

            Discover New Opportunities
          </div>

          {/* Heading */}
          <h1 className="text-[48px] leading-[58px] font-bold text-gray-900">

            Find Jobs from
            <br />

            Top Companies
          </h1>

          {/* Description */}
          <p className="mt-5 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">

            Explore thousands of jobs tailored to
            your skills, experience, and career goals.
          </p>

          {/* Search Box */}
          <div className="mt-8 bg-white rounded-2xl shadow-sm p-4 flex flex-col md:flex-row gap-4 border border-gray-200 max-w-5xl mx-auto">

            {/* Search */}
            <div className="flex items-center flex-1 border border-gray-200 rounded-xl px-4 h-[54px]">

              <Search
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Job title or company"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full px-3 outline-none bg-transparent"
              />
            </div>

            {/* Location */}
            <div className="flex items-center flex-1 border border-gray-200 rounded-xl px-4 h-[54px]">

              <MapPin
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                className="w-full px-3 outline-none bg-transparent"
              />
            </div>

            {/* Button */}
            <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-8 h-[54px] rounded-xl font-semibold transition">

              Search
            </button>
          </div>
        </div>
      </section>

      {/* JOBS */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

            {/* Left */}
            <div>

              <h2 className="text-4xl font-bold text-gray-900">

                Available Jobs
              </h2>

              <p className="text-gray-500 mt-3">

                Showing {filteredJobs.length} opportunities
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">

              {[
                "All",
                "Full Time",
                "Remote",
                "Internship",
              ].map((type, index) => (

                <button
                  key={index}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition ${
                    filter === type
                      ? "bg-[#5b4df5] text-white"
                      : "border border-gray-200 hover:border-[#5b4df5] hover:text-[#5b4df5]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredJobs.length > 0 ? (

              filteredJobs.map((job) => (
                <JobCard
                  key={job._id}
                  job={job}
                />
              ))

            ) : (

              <div className="col-span-full text-center py-20">

                <h3 className="text-3xl font-bold text-gray-800">

                  No Jobs Found
                </h3>

                <p className="text-gray-500 mt-4">

                  Try searching with different keywords.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}