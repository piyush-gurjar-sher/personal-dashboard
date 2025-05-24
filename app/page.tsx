import Navbar from '@/src/components/Navbar';
import ProfileSection from '@/src/components/ProfileSection';
import AcademicsSection from '@/src/components/AcademicsSection';
import SkillsSection from '@/src/components/SkillsSection';
import HobbiesSection from '@/src/components/HobbiesSection';
import { personalData } from '@/src/data/personalData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProfileSection data={personalData} />
      <AcademicsSection data={personalData} />
      <SkillsSection data={personalData.skills} />
      <HobbiesSection data={personalData.hobbies} />
    </div>
  );
}