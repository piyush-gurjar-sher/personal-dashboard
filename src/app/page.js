import Navbar from '@/components/Navbar';
import ProfileSection from '@/components/ProfileSection';
import AcademicsSection from '@/components/AcademicsSection';
import SkillsSection from '@/components/SkillsSection';
import HobbiesSection from '@/components/HobbiesSection';
import { personalData } from '@/data/personalData';

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