"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { Perview } from "@/components/Perview";

import { cn } from "@/lib/utils";

function DotPatternDemo() {
  return (
    <div className="relative flex md:h-[500px] h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
      <div className="z-10 flex flex-col justify-center items-center gap-2 px-2">
        <p className=" whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Quotation – Labour & Material Rates
        </p>
        <Perview links="https://drive.google.com/file/d/1qB5pP8J23bJ9cl-kofKQqZvlv-CoG7Nv/preview" />
      </div>
      <DotPattern
        cy={1}
        cr={1}
        cx={1}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}

export { DotPatternDemo };
