import type { Route } from "./+types/categories-page";
import { Hero } from "~/common/components/hero";
import { CategoryCard } from "../components/category-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Product categories" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Categories"
        description="Browse products by category"
      />
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length: 9 }).map((_, index) => (
          <CategoryCard
            key={`categoryId-${index}`}
            id={`categoryId-${index}`}
            name={`Category Name`}
            description={`Category Description`}
          />
        ))} 
      </div>
    </div>
  );
} 