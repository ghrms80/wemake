import type { MetaFunction } from "react-router";
import type { Route } from "./+types/category-page";

export function loader({ request, params }: Route.LoaderArgs) {
    const { category } = params;
    return {
        category,
        products: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "카테고리 제품" },
        { name: "description", content: "카테고리별 제품 목록" },
    ];
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
    const { category, products } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{category} 제품</h1>
            {/* 카테고리별 제품 목록 구현 예정 */}
        </div>
    );
} 