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
  className = "w-full h-full border-0 block",
}: AutoPauseYouTubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasStarted, setHasStarted] = useState(autoPlay && !posterImage);

  const sendCommand = (func: "playVideo" | "pauseVideo") => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: func, args: "" }),
        "*"
      );
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sendCommand("playVideo");
          } else {
            sendCommand("pauseVideo");
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
  };

  const autoPlayParam = hasStarted ? 1 : 0;
  const muteParam = muted ? 1 : 0;
  const loopParam = loop ? 1 : 0;
  const controlsParam = controls ? 1 : 0;
  const playlistParam = loop ? `&playlist=${videoId}` : "";

  const srcUrl = `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&autoplay=${autoPlayParam}&mute=${muteParam}&loop=${loopParam}${playlistParam}&controls=${controlsParam}&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div ref={containerRef} className="relative w-full h-full bg-zinc-950 overflow-hidden">
      {/* Custom Poster Cover on Top */}
      {posterImage && !hasStarted && (
        <div
          onClick={handleStart}
          className="absolute inset-0 z-30 cursor-pointer group flex items-center justify-center bg-black select-none"
        >
          <img
            src={posterImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
          />

          {/* Dark Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 group-hover:via-black/10 transition-colors pointer-events-none" />

          {/* Central Play Button */}
          <div className="relative z-10 flex flex-col items-center gap-2.5 pointer-events-none text-center px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black flex items-center justify-center shadow-glow-amber group-hover:scale-110 transition-transform">
              <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-black ml-1 text-black" />
            </div>
            <span className="text-xs sm:text-sm font-black text-white uppercase tracking-wider bg-black/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-500/50 shadow-lg">
              Clique para Assistir
            </span>
          </div>
        </div>
      )}

      {/* The YouTube iframe */}
      {(hasStarted || !posterImage) && (
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
