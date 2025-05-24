export default function HobbiesSection({ data }) {
  return (
    <section id="hobbies" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Hobbies & Interests</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((hobby, index) => (
            <li 
              key={index} 
              className="bg-green-500 text-white p-4 rounded-lg shadow text-center"
            >
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}