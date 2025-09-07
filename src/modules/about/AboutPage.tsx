"use client";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a passionate team of developers and designers dedicated to creating
          modern, user-friendly, and innovative web applications. Our goal is to help
          businesses grow through technology and creative solutions.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">💡 Innovation</h3>
            <p className="text-gray-600 text-sm">
              Bringing creative and unique ideas to life.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🤝 Commitment</h3>
            <p className="text-gray-600 text-sm">
              Dedicated to delivering the best solutions to our clients.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">🚀 Growth</h3>
            <p className="text-gray-600 text-sm">
              Helping businesses achieve sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
