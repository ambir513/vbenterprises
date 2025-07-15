import CardCaroursalDemo from "@/components/Carousel";
import Demo from "@/components/demo";
import { HeroSection } from "@/components/hero-section-1";
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/Info";
import { TestimonialsSectionDemo } from "@/components/testimonials";
import { TextureButtonDemo } from "@/components/ui/Buttons";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Demo />
      <CardCaroursalDemo />
      <div className="w-full h-fit">
        <FeaturesSectionWithHoverEffectsDemo />
      </div>
      <TextureButtonDemo />
      <TestimonialsSectionDemo />
    </div>
  );
}
