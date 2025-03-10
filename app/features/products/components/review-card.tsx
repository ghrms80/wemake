import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface ReviewCardProps {
  avatarSrc?: string;
  avatarFallback: string;
  authorName: string;
  username: string;
  rating: number;
  content: string;
  postedDate: string;
}

export function ReviewCard({
  avatarSrc,
  avatarFallback,
  authorName,
  username,
  rating,
  content,
  postedDate
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
          {avatarSrc && <AvatarImage src={avatarSrc} />}
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{authorName}</h4>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon 
            key={index} 
            className="size-4" 
            fill={index < rating ? "currentColor" : "none"} 
          />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-sm text-muted-foreground">{postedDate}</span>
    </div>
  );
} 