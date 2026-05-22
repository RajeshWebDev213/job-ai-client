// src/pages/Home.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";

import heroImg from "../assets/heroImg.png";

import googleLogo from "../assets/google.png";
import amazonLogo from "../assets/amazon.png";
import microsoftLogo from "../assets/microsoft.png";

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

      {/* Hero Section */}
      <section className="bg-[#f7f7ff] py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ede9fe] text-[#5b4df5] px-4 py-2 rounded-full text-sm font-medium mb-6">
              ✨ AI-Powered Job Matching
            </div>

            {/* Heading */}
            <h1 className="text-[64px] leading-[74px] font-bold text-[#0f172a]">
              Find Your Dream Job
              <br />
              with{" "}
              <span className="text-[#5b4df5]">
                AI-Powered
              </span>
              <br />
              Matching
            </h1>

            {/* Description */}
            <p className="mt-8 text-[22px] leading-[40px] text-[#475569] max-w-xl">
              Discover opportunities tailored to your skills
              and experience.
            </p>

            {/* Buttons */}
            <div className="flex gap-5 mt-10">

              <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-10 py-5 rounded-2xl text-lg font-semibold shadow-lg transition">
                Explore Jobs
              </button>

              <button className="border-2 border-[#5b4df5] text-[#5b4df5] hover:bg-[#ede9fe] px-10 py-5 rounded-2xl text-lg font-semibold transition">
                Post a Job
              </button>
            </div>

            {/* Search Box */}
            <div className="mt-14 bg-white rounded-[28px] shadow-xl p-5 flex flex-col md:flex-row gap-4 border border-[#ececff]">

              {/* Job Input */}
              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 border border-[#e5e7eb] rounded-2xl px-5 py-4 outline-none text-lg"
              />

              {/* Location Input */}
              <input
                type="text"
                placeholder="Location"
                className="flex-1 border border-[#e5e7eb] rounded-2xl px-5 py-4 outline-none text-lg"
              />

              {/* Search Button */}
              <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-10 py-4 rounded-2xl text-lg font-semibold transition">
                Search
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="flex justify-center relative">

  

            <img
              src={heroImg}
              alt="Hero"
              className="w-full max-w-[720px] animate-float"
            />
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-20 bg-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-[36px] font-bold text-[#0f172a] mb-14">
            Trusted by Top Companies
          </h2>

          {/* Moving Logos */}
          <div className="flex animate-marquee gap-8 w-max">

            {[
              "Google",
              "Microsoft",
              "Amazon",
              "Netflix",
              "Meta",
              "Apple",
            ].map((company, index) => (

              <div
                key={index}
                className="bg-white min-w-[220px] h-[110px] rounded-3xl shadow-md border border-[#ececff] flex items-center justify-center text-[28px] font-bold text-[#0f172a] hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-4xl font-bold text-[#0f172a]">
            Featured Jobs
          </h2>

          <button className="text-[#5b4df5] font-semibold text-lg hover:underline">
            View all jobs →
          </button>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {sampleJobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}