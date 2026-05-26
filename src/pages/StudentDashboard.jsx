// src/pages/StudentDashboard.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BriefcaseBusiness,
  Bookmark,
  FileText,
  User,
} from "lucide-react";

export default function StudentDashboard() {

  // Get User
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page */}
      <section className="bg-[#f8fafc] min-h-screen py-16">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[320px_1fr] gap-8">

          {/* LEFT SIDEBAR */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 h-fit">

            {/* Profile */}
            <div className="w-24 h-24 rounded-full bg-[#5b4df5] text-white flex items-center justify-center text-4xl font-bold uppercase">

              {user?.username
                ?.split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </div>

            {/* Name */}
            <h2 className="text-3xl font-bold text-gray-900 mt-6">

              {user?.username}
            </h2>

            {/* Role */}
            <p className="text-[#5b4df5] font-medium mt-2 capitalize">

              {user?.role}
            </p>

            {/* Email */}
            <p className="text-gray-500 mt-3 break-all">

              {user?.email}
            </p>

            {/* Button */}
            <button className="mt-8 w-full border border-gray-300 h-[52px] rounded-xl font-medium hover:border-[#5b4df5] hover:text-[#5b4df5] transition">

              Edit Profile
            </button>

            {/* Profile Completion */}
            <div className="mt-10">

              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-gray-700">
                  Profile Completion
                </span>

                <span className="text-sm font-semibold text-[#5b4df5]">
                  80%
                </span>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full mt-3">

                <div className="bg-[#5b4df5] h-2 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8">

            {/* Top Stats */}
            <div className="grid md:grid-cols-3 gap-6">

              {/* Applied */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                  <BriefcaseBusiness size={28} />
                </div>

                <h2 className="text-5xl font-bold text-gray-900 mt-8">
                  12
                </h2>

                <p className="text-gray-500 mt-3">
                  Applied Jobs
                </p>
              </div>

              {/* Saved */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                  <Bookmark size={28} />
                </div>

                <h2 className="text-5xl font-bold text-gray-900 mt-8">
                  8
                </h2>

                <p className="text-gray-500 mt-3">
                  Saved Jobs
                </p>
              </div>

              {/* Resume */}
              <div className="bg-white border border-gray-200 rounded-3xl p-8">

                <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                  <FileText size={28} />
                </div>

                <h2 className="text-5xl font-bold text-gray-900 mt-8">
                  1
                </h2>

                <p className="text-gray-500 mt-3">
                  Resume Uploaded
                </p>
              </div>
            </div>

            {/* Applied Jobs */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-3xl font-bold text-gray-900">

                    Applied Jobs
                  </h2>

                  <p className="text-gray-500 mt-2">

                    Recently applied opportunities
                  </p>
                </div>

                <button className="text-[#5b4df5] font-semibold hover:underline">
                  View All
                </button>
              </div>

              {/* Jobs */}
              <div className="mt-10 space-y-5">

                {[
                  "Frontend Developer",
                  "React Developer",
                  "UI/UX Designer",
                ].map((job, index) => (

                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
                  >

                    <div>

                      <h3 className="text-xl font-semibold text-gray-900">
                        {job}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Google • Hyderabad
                      </p>
                    </div>

                    <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-medium h-fit">
                      Applied
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-gray-900">

                Recent Activity
              </h2>

              <div className="mt-8 space-y-5">

                {[
                  "Applied for Frontend Developer",
                  "Saved MERN Stack Developer Job",
                  "Updated Resume",
                ].map((activity, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="w-12 h-12 rounded-xl bg-[#ede9fe] flex items-center justify-center text-[#5b4df5]">

                      <User size={20} />
                    </div>

                    <p className="text-gray-700">
                      {activity}
                    </p>
                  </div>
                ))}
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