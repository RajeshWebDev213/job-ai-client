import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Profile() {

  return (
    <>
      <Navbar />

      <section className="bg-[#f8fafc] min-h-screen py-16">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-8">

          {/* Sidebar */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8">

            <div className="w-24 h-24 rounded-full bg-[#5b4df5] text-white flex items-center justify-center text-4xl font-bold">

              R
            </div>

            <h2 className="text-2xl font-bold mt-6">
              Rajesh
            </h2>

            <p className="text-gray-500 mt-2">
              Frontend Developer
            </p>

            <button className="mt-8 w-full border border-gray-300 h-[52px] rounded-xl font-medium hover:border-[#5b4df5] hover:text-[#5b4df5] transition">

              Edit Profile
            </button>
          </div>

          {/* Main */}
          <div className="space-y-8">

            {/* Applied Jobs */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-gray-900">

                Applied Jobs
              </h2>

              <div className="mt-8 space-y-5">

                {[1, 2].map((item) => (

                  <div
                    key={item}
                    className="border border-gray-200 rounded-2xl p-5 flex items-center justify-between"
                  >

                    <div>

                      <h3 className="text-xl font-semibold">
                        Frontend Developer
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Google • Hyderabad
                      </p>
                    </div>

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                      Applied
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Jobs */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8">

              <h2 className="text-3xl font-bold text-gray-900">

                Saved Jobs
              </h2>

              <p className="text-gray-500 mt-4">
                No saved jobs yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}