// src/pages/ApplyJob.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import {
  UploadCloud,
  BriefcaseBusiness,
  MapPin,
  Building2,
  IndianRupee,
  Clock3,
} from "lucide-react";

import jobsdata from "./jobData";

export default function ApplyJob() {

  const navigate = useNavigate();

  // Get Job ID
  const { id } = useParams();

  // Find Selected Job
  const job = jobsdata.find(
    (item) => item._id === id
  );

  // Form State
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  // Submit
  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phone ||
      !formData.experience ||
      !formData.resume
    ) {
      alert("Please fill all required fields");
      return;
    }

    alert("Application Submitted Successfully");

    navigate("/profile");
  };

  // Job Not Found
  if (!job) {

    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-gray-900">

              Job Not Found
            </h1>

            <button
              onClick={() => navigate("/jobs")}
              className="mt-8 bg-[#5b4df5] text-white px-8 h-[54px] rounded-xl font-semibold"
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
      {/* Navbar */}
      <Navbar />

      {/* Page */}
      <section className="bg-[#f8fafc] min-h-screen py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_420px] gap-8">

          {/* LEFT FORM */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10">

            {/* Heading */}
            <div>

              <h1 className="text-4xl font-bold text-gray-900">

                Apply for this Job
              </h1>

              <p className="text-gray-500 mt-3 text-lg">

                Submit your application details
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-7"
            >

              {/* Full Name */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-3">

                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullname: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-5 h-[58px] outline-none focus:border-[#5b4df5]"
                />
              </div>

              {/* Email */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-3">

                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-5 h-[58px] outline-none focus:border-[#5b4df5]"
                />
              </div>

              {/* Phone */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-3">

                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-5 h-[58px] outline-none focus:border-[#5b4df5]"
                />
              </div>

              {/* Experience */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-3">

                  Experience
                </label>

                <select
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      experience: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-5 h-[58px] outline-none focus:border-[#5b4df5]"
                >

                  <option value="">
                    Select experience
                  </option>

                  <option>Fresher</option>

                  <option>1+ Years</option>

                  <option>2+ Years</option>

                  <option>3+ Years</option>

                  <option>5+ Years</option>
                </select>
              </div>

              {/* Resume Upload */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-3">

                  Upload Resume
                </label>

                <label
                  htmlFor="resumeUpload"
                  className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-[#5b4df5] transition bg-[#fafafa]"
                >

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-[#ede9fe] flex items-center justify-center text-[#5b4df5] mb-5">

                    <UploadCloud size={30} />
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 font-semibold text-lg">

                    Click to upload resume
                  </p>

                  <p className="text-sm text-gray-400 mt-2">

                    PDF, DOC, DOCX (Max 5MB)
                  </p>

                  {/* File Name */}
                  {formData.resume && (

                    <p className="mt-5 text-[#5b4df5] font-medium">

                      {formData.resume.name}
                    </p>
                  )}
                </label>

                {/* Hidden Input */}
                <input
                  id="resumeUpload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      resume: e.target.files[0],
                    })
                  }
                />
              </div>

              {/* Cover Letter */}
              <div>

                <label className="block text-sm font-medium text-gray-700 mb-3">

                  Cover Letter
                </label>

                <textarea
                  rows="6"
                  placeholder="Write something about yourself..."
                  value={formData.coverLetter}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      coverLetter: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 outline-none resize-none focus:border-[#5b4df5]"
                ></textarea>
              </div>

              {/* Submit */}
              <button className="w-full bg-[#5b4df5] hover:bg-[#4f46e5] text-white h-[58px] rounded-xl font-semibold transition">

                Submit Application
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="sticky top-24 space-y-6">

              {/* Dynamic Job Info */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8">

                {/* Logo */}
                <div className="w-16 h-16 rounded-2xl border border-gray-200 flex items-center justify-center bg-white">

                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mt-6">

                  {job.title}
                </h2>

                {/* Company */}
                <p className="text-gray-500 mt-2 text-lg">

                  {job.company}
                </p>

                {/* Info */}
                <div className="mt-8 space-y-5">

                  {/* Type */}
                  <div className="flex items-center gap-3 text-gray-700">

                    <BriefcaseBusiness
                      size={18}
                      className="text-[#5b4df5]"
                    />

                    <span>{job.type}</span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 text-gray-700">

                    <MapPin
                      size={18}
                      className="text-[#5b4df5]"
                    />

                    <span>{job.location}</span>
                  </div>

                  {/* Salary */}
                  <div className="flex items-center gap-3 text-gray-700">

                    <IndianRupee
                      size={18}
                      className="text-[#5b4df5]"
                    />

                    <span>{job.salary}</span>
                  </div>

                  {/* Posted */}
                  <div className="flex items-center gap-3 text-gray-700">

                    <Clock3
                      size={18}
                      className="text-[#5b4df5]"
                    />

                    <span>{job.posted}</span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-[#5b4df5] rounded-3xl p-8 text-white">

                <h3 className="text-2xl font-bold">

                  Application Tips
                </h3>

                <ul className="mt-6 space-y-4 text-gray-100 leading-7">

                  <li>
                    • Upload an updated resume
                  </li>

                  <li>
                    • Highlight your strongest skills
                  </li>

                  <li>
                    • Keep your cover letter concise
                  </li>

                  <li>
                    • Double-check all details
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}