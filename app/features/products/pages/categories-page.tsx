import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
    return {
        categories: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "카테고리" },
        { name: "description", content: "제품 카테고리 목록" },
    ];
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
    const { categories } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">카테고리</h1>
            {/* 카테고리 목록 구현 예정 */}
        </div>
    );
} 