export default function AcademicsSection({ data }) {
  return (
    <section id="academics" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Academics & Experience</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="space-y-6">
            {data.academics.map(item => (
              <div key={item.id} className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold">{item.institution}</h4>
                <p className="text-gray-600">{item.degree}</p>
                <p className="text-gray-500">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
        
       <div>
        <h3 className="text-2xl font-bold mb-4">Experience</h3>
        {data.experience && data.experience.length > 0 ? (
          <div className="space-y-6">
            {data.experience.map(item => (
              <div key={item.id} className="bg-gray-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold">{item.company}</h4>
                <p className="text-gray-600">{item.role} ({item.duration})</p>
                <p className="text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No experience to show</p>
        )}
      </div>
      </div>
    </section>
  );
}