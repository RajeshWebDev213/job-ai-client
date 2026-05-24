// src/components/JobCard.jsx

import { MapPin, IndianRupee, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        {/* Logo + Company Info */}
        <div className="flex items-center gap-3">
          <img
            src={job.logo}
            alt={job.company}
            className="w-12 h-12 object-contain rounded-lg  p-2"
          />

          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              {job.title}
            </h3>
            <p className="text-sm text-slate-500">{job.company}</p>
          </div>
        </div>

        {/* Job Type Badge */}
        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          {job.type}
        </span>
      </div>

      {/* Job Details */}
      <div className="space-y-2 text-sm text-slate-600 mb-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <IndianRupee className="w-4 h-4" />
          {job.salary}
        </div>

        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          {job.experience}
        </div>
      </div>

      {/* Button */}
      <Link
        to={`/jobs/${job._id}`}
        className="block text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;