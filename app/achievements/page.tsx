import AchievementPageCTA from "@/components/ui/achcta";
import AchievementsBanner from "@/components/ui/AchievementsBanner";
import AchievementsSection from "@/components/ui/AchievementsSection";
import CoachAchievements from "@/components/ui/coachach";
export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <AchievementsBanner />
      <AchievementsSection/>
      <CoachAchievements/>
      <AchievementPageCTA/>
    </div>
  );
}
