interface HeroProps {
  title: string;
  description?: string;
  className?: string;
}

export function Hero({ 
  title, 
  description,
  className = "bg-gradient-to-t from-background to-primary/10"
}: HeroProps) {
  return (
    <div className={`flex flex-col py-20 justify-center items-center rounded-md ${className}`}>
      <h1 className="text-5xl font-bold">{title}</h1>
      {description && (
        <p className="text-2xl font-light text-foreground">{description}</p>
      )}
    </div>
  );
} 