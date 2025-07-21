"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TextureButton } from "@/components/ui/texture-button";
import { LoaderCircleIcon } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }).max(50),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }).max(100),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const messageRef = useRef<HTMLParagraphElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setResultMessage("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setResultMessage("✅ Message sent successfully!");
      reset();
    } catch (error) {
      setResultMessage("❌ Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (resultMessage && messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [resultMessage]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-screen-md border p-10 rounded-lg my-3 flex flex-col gap-6"
    >
      <div className="flex gap-4 flex-col sm:flex-row">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} placeholder="John" />
          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} placeholder="Doe" />
          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register("email")} placeholder="john@example.com" />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" {...register("subject")} placeholder="How can we help you?" />
        {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} placeholder="Tell us more about your inquiry" />
        {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <TextureButton
        type="submit"
        size="sm"
        className="font-semibold cursor-pointer"
        disabled={isLoading}
      >
        {isLoading && <LoaderCircleIcon className="animate-spin size-4 mr-2" />}
        {isLoading ? "Sending..." : "Send Message"}
      </TextureButton>

      {resultMessage && (
        <p
          ref={messageRef}
          className={`text-sm text-center ${
            resultMessage.startsWith("✅")
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {resultMessage}
        </p>
      )}
    </form>
  );
}
