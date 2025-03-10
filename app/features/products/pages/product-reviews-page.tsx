import { Button } from "~/common/components/ui/button";
import { ReviewCard } from "~/features/products/components/review-card";

export function meta() {
  return [
    { title: "Product overview | wemake" },
    { name: "description", content: "View product details and information" }
  ];
}

export default function ProductReviewsPage() {
  // 실제 구현에서는 이 데이터를 API나 로더에서 가져올 수 있습니다
  const reviews = [
    {
      id: "1",
      avatarSrc: "https://github.com/facebook.png",
      avatarFallback: "JD",
      authorName: "John Doe",
      username: "username",
      rating: 2,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      postedDate: "10 days ago"
    },
    // 더 많은 리뷰를 추가할 수 있습니다
  ];

  return (
    <div className="space-y-10 max-w-screen-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{reviews.length} Reviews</h2>
        <Button variant={"secondary"}>Write a review</Button>
      </div>
      <div className="space-y-20">
        {Array.from({ length: 3 }).map((_, outerIndex) => (
          reviews.map((review, innerIndex) => (
            <ReviewCard
              key={`${outerIndex}-${innerIndex}`}
              avatarSrc={review.avatarSrc}
              avatarFallback={review.avatarFallback}
              authorName={review.authorName}
              username={review.username}
              rating={review.rating}
              content={review.content}
              postedDate={review.postedDate}
            />
          ))
        ))}
      </div>
    </div>
  );
}
