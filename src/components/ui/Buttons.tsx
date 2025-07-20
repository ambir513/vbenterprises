"use client";
import { TextureButton } from "@/components/ui/texture-button";
import { LoaderCircleIcon } from "lucide-react";
import { useState } from "react";

export function TextureButtonDemo() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <TextureButton
        size="sm"
        onClick={() => setIsDisabled((prev) => !prev)}
        className="font-semibold"
      >
        {isDisabled ? (
          <LoaderCircleIcon className="animate-spin size-4" />
        ) : null}
        {isDisabled ? "Submitting..." : "Submit"}
      </TextureButton>
    </div>
  );
}
