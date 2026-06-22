export default function Education() {
  const education = [
    {
      degree: "M.Tech - Computer Science and Engineering",
      college: "Bangalore Institute of Technology",
      board: "Autonomous",
      score: "CGPA: 8.3",
      year: "2027",
    },
    {
      degree: "B.E - Computer Science and Engineering ",
      college: "KLE College of Engineering and Technology",
      board: "VTU",
      score: "CGPA: 8.53",
      year: "2025",
    },
    {
      degree: "12th Standard",
      college: "Excellent PU Science College",
      board: "PU Board",
      score: "Percentage: 85.3%",
      year: "2021",
    },
    {
      degree: "10th Standard",
      college: "Kendriya Vidyalaya Vijayapura",
      board: "CBSE",
      score: "Percentage: 75.3%",
      year: "2019",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-teal-500">
          Education
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          My academic journey and qualifications.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold text-teal-500">
              {item.degree}
            </h3>

            <p className="mt-2">{item.college}</p>

            <p>{item.board}</p>

            <p>{item.score}</p>

            <p>{item.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}