export default function LanguagesHobbies() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-teal-500">
          Languages & Interests
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Communication abilities and personal interests.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        {/* Languages Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-teal-500 mb-4">
            Languages
          </h3>

          <ul className="space-y-3">
            <li>✅ English – Read, Write & Speak</li>
            <li>✅ Kannada – Read, Write & Speak</li>
            <li>✅ Hindi – Read,Write & Speak</li>
          </ul>
        </div>

        {/* Hobbies Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-bold text-teal-500 mb-4">
            Hobbies & Interests
          </h3>

          <ul className="space-y-3">
            <li>📚 Reading Books</li>
            <li>💻 Exploring New Technologies</li>
            <li>🤖 AI & Machine Learning Research</li>
            <li>🎵 Listening to Music</li>
            <li>🌐 Web Development</li>
            <li>📝 Technical Writing & Documentation</li>
          </ul>
        </div>

      </div>
    </section>
  );
}