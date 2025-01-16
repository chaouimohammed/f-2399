const relatedProducts = [
  {
    id: 1,
    name: "CuddleBox - Set Lapin & Éléphant",
    price: "€63,95",
    image: "/lovable-uploads/330d4165-3fd2-4878-a634-c9dcd0c5ed6d.png"
  },
  {
    id: 2,
    name: "CuddleBox - Set Panda & Renard",
    price: "€63,95",
    image: "/lovable-uploads/33e01e74-e353-4510-ba2f-4bc2955b24b3.png"
  },
  {
    id: 3,
    name: "CuddleBox - Set Ours & Lapin",
    price: "€63,95",
    image: "/lovable-uploads/f6abc95e-3993-4cdb-a73c-757afc4280b0.png"
  },
  {
    id: 4,
    name: "CuddleBox - Set Classique",
    price: "€63,95",
    image: "/lovable-uploads/a37cd59e-cdbf-4e9f-aa2a-50aa3dca8f1a.png"
  }
];

export const RelatedProducts = () => {
  return (
    <section className="mt-16 pt-16 border-t animate-fade-in">
      <h2 className="text-2xl font-medium mb-8">Vous aimerez aussi</h2>
      
      <div className="related-products">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="aspect-square rounded-lg bg-[#FDF8F6] overflow-hidden mb-4">
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