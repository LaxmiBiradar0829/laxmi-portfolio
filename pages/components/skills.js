export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Data Preprocessing",
        "Predictive Analytics",
      ],
    },
    {
      title: "Web Development",
      skills: [
        "HTML",
        "CSS",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Firebase",
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        "MySQL",
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Time Management",
      ],
    },
    {
      title: "Areas of Interest",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Analytics",
        "Full Stack Development",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-teal-500">
          Skills & Expertise
        </h2>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Technologies and professional skills that I use to build intelligent
          and scalable solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-teal-500 mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}