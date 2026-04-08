import { HeroCarousel } from "@/components/HeroCarousel";
import { UlinCharms } from "@/components/UlinCharms";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <HeroCarousel />
      <UlinCharms />
    </main>
  );
}
