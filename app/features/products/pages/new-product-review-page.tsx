export function meta() {
  return [
    { title: "Product overview | wemake" },
    { name: "description", content: "View product details and information" }
  ];
}

export default function ProductRedirectPage() {
  // 이 컴포넌트는 렌더링되지 않습니다 (리디렉션 발생)
  return (
    <div className="space-y-10">
      <div className="flex justify-between">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
