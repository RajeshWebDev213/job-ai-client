import { useNavigate } from "react-router-dom";

import {
  MapPin,
  IndianRupee,
  BriefcaseBusiness,
} from "lucide-react";

export default function JobCard({ job }) {

  const navigate = useNavigate();

  return (

    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition duration-300">

      {/* Top */}
      <div className="flex items-start justify-between">

        {/* Logo */}
        <div className="w-14 h-14 rounded-xl border border-gray-200 flex items-center justify-center bg-white">

          <img
            src={job.logo}
            alt={job.company}
            className="w-8 h-8 object-contain"
          />
        </div>

        {/* Type */}
        <span className="bg-[#f3f0ff] text-[#5b4df5] text-xs px-3 py-1 rounded-full font-medium">
          {job.type}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mt-6">
        {job.title}
      </h2>

      {/* Company */}
      <p className="text-gray-500 mt-2">
        {job.company}
      </p>

      {/* Info */}
      <div className="mt-5 space-y-3">

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-500">

          <MapPin
            size={16}
            className="text-[#5b4df5]"
          />

          <span>{job.location}</span>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 text-sm text-gray-500">

          <BriefcaseBusiness
            size={16}
            className="text-[#5b4df5]"
          />

          <span>{job.experience}</span>
        </div>

        {/* Salary */}
        <div className="flex items-center gap-2 text-sm text-gray-500">

          <IndianRupee
            size={16}
            className="text-[#5b4df5]"
          />

          <span>{job.salary}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-8">

        {/* View Details */}
        <button
          onClick={() =>
            navigate(`/jobs/${job._id}`)
          }
          className="flex-1 border border-gray-300 hover:border-[#5b4df5] hover:text-[#5b4df5] h-[48px] rounded-xl font-medium transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}