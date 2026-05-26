// src/pages/RecruiterDashboard.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  BriefcaseBusiness,
  Users,
  CircleDollarSign,
  Plus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function RecruiterDashboard() {

  const navigate = useNavigate();

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

        <div className="max-w-7xl mx-auto px-6">

          {/* TOP */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            {/* Left */}
            <div className="flex items-center gap-6">

              {/* Profile */}
              <div className="w-24 h-24 rounded-full bg-[#5b4df5] text-white flex items-center justify-center text-4xl font-bold uppercase">

                {user?.username
                  ?.split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              {/* Info */}
              <div>

                <h1 className="text-4xl font-bold text-gray-900">

                  {user?.username}
                </h1>

                <p className="text-[#5b4df5] font-medium mt-2 capitalize">

                  {user?.role}
                </p>

                <p className="text-gray-500 mt-2">

                  {user?.email}
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/post-job")}
              className="bg-[#5b4df5] hover:bg-[#4f46e5] text-white px-8 h-[56px] rounded-xl font-semibold transition flex items-center gap-3"
            >

              <Plus size={22} />

              Post New Job
            </button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            {/* Jobs */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">

              <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] text-[#5b4df5] flex items-center justify-center">

                <BriefcaseBusiness size={28} />
              </div>

              <h2 className="text-5xl font-bold text-gray-900 mt-8">
                24
              </h2>

              <p className="text-gray-500 mt-3">
                Active Job Posts
              </p>
            </div>

            {/* Applicants */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">

              <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] text-[#5b4df5] flex items-center justify-center">

                <Users size={28} />
              </div>

              <h2 className="text-5xl font-bold text-gray-900 mt-8">
                148
              </h2>

              <p className="text-gray-500 mt-3">
                Total Applicants
              </p>
            </div>

            {/* Hired */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">

              <div className="w-14 h-14 rounded-2xl bg-[#ede9fe] text-[#5b4df5] flex items-center justify-center">

                <CircleDollarSign size={28} />
              </div>

              <h2 className="text-5xl font-bold text-gray-900 mt-8">
                12
              </h2>

              <p className="text-gray-500 mt-3">
                Successfully Hired
              </p>
            </div>
          </div>

          {/* Recent Jobs */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 mt-10">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-bold text-gray-900">

                  Recent Job Posts
                </h2>

                <p className="text-gray-500 mt-2">
                  Manage your recent openings
                </p>
              </div>

              <button className="text-[#5b4df5] font-semibold hover:underline">
                View All
              </button>
            </div>

            {/* Table */}
            <div className="mt-10 overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-gray-200 text-left">

                    <th className="pb-5 font-semibold text-gray-600">
                      Job Role
                    </th>

                    <th className="pb-5 font-semibold text-gray-600">
                      Type
                    </th>

                    <th className="pb-5 font-semibold text-gray-600">
                      Applicants
                    </th>

                    <th className="pb-5 font-semibold text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {[
                    "Frontend Developer",
                    "Backend Developer",
                    "UI/UX Designer",
                  ].map((job, index) => (

                    <tr
                      key={index}
                      className="border-b border-gray-100"
                    >

                      <td className="py-6 font-medium">
                        {job}
                      </td>

                      <td className="py-6 text-gray-500">
                        Full Time
                      </td>

                      <td className="py-6 text-gray-500">
                        24 Applicants
                      </td>

                      <td className="py-6">

                        <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-medium">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}