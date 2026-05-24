// src/pages/Companies.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const companies = [
  {
    name: "Google",
    jobs: "120+ Open Jobs",
  },
  {
    name: "Amazon",
    jobs: "90+ Open Jobs",
  },
  {
    name: "Microsoft",
    jobs: "75+ Open Jobs",
  },
  {
    name: "Meta",
    jobs: "60+ Open Jobs",
  },
  {
    name: "Netflix",
    jobs: "40+ Open Jobs",
  },
];

export default function Companies() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f7f7ff] py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-[64px] font-bold text-[#0f172a]">
            Top Hiring Companies
          </h1>

          <p className="mt-6 text-xl text-[#64748b] max-w-2xl mx-auto">
            Explore leading companies hiring talented developers.
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {companies.map((company, index) => (

            <div
              key={index}
              className="bg-white border border-[#ececff] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ede9fe] flex items-center justify-center text-2xl font-bold text-[#5b4df5] mb-6">
                {company.name.charAt(0)}
              </div>

              <h2 className="text-2xl font-bold text-[#0f172a]">
                {company.name}
              </h2>

              <p className="mt-4 text-[#64748b]">
                {company.jobs}
              </p>

              <button className="mt-6 bg-[#5b4df5] text-white px-6 py-3 rounded-2xl hover:bg-[#4f46e5] transition">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}