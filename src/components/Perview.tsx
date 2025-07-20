"use client";

import { Button } from "@/components/ui/button";
import { TextureButton } from "@/components/ui/texture-button";
import { LoaderCircleIcon } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
function Perview({ links }: { links: string }) {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Perview
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          ></div>
          <DialogHeader>
            <DialogTitle className="text-left">Update your card</DialogTitle>
            <DialogDescription className="text-left">
              Your new card will replace your current card.
            </DialogDescription>
          </DialogHeader>

          <div className="flex justify-center items-center h-fit relative w-[300px]">
            <div className="w-full h-[440px]">
              <iframe
                src={links}
                width="100%"
                height="600"
                allow="autoplay"
                title="Labour and Material Rates PDF"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
        <TextureButton
          size="sm"
          onClick={() => {
            setIsDisabled((prev) => !prev);
            setTimeout(() => {
              setIsDisabled((prev) => !prev);
            }, 700);
          }}
          className="font-semibold flex justify-center items-center w-full"
        >
          <a
            href="./quotation.pdf"
            download
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2"
          >
            {isDisabled ? (
              <LoaderCircleIcon className="animate-spin size-4" />
            ) : null}
            {isDisabled ? "Downloading..." : "Download"}
          </a>
        </TextureButton>
      </DialogContent>
    </Dialog>
  );
}

export { Perview };
