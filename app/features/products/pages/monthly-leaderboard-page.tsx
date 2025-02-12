import type { MetaFunction } from "react-router";
import type { Route } from "./+types/monthly-leaderboard-page";

export function loader({ request, params }: Route.LoaderArgs) {
    const { year, month } = params;
    return {
        year,
        month,
        products: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "월간 리더보드" },
        { name: "description", content: "월간 인기 제품" },
    ];
};

export default function MonthlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
    const { year, month, products } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{year}년 {month}월 리더보드</h1>
            {/* 월간 리더보드 구현 예정 */}
        </div>
    );
} 