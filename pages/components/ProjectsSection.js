import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
// Sample project data
const projects = [
  {
    title: "Railway AI Chatbot",
    description:
      "An intelligent railway assistant chatbot that helps users with train-related queries using Natural Language Processing and conversational AI.",
    image: "/project1.jpg",
    tech: ["Python", "NLP", "Flask", "Machine Learning"],
    github: "https://github.com/LaxmiBiradar0829",
  },

  {
    title: "Credit Card Fraud Detection",
    description:
      "Machine Learning model that detects fraudulent transactions using classification algorithms and data analytics techniques.",
    image: "/project2.jpg",
    tech: ["Python", "Pandas", "Scikit-Learn", "Data Analytics"],
    github: "https://github.com/LaxmiBiradar0829",
  },

  {
    title: "Hybrid ARIMA-LSTM Forecasting",
    description:
      "Time-series forecasting system combining ARIMA and LSTM models to improve prediction accuracy.",
    image: "/project3.jpg",
    tech: ["Python", "TensorFlow", "ARIMA", "Deep Learning"],
    github: "Yhttps://github.com/LaxmiBiradar0829",
  },

  {
    title: "Study Quizzer",
    description:
      "Interactive quiz platform with user authentication and performance tracking for students.",
    image: "/project4.jpg",
    tech: ["React", "Firebase", "JavaScript", "CSS"],
    github: "https://github.com/LaxmiBiradar0829",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-4 md:px-10 bg-white dark:bg-gray-900">
  <div className="max-w-screen-lg mx-auto text-center">
    <h3 className="text-5xl font-bold py-2 text-teal-500">
  Featured Projects
</h3>
    <p className="text-lg py-3 leading-8 text-gray-800 dark:text-gray-200">
      I enjoy building AI-powered applications, data analytics solutions,
and full-stack web platforms. These projects demonstrate my skills
in Machine Learning, Data Science, and Modern Web Development.
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-300">Check them out below.</p>
  <br/>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-44">
              <Image
                src={project.image}
                alt={project.title}
                fill={true}
                style={{ objectFit: 'cover' }}
                className="rounded-t-2xl"
              />
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h4>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm font-medium">
                <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-700 dark:text-white hover:text-teal-500 transition duration-300"
>
  <AiFillGithub className="text-3xl" />
</a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
