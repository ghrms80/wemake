import type { Route } from "./+types/submit-job-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Find your dream job at wemake" },
  ];
};

export default function SubmitJobPage() {
  return (
    <div>
    </div>
  );
} 