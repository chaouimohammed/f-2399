import { useState } from "react";
import { Star, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/ProductGallery";
import { VariantSelector } from "@/components/VariantSelector";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedProducts } from "@/components/RelatedProducts";
import { toast } from "sonner";

const product = {
  name: "CuddleBox - Coffret Cadeau Luxe Bébé",
  price: "€63,95",
  originalPrice: "€67,00",
  description: "Un coffret cadeau luxueux et chaleureux pour bébé, comprenant des jouets en bois naturel et des peluches douces. Parfait pour les baby showers et les nouveaux parents.",
  sizes: ["1 Coffret", "2 Coffrets (-20%)"],
  colors: [
    { name: "Set Lapin & Éléphant", value: "#F8E7E7" },
    { name: "Set Panda & Renard", value: "#E7E7E7" },
    { name: "Set Ours & Lapin", value: "#F5E6DC" },
  ],
  images: [
    "/lovable-uploads/330d4165-3fd2-4878-a634-c9dcd0c5ed6d.png",
    "/lovable-uploads/b7836571-e74c-485a-a66f-8152490e6f2a.png",
    "/lovable-uploads/f6abc95e-3993-4cdb-a73c-757afc4280b0.png",
    "/lovable-uploads/a37cd59e-cdbf-4e9f-aa2a-50aa3dca8f1a.png",
  ],
  features: [
    "Jouets en bois naturel pour le développement sensoriel",
    "Peluches ultra-douces pour le réconfort",
    "Matériaux écologiques et durables",
    "Boîte cadeau élégante incluse",
    "Idéal pour baby showers et nouveaux parents"
  ]
};

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Veuillez sélectionner une quantité et un modèle");
      return;
    }
    toast.success("Ajouté au panier avec succès!");
  };

  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <a href="#" className="hover:text-foreground transition-colors">Accueil</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="#" className="hover:text-foreground transition-colors">Cadeaux Bébé</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">CuddleBox</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={product.images} />

          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-medium tracking-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <p className="text-2xl font-semibold text-primary">{product.price}</p>
                <p className="text-lg text-muted-foreground line-through">{product.originalPrice}</p>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">-4%</span>
              </div>
              <p className="text-muted-foreground mt-4">{product.description}</p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <label className="text-sm font-medium mb-2 block">Quantité</label>
                <VariantSelector
                  options={product.sizes}
                  selected={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Modèle</label>
                <VariantSelector
                  options={product.colors}
                  selected={selectedColor}
                  onChange={setSelectedColor}
                  type="color"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  En stock, prêt à expédier
                </div>
                <Button 
                  className="w-full h-12 text-base bg-[#4CAF50] hover:bg-[#45a049]"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ajouter au panier
                </Button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <h3 className="font-medium">Caractéristiques principales</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Star className="h-4 w-4 text-primary mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ReviewSection />
        <RelatedProducts />
      </main>
    </div>
  );
};

export default Index;