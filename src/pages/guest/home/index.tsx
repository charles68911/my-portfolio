import { HomePageBannerSection } from "@/components/features/home/homepage-banner-section";
import { CardDataSection } from "@/components/features/home/card-data-section";
import { SkillsSection } from "@/components/features/home/skills-section";
import { ProfileSection } from "@/components/features/home/profile-section";

export default function HomePage() {
  return (
    <>
      <HomePageBannerSection />

      <CardDataSection />

      <SkillsSection />

      <ProfileSection />
    </>
  );
}