"use client";

import * as React from "react";
import { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

// Tab Components
const Tabs = TabsPrimitive.Root;
const transitionVariants: {
  item: Variants;
} = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const, // 👈 Important fix
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center gap-2 rounded-md p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 data-[state=active]:text-foreground",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

// FAQ Accordion Types
type ViewType = "general" | "interior" | "waterproofing";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

interface FAQSection {
  category: string;
  items: FAQItem[];
}

interface FAQAccordionProps {
  category: string;
  items: FAQItem[];
}

// FAQ Content
const FAQ_SECTIONS: Record<ViewType, FAQSection> = {
  general: {
    category: "General",
    items: [
      {
        id: "what-is",
        question: "What is VB Enterprises?",
        answer:
          "VB Enterprises is a trusted provider of civil, waterproofing, and interior works, serving clients across residential, commercial, and industrial sectors.",
      },
      {
        id: "services-offered",
        question: "What services does VB Enterprises provide?",
        answer:
          "We specialize in waterproofing, civil construction, plastering, PCC, coba, and interior works including false ceilings, partitions, electrical, and more.",
      },
      {
        id: "why-choose",
        question: "Why should I choose VB Enterprises?",
        answer:
          "With over 25+ years of experience, a skilled workforce, and a strong commitment to quality, we deliver long-lasting and cost-effective solutions tailored to your needs.",
      },
      {
        id: "project-types",
        question: "What types of projects do you handle?",
        answer:
          "We work on homes, apartments, bungalows, offices, commercial buildings, societies, and industrial premises — from small repairs to large-scale construction.",
      },
      {
        id: "warranty",
        question: "Do your waterproofing services come with a warranty?",
        answer:
          "Yes, we provide service warranties for all waterproofing jobs, depending on the type of solution and materials used.",
      },
      {
        id: "customization",
        question: "Can I customize the interior designs?",
        answer:
          "Absolutely. Our interior services are fully customizable — from layout planning to color schemes, textures, and lighting.",
      },
      {
        id: "materials-used",
        question: "What kind of materials do you use?",
        answer:
          "We use only high-quality, branded, and certified materials from trusted manufacturers to ensure durability and safety.",
      },
      {
        id: "free-inspection",
        question: "Do you provide free site inspection or consultation?",
        answer:
          "Yes, we offer free site visits for inspection and consultation to understand your requirements and provide accurate estimates.",
      },
      {
        id: "contact-methods",
        question: "How can I contact VB Enterprises for a quote?",
        answer:
          "You can reach us via phone, WhatsApp, email, or our website’s contact form to schedule a visit or get a quote.",
      },
    ],
  },
  interior: {
    category: "Interior",
    items: [
      {
        id: "interior-types",
        question: "What type of interior work do you offer?",
        answer:
          "We handle false ceilings, wall paneling, wooden partitions, modular furniture, painting, lighting, and full turnkey interior solutions.",
      },
      {
        id: "residential-commercial",
        question:
          "Do you provide services for both residential and commercial spaces?",
        answer:
          "Yes, our team works across both sectors — from homes and flats to shops, showrooms, offices, and industrial interiors.",
      },
    ],
  },
  waterproofing: {
    category: "Waterproofing",
    items: [
      {
        id: "leakage-solutions",
        question: "What areas do you waterproof?",
        answer:
          "We waterproof terraces, bathrooms, basements, overhead tanks, walls, and more — using modern techniques like membrane coating, coba, and PU-based treatments.",
      },
      {
        id: "method",
        question: "Which waterproofing method is best?",
        answer:
          "It depends on the area and extent of leakage. Our experts inspect and recommend the best solution — from chemical coating to full coba or membrane treatments.",
      },
    ],
  },
};

// Accordion Component
const FAQAccordion: React.FC<FAQAccordionProps> = ({ category, items }) => (
  <div>
    <Badge variant="outline" className="py-2 px-6 rounded-md mb-4">
      {category} FAQs
    </Badge>
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

// Main Component
export const Component = () => {
  const [activeView, setActiveView] = useState<ViewType>("general");

  return (
    <AnimatedGroup variants={transitionVariants}>
      <div className="container mx-auto px-4 py-18  w-[864px]">
        <header className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">FAQs</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Need help with something? Here are our most frequently asked
            questions.
          </p>
        </header>

        <Tabs
          defaultValue="general"
          onValueChange={(value) => setActiveView(value as ViewType)}
          className="mb-8"
        >
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="interior">Interior</TabsTrigger>
              <TabsTrigger value="waterproofing">Waterproofing</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>

        <FAQAccordion
          category={FAQ_SECTIONS[activeView].category}
          items={FAQ_SECTIONS[activeView].items}
        />
      </div>
    </AnimatedGroup>
  );
};
