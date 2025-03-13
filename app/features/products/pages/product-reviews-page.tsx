import { Button } from "~/common/components/ui/button";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";
import { ReviewCard } from "~/features/products/components/review-card";
import { CreateReviewDialog } from "../components/create-review-dialog";

export function meta() {
  return [
    { title: "Product overview | wemake" },
    { name: "description", content: "View product details and information" }
  ];
}

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-screen-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">3 Reviews</h2>
          <DialogTrigger>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 3 }).map((_, outerIndex) => (
            <ReviewCard
              key={`${outerIndex}`}
              avatarSrc="https://github.com/facebook.png"
              avatarFallback="N"
              authorName="John Doe"
              username="username"
              rating={2}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              postedDate="10 days ago"
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
