import { useState } from "react";
import { Star, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/ProductGallery";
import { VariantSelector } from "@/components/VariantSelector";
import { ReviewSection } from "@/components/ReviewSection";
import { RelatedProducts } from "@/components/RelatedProducts";
import { toast } from "sonner";

const product = {
  name: "Merino Wool Crewneck Sweater",
  price: "$245",
  description: "Crafted from premium merino wool, this versatile crewneck sweater offers exceptional comfort and timeless style for any occasion.",
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: [
    { name: "Charcoal", value: "#2F3033" },
    { name: "Heather Gray", value: "#9A9B9F" },
    { name: "Navy", value: "#28364D" },
    { name: "Sand", value: "#D5C4B0" },
  ],
  images: [
    "https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?q=80&w=2070",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2072",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964",
    "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2011",
  ],
};

const Index = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select both size and color");
      return;
    }
    toast.success("Added to cart successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center text-sm text-muted-foreground mb-8">
          <a href="#" className="hover:text-foreground transition-colors">Home</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="#" className="hover:text-foreground transition-colors">Men</a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground">Sweaters</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={product.images} />

          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-medium tracking-tight">{product.name}</h1>
              <p className="text-2xl mt-2">{product.price}</p>
              <p className="text-muted-foreground mt-4">{product.description}</p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <label className="text-sm font-medium mb-2 block">Size</label>
                <VariantSelector
                  options={product.sizes}
                  selected={selectedSize}
                  onChange={setSelectedSize}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Color</label>
                <VariantSelector
                  options={product.colors}
                  selected={selectedColor}
                  onChange={setSelectedColor}
                  type="color"
                />
              </div>

              <Button 
                className="w-full h-12 text-base"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
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