export default function Certificates() {
  const certificates = [
    {
      title: "AI Tools and ChatGPT Workshop",
      file: "/cert1.jpg",
    },
    {
      title: "Excel Certification ",
      file: "/cert2.jpg",
    },
    {
      title: "Excel Certification",
      file: "/cert3.jpg",
    },
    {
      title: "Java OOP Certification",
      file: "/cert4.jpg",
    },
    
  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-teal-500">
          Certificates
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Professional certifications and achievements.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-500 mb-4">
              {certificate.title}
            </h3>

            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}