export default function Internships() {
  const internships = [
    {
      title: "Machine Learning Intern",
      company: "Take It Smart (OPC) Pvt Ltd",
      duration: "Oct 2023 - Nov 2023",
      description:
        "Worked on machine learning models, data preprocessing, feature engineering, and predictive analytics.",
      skills: ["Python", "Pandas", "NumPy", "Machine Learning"],
      certificate: "/ml-certificate.jpg",
    },

    {

      title: "Java Full Stack Development Intern",
      company: "JSpiders",
      duration: "Feb 2025 - May 2025",
      description:
        "Developed full-stack applications using Java, HTML, CSS, JavaScript, React, and database technologies.",
      skills: ["Java", "React", "MySQL", "JavaScript"],
      certificate: "/jspider-certificate.jpg",
    },

  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-teal-500">
          Internships
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Professional training and industry experience.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {internships.map((internship, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold text-teal-500">
              {internship.title}
            </h3>

            <p className="mt-2">{internship.company}</p>

            <p className="text-gray-500">
              {internship.duration}
            </p>

            <p className="mt-4">
              {internship.description}
            </p>

            <a
              href={internship.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-teal-500 text-white px-4 py-2 rounded-lg"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}