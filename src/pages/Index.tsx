import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/ProductGallery";
import { VariantSelector } from "@/components/VariantSelector";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedProducts } from "@/components/RelatedProducts";
import { FAQ } from "@/components/FAQ";
import { ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";

const product = {
  name: "CuddleBox - Luxe Baby Cadeauset met Houten Speeltjes en Knuffels",
  price: "€63,95",
  originalPrice: "€67,00",
  description: "De CuddleBox Cadeauset biedt een stijlvolle en liefdevolle manier om de allerkleinsten te verwennen. Deze luxe cadeauset is zorgvuldig samengesteld en bevat een selectie van houten speeltjes en zachte knuffels die zowel veilig als duurzaam zijn.",
  variants: [
    { name: "1 Stuk", value: "1", price: "€63,95", originalPrice: "€67,00" },
    { name: "2 Stuks (-20%)", value: "2", price: "€102,32", originalPrice: "€127,90" }
  ],
  sets: [
    { name: "Set konijn & olifant", value: "#F8E7E7" },
    { name: "Set panda & vos", value: "#E7E7E7" },
    { name: "Set beer & konijn", value: "#F5E6DC" }
  ],
  images: [
    "/lovable-uploads/330d4165-3fd2-4878-a634-c9dcd0c5ed6d.png",
    "/lovable-uploads/b7836571-e74c-485a-a66f-8152490e6f2a.png",
    "/lovable-uploads/f6abc95e-3993-4cdb-a73c-757afc4280b0.png",
    "/lovable-uploads/a37cd59e-cdbf-4e9f-aa2a-50aa3dca8f1a.png"
  ]
};

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState("1");
  const [selectedSet, setSelectedSet] = useState("#F8E7E7");

  const handleAddToCart = () => {
    toast.success("Product toegevoegd aan winkelwagen!");
  };

  return (
    <div className="min-h-screen bg-[#FDF8F6]">
      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <span className="mx-2">/</span>
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
              <div className="flex items-center gap-2 mt-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(128 reviews)</span>
              </div>
              <p className="text-muted-foreground mt-4">{product.description}</p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <label className="text-sm font-medium mb-2 block">Kies uw pakket</label>
                <VariantSelector
                  options={product.variants.map(v => v.name)}
                  selected={selectedVariant}
                  onChange={setSelectedVariant}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Kies uw set</label>
                <VariantSelector
                  options={product.sets}
                  selected={selectedSet}
                  onChange={setSelectedSet}
                  type="color"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  Op Voorraad, Klaar voor Verzending
                </div>
                <Button 
                  className="w-full h-12 text-base bg-[#4CAF50] hover:bg-[#45a049]"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  In winkelwagen
                </Button>
              </div>
            </div>
          </div>
        </div>

        <ReviewSection />
        <RelatedProducts />
        <FAQ />
      </main>
    </div>
  );
};

export default Index;