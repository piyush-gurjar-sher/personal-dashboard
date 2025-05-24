import Image from 'next/image';

export default function ProfileSection({ data }) {
  return (
    <section id="profile" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Profile</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gray-300">
            <Image 
              src="/profile.jpg" 
              alt="Profile picture" 
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{data.name}</h3>
            <p className="text-lg text-gray-600 mb-4">{data.role}</p>
            <p className="mb-4">{data.bio}</p>
            <div>
              <h4 className="font-bold mb-2">Contact:</h4>
              <ul className="space-y-1">
                <li>Email: {data.contact.email}</li>
                <li>Phone: {data.contact.phone}</li>
                <li>LinkedIn: {data.contact.linkedin}</li>
                <li>GitHub: {data.contact.github}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}