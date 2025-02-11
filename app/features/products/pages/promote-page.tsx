import type { Route } from "~/types";
import type { MetaFunction } from "@remix-run/react";

export function loader({ request }: Route.LoaderArgs) {
    return {
        promotionPlans: [],
    };
}

export const meta: MetaFunction = () => {
    return [
        { title: "제품 프로모션" },
        { name: "description", content: "제품 홍보하기" },
    ];
};

export default function PromotePage({ loaderData }: Route.ComponentProps) {
    const { promotionPlans } = loaderData;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">제품 프로모션</h1>
            {/* 프로모션 옵션 구현 예정 */}
        </div>
    );
} 