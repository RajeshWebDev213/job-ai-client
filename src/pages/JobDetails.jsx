import { useParams } from "react-router-dom";

export default function JobDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Frontend Developer</h1>
      <p className="text-slate-600 mb-6">Google • Hyderabad</p>
      <p className="leading-7 text-slate-700">
        This is the job description for job ID: {id}
      </p>
    </div>
  );
}
