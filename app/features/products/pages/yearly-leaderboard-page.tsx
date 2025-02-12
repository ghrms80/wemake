import type { MetaFunction } from "react-router";
import type { Route } from "./+types/yearly-leaderboard-page";

export function loader({ request, params }: Route.LoaderArgs) {
    const { year } = params;
    return {
        year,
        products: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "연간 리더보드" },
        { name: "description", content: "연간 인기 제품" },
    ];
};

export default function YearlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
    const { year, products } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{year}년 리더보드</h1>
            {/* 연간 리더보드 구현 예정 */}
        </div>
    );
} 