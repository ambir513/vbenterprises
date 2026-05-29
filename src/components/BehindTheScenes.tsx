"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  MapPin,
  Droplets,
  Shield,
  Wrench,
  ChevronDown,
  Maximize2,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { AnimatedGroup } from "@/components/ui/animated-group";
import type { Variants } from "framer-motion";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
};

/* ───────── Video data ───────── */
interface VideoItem {
  id: string;
  url: string;
  title?: string;
  description?: string;
  location?: string;
  tag?: string;
}

const videos: VideoItem[] = [
  {
    id: "roofseal-1",
    url: "/video_1.mp4",
    title: "Dr. Fixit Roofseal Classic Application",
    description:
      "Professional waterproofing application using Dr. Fixit Roofseal Classic for durable roof protection and long-term surface sealing.",
    location: "Bidar",
    tag: "Waterproofing",
  },
  {
    id: "roofseal-2",
    url: "/video_2.mp4",
    title: "Dr. Fixit Roofseal Classic Finishing",
    description:
      "Final finishing and coverage checks for a clean, uniform Roofseal Classic application with a professional site finish.",
    location: "Bidar",
    tag: "Waterproofing",
  },
  {
    id: "new1",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771089132/WhatsApp_Video_2026-02-14_at_10.03.13_PM_lvvgzh.mp4",
  },
  {
    id: "new2",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771089114/WhatsApp_Video_2026-02-14_at_10.04.47_PM_fgcngk.mp4",
  },
  {
    id: "new3",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771089109/WhatsApp_Video_2026-02-14_at_10.04.48_PM_vggzyg.mp4",
  },
  {
    id: "new4",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771089104/WhatsApp_Video_2026-02-14_at_10.03.14_PM_pqvav5.mp4",
  },
  {
    id: "new5",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771089099/WhatsApp_Video_2026-02-14_at_10.04.46_PM_on3kpz.mp4",
  },
  {
    id: "new6",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771088094/WhatsApp_Video_2026-02-14_at_9.25.03_PM_ubcsac.mp4",
  },
  {
    id: "v1",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771066472/WhatsApp_Video_2026-02-14_at_3.47.44_PM_gywytx.mp4",
    title: "Surface Preparation & Grinding",
    description:
      "Mechanical grinding and thorough cleaning of the mosaic surface before waterproofing application. Removing old coatings, debris, and dust to ensure a porous substrate for maximum adhesion.",
    location: "Bidar",
    tag: "Preparation", 
  },
  {
    id: "v2",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771066434/WhatsApp_Video_2026-02-14_at_3.47.46_PM_vd2aqu.mp4",
    title: "Base Leveling & Clearing",
    description:
      "Clearing and leveling the terrace base to prepare for the Brick Bat Coba layering. This initial step ensures a clean, uniform surface, allowing for proper insulation and effective drainage in the subsequent waterproofing layers.",
    location: "Bidar",
    tag: "Preparation",
  },
  {
    id: "v3",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771066434/WhatsApp_Video_2026-02-14_at_3.50.21_PM_lr2wuh.mp4",
    title: "Hydrostatic Ponding Test",
    description:
      "Final quality assurance testing where the waterproofed tank/area is filled with water (ponding) and left for observation. This verifies water tightness and ensures there are no leaks before the project is handed over.",
    location: "Bidar",
    tag: "Testing",
  },
  {
    id: "v4"
    ,
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771066425/WhatsApp_Video_2026-02-14_at_3.47.45_PM_2_dcr73k.mp4",
    title: "Brick Bat Coba Layering & Wetting",
    description:
      "Laying of broken brick bats followed by systematic surface wetting to prepare the roof for waterproofing. This phase creates a protective, insulating slope while clearing fine debris to ensure a strong bond with the upcoming cementitious layers.",
    location: "Bidar",
    tag: "testing",
  },
  {
    id: "v5",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771066422/WhatsApp_Video_2026-02-14_at_3.47.46_PM_1_hxy79m.mp4",
    title: "Brick Bat Coba Layering & Wetting",
    description:
      "Laying of broken brick bats followed by systematic surface wetting to prepare the roof for waterproofing. This phase creates a protective, insulating slope while clearing fine debris to ensure a strong bond with the upcoming cementitious layers.",
    location: "Bidar",
    tag: "Treatment",
  },
  {
    id: "v6",
    url: "https://res.cloudinary.com/drn7svaxk/video/upload/v1771066412/WhatsApp_Video_2026-02-14_at_3.47.45_PM_1_fh1fdb.mp4",
    title: "Brick Bat Coba Application",
    description:
      "Laying of broken brick bats over a cement mortar base to create a protective, insulating, and sloping layer on the roof. This traditional method provides excellent thermal insulation and serves as a durable base for the final waterproofing finish.",
    location: "Bidar",
    tag: "Substrate Preparation",
  },
];

/* ───────── Quality helpers ───────── */
type Quality = "auto" | "720p" | "1080p";

function getCloudinaryUrl(originalUrl: string, quality: Quality): string {
  if (quality === "auto") return originalUrl;
  const transformations: Record<string, string> = {
    "720p": "w_1280,h_720,c_limit,q_auto:good",
    "1080p": "w_1920,h_1080,c_limit,q_auto:best",
  };
  return originalUrl.replace("/upload/", `/upload/${transformations[quality]}/`);
}

/* ───────── Single Video Card ───────── */
function VideoCard({ video, index }: { video: VideoItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [quality, setQuality] = useState<Quality>("auto");
  const [showQualityMenu, setShowQualityMenu] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  const handleQualityChange = useCallback((q: Quality) => {
    if (!videoRef.current) return;
    const currentTime = videoRef.current.currentTime;
    const wasPlaying = !videoRef.current.paused;
    setQuality(q);
    setShowQualityMenu(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = currentTime;
        if (wasPlaying) videoRef.current.play();
      }
    }, 100);
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;
    const pct =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  }, []);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!videoRef.current) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pct * videoRef.current.duration;
    },
    []
  );

  const qualityLabel: Record<Quality, string> = {
    auto: "Auto",
    "720p": "720p",
    "1080p": "1080p",
  };

  const handleFullscreen = useCallback(() => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if ((videoRef.current as any).webkitEnterFullscreen) {
      (videoRef.current as any).webkitEnterFullscreen();
    }
  }, []);

  return (
    <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 60, scale: 0.95 }
        }
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Card className="group overflow-hidden border-white/10 dark:border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-white/[0.06] dark:to-white/[0.02] backdrop-blur-xl shadow-2xl hover:border-white/20 dark:hover:border-white/15 transition-all duration-500 py-0 gap-0">
          {/* video section */}
          <div className="relative aspect-[9/16] overflow-hidden bg-black/40">
            <video
              ref={videoRef}
              src={getCloudinaryUrl(video.url, quality)}
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* centre play button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlay}
              className="absolute inset-0 w-full h-full flex items-center justify-center z-10 hover:bg-transparent"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg shadow-black/30"
              >
                {isPlaying ? (
                  <Pause size={24} className="text-white" />
                ) : (
                  <Play size={24} className="text-white ml-1" />
                )}
              </motion.div>
            </Button>

            {/* top badges */}
            {(video.location || video.tag) && (
              <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                {video.location && (
                  <Badge variant="default" className="gap-1.5">
                    <MapPin size={12} />
                    {video.location}
                  </Badge>
                )}
                {video.tag && (
                  <Badge variant="secondary">
                    {video.tag}
                  </Badge>
                )}
              </div>
            )}

            {/* bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
              {/* progress bar */}
              <div
                className="w-full h-1 bg-white/20 rounded-full cursor-pointer mb-2 group/prog"
                onClick={handleProgressClick}
              >
                <motion.div
                  className="h-full bg-primary rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover/prog:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
                    onClick={toggleMute}
                  >
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </Button>
                </div>

                <div className="flex items-center gap-1">
                  {/* quality selector */}
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs text-white/80 hover:text-white hover:bg-white/10 gap-1"
                      onClick={() => setShowQualityMenu(!showQualityMenu)}
                    >
                      {qualityLabel[quality]}
                      <ChevronDown size={12} />
                    </Button>

                    <AnimatePresence>
                      {showQualityMenu && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute bottom-full mb-1 right-0 bg-black/80 backdrop-blur-xl rounded-lg border border-white/10 overflow-hidden min-w-[90px] shadow-xl"
                        >
                          {(["auto", "720p", "1080p"] as Quality[]).map((q) => (
                            <Button
                              key={q}
                              variant="ghost"
                              size="sm"
                              onClick={() => handleQualityChange(q)}
                              className={`w-full justify-start rounded-none h-7 px-3 text-xs hover:bg-white/10 ${
                                quality === q
                                  ? "text-primary font-semibold"
                                  : "text-white/70"
                              }`}
                            >
                              {qualityLabel[q]}
                            </Button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-white/80 hover:text-white hover:bg-white/10"
                    onClick={handleFullscreen}
                  >
                    <Maximize2 size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* card body using shadcn Card components */}
          {(video.title || video.description) && (
            <>
              <CardHeader className="pb-0 pt-5 px-5">
                <CardTitle className="text-lg font-bold leading-snug">
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 pt-2">
                <CardDescription className="leading-relaxed">
                  {video.description}
                </CardDescription>
              </CardContent>
            </>
          )}
        </Card>
      </motion.div>
  );
}

/* ───────── Stats ───────── */
const stats = [
  { icon: Droplets, value: "500+", label: "Roofs Waterproofed" },
  { icon: Shield, value: "10+", label: "Years Warranty" },
  { icon: MapPin, value: "2", label: "Cities Active" },
  { icon: Wrench, value: "25+", label: "Years Experience" },
];

/* ───────── Main Section ───────── */
export default function BehindTheScenes() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* ── Background effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container relative px-4 md:px-6 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <AnimatedGroup variants={transitionVariants}>
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            {/* pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="gap-2 px-4 py-1.5 mb-6 text-xs tracking-wider uppercase"
              >
                <Droplets size={14} />
                Behind the Scenes
              </Badge>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-5">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Waterproofing &amp; Solutions
              </span>
              <br />
              <span className="text-primary">
                In Action
              </span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Watch our expert team execute world-class waterproofing solutions
              across{" "}
              <span className="font-semibold text-foreground">
                Bidar
              </span>{" "}
              and{" "}
              <span className="font-semibold text-foreground">
                Mumbai
              </span>
              . From surface preparation to final inspection every step is handled with precision and care.
            </p>
          </motion.div>
        </AnimatedGroup>

        {/* ── Stats bar using shadcn Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 max-w-3xl mx-auto"
        >
          {stats.map((s, i) => (
            <Card
              key={i}
              className="items-center gap-2 py-5 border-white/10 dark:border-white/[0.08] bg-gradient-to-br from-white/5 to-white/[0.02] dark:from-white/[0.06] dark:to-white/[0.02] backdrop-blur-md"
            >
              <CardContent className="flex flex-col items-center gap-2 p-0">
                <s.icon
                  size={22}
                  className="text-primary"
                />
                <span className="text-2xl font-extrabold text-foreground">
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {s.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </motion.div>


        {/* ── Video Grid ── */}
        {/* ── Video Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {videos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom CTA using shadcn Card + Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-20"
        >
          <Card className="relative mx-auto max-w-3xl overflow-hidden border backdrop-blur-xl">
            {/* glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 rounded-full blur-[80px]" />

            <CardContent className="relative text-center py-8 md:py-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Need Waterproofing Solutions?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                We deliver premium waterproofing services in{" "}
                <strong className="text-foreground">
                  Bidar
                </strong>{" "}
                and{" "}
                <strong className="text-foreground">
                  Mumbai
                </strong>{" "}
                with a 10+ year warranty. Get a free consultation today.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact-us" className="gap-2">
                  Get Free Quote
                  <Wrench size={16} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
