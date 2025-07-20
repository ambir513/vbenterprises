import { DotPatternDemo } from "@/components/Dot";
import { RealEstateCard } from "@/components/ImageCart";

export default function Page() {
  return (
    <div className="flex flex-col  items-center h-fit w-full">
      <DotPatternDemo />
      <div className="flex justify-center items-center gap-3 flex-wrap mb-10">
      <RealEstateCard />
      <RealEstateCard />
      <RealEstateCard />
      </div>
    </div>
  );
}
