export default function PostJob() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Post a New Job</h1>

      <form className="space-y-4">
        <input type="text" placeholder="Job Title" className="w-full border rounded-lg px-4 py-3" />
        <input type="text" placeholder="Company Name" className="w-full border rounded-lg px-4 py-3" />
        <textarea rows="6" placeholder="Job Description" className="w-full border rounded-lg p-3"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Post Job
        </button>
      </form>
    </div>
  );
}
