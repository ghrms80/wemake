import type { MetaFunction } from "react-router";
import type { Route } from "./+types/leaderboard-page";

export function loader({ request }: Route.LoaderArgs) {
    return {
        topProducts: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "리더보드" },
        { name: "description", content: "인기 제품 순위" },
    ];
};

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
    const { topProducts } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">리더보드</h1>
            {/* 리더보드 구현 예정 */}
        </div>
    );
} 