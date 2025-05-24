export default function SkillsSection({ data }) {
  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((skill, index) => (
            <div 
              key={index} 
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}