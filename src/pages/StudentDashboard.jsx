export default function StudentDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {['Applications', 'Shortlisted', 'Rejected', 'Saved Jobs'].map((item) => (
          <div key={item} className="bg-white shadow rounded-2xl p-6">
            <h3 className="font-semibold">{item}</h3>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        ))}
      </div>
    </div>
  );
}
