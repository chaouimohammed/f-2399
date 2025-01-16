import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Marie L.",
    rating: 5,
    content: "Magnifique coffret cadeau ! La qualité des matériaux est exceptionnelle et le packaging est superbe. Mon amie a adoré ce cadeau pour sa baby shower.",
    date: "2 semaines"
  },
  {
    id: 2,
    author: "Thomas R.",
    rating: 5,
    content: "Produits de très grande qualité, parfait pour un cadeau de naissance. Les jouets en bois sont magnifiques et les peluches très douces.",
    date: "1 mois"
  }
];

export const ReviewSection = () => {
  return (
    <section className="mt-16 pt-16 border-t animate-fade-in">
      <h2 className="text-2xl font-medium mb-8">Avis Clients</h2>
      
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
          Basé sur 128 avis
        </span>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-6 rounded-lg bg-[#FDF8F6] space-y-4"
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
              <span className="text-sm text-muted-foreground">Il y a {review.date}</span>
            </div>
            <p className="text-sm leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};