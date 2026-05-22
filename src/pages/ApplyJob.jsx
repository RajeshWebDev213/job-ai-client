export default function ApplyJob() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Apply for Job</h1>

      <form className="space-y-4">
        <input type="file" className="w-full border rounded-lg p-3" />
        <textarea
          placeholder="Cover Letter"
          rows="6"
          className="w-full border rounded-lg p-3"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Submit Application
        </button>
      </form>
    </div>
  );
}
