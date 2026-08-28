"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface AutoPauseYouTubeProps {
  videoId: string;
  title: string;
  posterImage?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
}

export function AutoPauseYouTube({
  videoId,
  title,
  posterImage,
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  className = "w-full h-full object-cover border-0",
}: AutoPauseYouTubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay || !posterImage);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isPlaying) return;

    const sendCommand = (func: "playVideo" | "pauseVideo") => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: func, args: "" }),
          "*"
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view
            sendCommand("playVideo");
          } else {
            // Video is out of view -> PAUSE automatically
            sendCommand("pauseVideo");
          }
        });
      },
      {
        threshold: 0.25, // Pauses when less than 25% visible
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [isPlaying]);

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  // Embed URL setup
  const autoPlayParam = isPlaying ? 1 : 0;
  const muteParam = muted ? 1 : 0;
  const loopParam = loop ? 1 : 0;
  const controlsParam = controls ? 1 : 0;
  const playlistParam = loop ? `&playlist=${videoId}` : "";

  const srcUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=${autoPlayParam}&mute=${muteParam}&loop=${loopParam}${playlistParam}&controls=${controlsParam}&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div ref={containerRef} className="relative w-full h-full bg-zinc-950">
      {posterImage && !isPlaying && !imgError ? (
        <div
          onClick={handleStartPlay}
          className="relative w-full h-full cursor-pointer group overflow-hidden flex items-center justify-center"
        >
          {/* Custom Poster Image */}
          <img
            src={posterImage}
            alt={title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:via-black/20 transition-colors" />

          {/* Central Pulsing Play Button */}
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-glow-amber group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-black ml-1" />
            </div>
            <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500/40">
              Assistir Demonstração
            </span>
          </div>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={srcUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={className}
        />
      )}
    </div>
  );
}
