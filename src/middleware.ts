import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/bts",
  "/terms-condition",
  "/privacy-policy",
  "/advertise",
  "/about",
  "/contact-us",
  "/blog",
  "/careers",
  "/team",
  "/sales",
  "/help",
  "/faq",
  "/feature",
  "/projects",
  "/quotation",
  "/(api|trpc)(.*)",
  "/quotation.pdf",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|mov|m4v|ogv)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
