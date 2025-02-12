import type { MetaFunction } from "react-router";
import type { Route } from "./+types/daily-leaderboard-page";

export function loader({ request, params }: Route.LoaderArgs) {
    const { year, month, day } = params;
    return {
        year,
        month,
        day,
        products: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "일간 리더보드" },
        { name: "description", content: "일간 인기 제품" },
    ];
};

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
    const { year, month, day, products } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{year}년 {month}월 {day}일 리더보드</h1>
            {/* 일간 리더보드 구현 예정 */}
        </div>
    );
} 