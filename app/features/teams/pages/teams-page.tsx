import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/teams-page";
import { TeamCard } from "../components/team-card";

export const meta: Route.MetaFunction = () => [{ title: "Teams | wemake" }];

export default function TeamsPage() {
  return (
    <div className="space-y-20">
      <Hero title="Teams" description="Find a team looking for a new member." />
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamCard
            key={`teamId-${index}`}
            id={`teamId-${index}`}
            leaderUsername="lynn"
            leaderAvatarUrl="https://github.com/inthetiger.png"
            leaderAvatarFallback="N"
            positions={[
              "React Developer",
              "Backend Developer",
              "Project Manager"
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}