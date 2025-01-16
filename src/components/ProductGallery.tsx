import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
        <img
          src={images[selectedImage]}
          alt="Product image"
          className="h-full w-full object-cover object-center animate-fade-in"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(i)}
            className={cn(
              "relative aspect-square cursor-pointer rounded-lg bg-secondary overflow-hidden",
              selectedImage === i && "ring-2 ring-primary"
            )}
          >
            <img
              src={image}
              alt={`Product thumbnail ${i + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};