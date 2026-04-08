import { HeroCarousel } from "@/components/HeroCarousel";
import { UlinCharms } from "@/components/UlinCharms";
import { FeaturedProduct } from "@/components/FeaturedProduct";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <HeroCarousel />
      <UlinCharms />
      <FeaturedProduct />
    </main>
  );
}
