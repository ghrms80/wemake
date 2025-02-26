import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/category-page";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";

export const meta = ({ params }: Route.MetaArgs) => {
  return [
    { title: `Developer Tools | ProductHunt Clone` },
    { name: "description", content: `Browse Developer Tools products` },
  ];
};

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-10">
        <Hero
          title="Developer Tools"
          description="Tools for developers to build products faster"
        />
        <div className="space-y-5 w-full max-w-screen-md mx-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
              key={`productId-${index}`}
              id={`productId-${index}`}
              name="Product Name"
              description="Product Description"
              commentsCount={12}
              viewsCount={12}
              upvotesCount={120}
            />
          ))}
        </div>
        <ProductPagination totalPages={10} />
      </div>
    </div>
  );
} 