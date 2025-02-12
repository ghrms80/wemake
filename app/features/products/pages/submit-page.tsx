import type { MetaFunction } from "react-router";
import type { Route } from "./+types/submit-page";

export function action({ request }: Route.ActionArgs) {
    // 제품 제출 로직 구현 예정
    return {};
}

export const meta: MetaFunction = () => {
    return [
        { title: "제품 등록" },
        { name: "description", content: "새로운 제품 등록하기" },
    ];
};

export default function SubmitPage({ actionData }: Route.ComponentProps) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">제품 등록</h1>
            {/* 제품 등록 폼 구현 예정 */}
        </div>
    );
} 