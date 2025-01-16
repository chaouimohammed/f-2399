const relatedProducts = [
  {
    id: 1,
    name: "Cashmere V-Neck Sweater",
    price: "$295",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005"
  },
  {
    id: 2,
    name: "Wool Cardigan",
    price: "$225",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964"
  },
  {
    id: 3,
    name: "Turtleneck Sweater",
    price: "$185",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2071"
  },
  {
    id: 4,
    name: "Cable Knit Sweater",
    price: "$215",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=2072"
  }
];

export const RelatedProducts = () => {
  return (
    <section className="mt-16 pt-16 border-t animate-fade-in">
      <h2 className="text-2xl font-medium mb-8">You May Also Like</h2>
      
      <div className="related-products">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square rounded-lg bg-secondary overflow-hidden mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};