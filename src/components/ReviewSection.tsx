import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    content: "Exceptional quality and perfect fit. The merino wool is incredibly soft and comfortable.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    author: "Michael R.",
    rating: 4,
    content: "Great sweater for both casual and formal occasions. Slightly pricey but worth the investment.",
    date: "1 month ago"
  }
];

export const ReviewSection = () => {
  return (
    <section className="mt-16 pt-16 border-t animate-fade-in">
      <h2 className="text-2xl font-medium mb-8">Customer Reviews</h2>
      
      <div className="flex items-center mb-8">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-5 h-5 fill-primary text-primary"
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-muted-foreground">
          Based on 128 reviews
        </span>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 rounded-lg bg-secondary/50 space-y-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{review.author}</p>
                <div className="flex mt-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">{review.date}</span>
            </div>
            <p className="text-sm leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};