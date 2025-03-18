import type { Route } from "./+types/job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your dream job at wemake" },
  ];
};

export default function JobPage() {
  return (
    <div>
      <h1>Jobs</h1>
    </div>
  )
} 