import type { MetaFunction } from "react-router";   
import type { Route } from "./+types/products-page";

export function loader({ request }: Route.LoaderArgs) {
    return {
        products: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "모든 제품" },
        { name: "description", content: "모든 제품 목록을 확인하세요" },
    ];
};

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
    const { products } = loaderData;

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">모든 제품</h1>
            {/* 제품 목록 구현 예정 */}
        </main>
    );
} 