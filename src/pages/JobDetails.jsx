// src/pages/JobDetails.jsx

import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import googleLogo from "../assets/google.png";
import amazonLogo from "../assets/amazon.png";
import jobsdata from "./jobData";
import {
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
} from "lucide-react";

export default function JobDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobsdata.find((item) => item._id === id);

  if (!job) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">

            <h1 className="text-4xl font-bold">
              Job Not Found
            </h1>

            <button
              onClick={() => navigate("/jobs")}
              className="mt-6 bg-[#5b4df5] text-white px-6 py-3 rounded-lg"
            >
              Back to Jobs
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#f8fafc] min-h-screen py-10">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[2fr_1fr] gap-8">

          {/* LEFT SIDE */}
          <div>

            {/* Top Job Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">

              {/* Company */}
              <div className="flex items-start justify-between">

                <div className="flex gap-5">

                  {/* Logo */}
                  <div className="w-16 h-16 rounded-xl border border-gray-200 flex items-center justify-center bg-white">

                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Info */}
                  <div>

                    <h1 className="text-3xl font-bold text-gray-900">
                      {job.title}
                    </h1>

                    <p className="text-lg text-gray-600 mt-1">
                      {job.company}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">

                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.posted}</span>
                    </div>
                  </div>
                </div>

                {/* Apply */}
                <button className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-6 py-3 rounded-lg font-medium transition">
                  Apply Now
                </button>
              </div>

              {/* Salary */}
              <div className="mt-8 border-t pt-6">

                <p className="text-sm text-gray-500">
                  Salary Range
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-2">
                  {job.salary}
                </h3>
              </div>
            </div>

            {/* About Role */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mt-6">

              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                About the Role
              </h2>

              <p className="text-gray-700 leading-8">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mt-6">

              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Responsibilities
              </h2>

              <ul className="space-y-4">

                {job.responsibilities.map((item, index) => (

                  <li
                    key={index}
                    className="flex gap-3 text-gray-700"
                  >
                    <span className="text-[#5b4df5] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mt-6">

              <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Requirements
              </h2>

              <ul className="space-y-4">

                {job.requirements.map((item, index) => (

                  <li
                    key={index}
                    className="flex gap-3 text-gray-700"
                  >
                    <span className="text-[#5b4df5] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="sticky top-24">

              {/* Skills */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">

                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                  {job.skills.map((skill, index) => (

                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-6">

                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  About Company
                </h2>

                <p className="text-gray-600 leading-7 text-sm">
                  {job.company} is one of the leading technology companies
                  focused on building scalable products and innovative solutions.
                </p>

                <button className="mt-6 w-full border border-gray-300 py-3 rounded-lg font-medium hover:border-[#5b4df5] hover:text-[#5b4df5] transition">
                  View Company
                </button>
              </div>

              {/* Quick Apply */}
              <div className="bg-[#5b4df5] rounded-2xl p-6 mt-6 text-white">

                <h2 className="text-2xl font-bold">
                  Ready to Apply?
                </h2>

                <p className="mt-3 text-sm text-gray-200 leading-6">
                  Submit your application and start your career journey.
                </p>

                <button className="mt-6 w-full bg-white text-[#5b4df5] py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Related Jobs Section */}
<section className="bg-white py-16 border-t border-gray-200">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

      <div>
        <h2 className="text-3xl font-bold text-gray-900">
          Similar Jobs
        </h2>

        <p className="text-gray-500 mt-2">
          Explore more opportunities related to this role
        </p>
      </div>

      <button
        onClick={() => navigate("/jobs")}
        className="text-[#5b4df5] font-semibold hover:underline"
      >
        Browse All Jobs →
      </button>
    </div>

    {/* Related Jobs Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {jobsdata
        .filter((item) => item._id !== job._id)
        .map((relatedJob) => (

          <div
            key={relatedJob._id}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
          >

            {/* Top */}
            <div className="flex items-start justify-between">

              {/* Logo */}
              <div className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center bg-white">

                <img
                  src={relatedJob.logo}
                  alt={relatedJob.company}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Job Type */}
              <span className="bg-[#f3f0ff] text-[#5b4df5] text-xs px-3 py-1 rounded-full font-medium">
                {relatedJob.type}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mt-6 leading-8 group-hover:text-[#5b4df5] transition">
              {relatedJob.title}
            </h3>

            {/* Company */}
            <p className="text-gray-500 mt-2">
              {relatedJob.company}
            </p>

            {/* Info */}
            <div className="mt-5 space-y-3">

              {/* Location */}
         <div className="flex items-center gap-2 text-sm text-gray-500">

  <MapPin size={16} className="text-[#5b4df5]" />

  <span>{relatedJob.location}</span>
</div>

              {/* Experience */}
           <div className="flex items-center gap-2 text-sm text-gray-500">

  <BriefcaseBusiness
    size={16}
    className="text-[#5b4df5]"
  />

  <span>{relatedJob.experience}</span>
</div>

              {/* Salary */}
      <div className="flex items-center gap-2 text-sm text-gray-500">

  <IndianRupee
    size={16}
    className="text-[#5b4df5]"
  />

  <span>{relatedJob.salary}</span>
</div>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-5">

              {relatedJob.skills
                .slice(0, 3)
                .map((skill, index) => (

                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs"
                  >
                    {skill}
                  </span>
                ))}
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between mt-6">

              <span className="text-sm text-gray-400">
                Posted recently
              </span>

              <button
                onClick={() =>
                  navigate(`/jobs/${relatedJob._id}`)
                }
                className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-5 py-2 rounded-lg text-sm font-medium transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}