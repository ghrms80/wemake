import type { MetaFunction } from "react-router";
import type { Route } from "./+types/search-page";

export function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q") || "";

    return {
        query,
        results: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "제품 검색" },
        { name: "description", content: "제품 검색하기" },
    ];
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
    const { query, results } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">검색 결과</h1>
            {/* 검색 결과 구현 예정 */}
        </div>
    );
} 