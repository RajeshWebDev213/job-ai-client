// src/pages/Home.jsx

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

import heroImg from "../assets/heroImg.png";

import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/microsoft.png";
import amazonLogo from "../assets/amazon.png";
import netflixLogo from "../assets/netflix.png";
import metaLogo from "../assets/meta.png";
import appleLogo from "../assets/apple.png";

const companyLogos = [
  googleLogo,
  microsoftLogo,
  amazonLogo,
  netflixLogo,
  metaLogo,
  appleLogo,
];

const sampleJobs = [
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
];

export default function Home() {

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#f8fafc] overflow-hidden pt-12 pb-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] text-[#5b4df5] px-4 py-2 rounded-full text-sm font-medium mb-6">
              AI-Powered Job Matching
            </div>

            {/* Heading */}
            <h1 className="text-[52px] leading-[62px] font-bold text-gray-900">

              Find Your Dream Job
              <br />

              with Smart AI Matching
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">

              Discover opportunities tailored to your skills,
              experience, and career goals.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <Link to="/jobs">

                <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-7 py-3.5 rounded-xl font-semibold transition">
                  Explore Jobs
                </button>
              </Link>

              <button className="border border-gray-300 hover:border-[#5b4df5] hover:text-[#5b4df5] px-7 py-3.5 rounded-xl font-semibold transition">
                Post a Job
              </button>
            </div>

            {/* Search Box */}
            <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 shadow-sm">

              {/* Job Input */}
              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 w-full border border-gray-200 rounded-xl px-5 h-[56px] outline-none"
              />

              {/* Location */}
              <input
                type="text"
                placeholder="Location"
                className="flex-1 w-full border border-gray-200 rounded-xl px-5 h-[56px] outline-none"
              />

              {/* Button */}
              <button className="w-full md:w-auto bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-8 h-[56px] rounded-xl font-semibold transition">
                Search
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">

            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-w-[560px]"
            />
          </div>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="bg-white py-10 overflow-hidden border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-8">

            <h2 className="text-2xl font-bold text-gray-900">
              Trusted by Top Companies
            </h2>
          </div>

          {/* Marquee */}
          <div className="overflow-hidden">

            <div className="flex animate-marquee whitespace-nowrap">

              {[...companyLogos, ...companyLogos].map((logo, index) => (

                <div
                  key={index}
                  className="bg-white min-w-[170px] h-[75px] border border-gray-200 rounded-2xl flex items-center justify-center mx-3 hover:shadow-md transition"
                >
                  <img
                    src={logo}
                    alt="logo"
                    className="h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR CATEGORIES */}
      <section className="bg-[#f8fafc] py-16">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="mb-10">

            <h2 className="text-3xl font-bold text-gray-900">
              Popular Categories
            </h2>

            <p className="text-gray-500 mt-2">
              Explore jobs by category
            </p>
          </div>

          {/* Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Frontend Development",
              "Backend Development",
              "UI/UX Design",
              "AI & Machine Learning",
              "DevOps",
              "Mobile Development",
              "Data Science",
              "Cloud Engineering",
            ].map((category, index) => (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {category}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  120+ Jobs Available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

            <div>

              <h2 className="text-4xl font-bold text-gray-900">
                Featured Jobs
              </h2>

              <p className="text-gray-500 mt-3">
                Find the latest opportunities from top companies
              </p>
            </div>

            <Link to="/jobs">

              <button className="text-[#5b4df5] font-semibold hover:underline">
                View All Jobs →
              </button>
            </Link>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {sampleJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f8fafc] py-20 border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose JobAI
            </h2>

            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Find jobs faster with AI-powered matching
              and smart recommendations.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Feature */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                AI Matching
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Get personalized job recommendations based on your skills.
              </p>
            </div>

            {/* Feature */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                Top Companies
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Connect with leading tech companies worldwide.
              </p>
            </div>

            {/* Feature */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                Fast Hiring
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
                Apply instantly and track applications in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

    

      {/* Footer */}
      <Footer />
    </>
  );
}